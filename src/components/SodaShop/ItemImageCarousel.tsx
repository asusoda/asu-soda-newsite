"use client"

import { useState, useEffect } from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

interface ItemImage {
  id: string
  url: string
  alt: string
  isPrimary?: boolean
}

interface ItemImageCarouselProps {
  itemId: string
  className?: string
}

export default function ItemImageCarousel({ itemId, className = "" }: ItemImageCarouselProps) {
  const [images, setImages] = useState<ItemImage[]>([])
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true)
        setError(null)

        // need to replace
        const response = await fetch(`/api/items/${itemId}/images`)

        if (!response.ok) {
          throw new Error("Failed to fetch images")
        }

        const fetchedImages: ItemImage[] = await response.json()

        // Sort images to put primary image first
        const sortedImages = fetchedImages.sort((a, b) => {
          if (a.isPrimary && !b.isPrimary) return -1
          if (!a.isPrimary && b.isPrimary) return 1
          return 0
        })

        setImages(sortedImages)
        setSelectedImageIndex(0)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load images")
        // Fallback to placeholder images for demo
        setImages([
          { id: "1", url: "/placeholder.svg?height=600&width=600", alt: "Product image 1", isPrimary: true },
          { id: "2", url: "/placeholder.svg?height=600&width=600", alt: "Product image 2" },
          { id: "3", url: "/placeholder.svg?height=600&width=600", alt: "Product image 3" },
          { id: "4", url: "/placeholder.svg?height=600&width=600", alt: "Product image 4" },
        ])
      } finally {
        setLoading(false)
      }
    }

    if (itemId) {
      fetchImages()
    }
  }, [itemId])

  if (loading) {
    return (
      <div className={`flex flex-col ${className}`}>
        <div className="bg-gray-700 animate-pulse h-96 w-full rounded-lg mb-4"></div>
        <div className="flex gap-2">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-gray-700 animate-pulse h-20 w-20 rounded-lg"></div>
          ))}
        </div>
      </div>
    )
  }

  if (error && images.length === 0) {
    return (
      <div className={`flex flex-col items-center justify-center h-96 bg-gray-800 rounded-lg ${className}`}>
        <p className="text-gray-400 mb-2">Failed to load images</p>
        <p className="text-sm text-gray-500">{error}</p>
      </div>
    )
  }

  const selectedImage = images[selectedImageIndex]

  return (
    <div className={`flex flex-col ${className}`}>
      {/* Main Image Display */}
      <div className="relative mb-4 bg-gray-800 rounded-lg overflow-hidden">
        {selectedImage && (
          <img
            src={selectedImage.url || "/placeholder.svg"}
            alt={selectedImage.alt}
            className="w-full h-96 object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.src = "/placeholder.svg?height=600&width=600"
            }}
          />
        )}

        {/* Image counter */}
        {images.length > 1 && (
          <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
            {selectedImageIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Thumbnail Carousel */}
      {images.length > 1 && (
        <Carousel className="w-full">
          <CarouselContent className="-ml-2">
            {images.map((image, index) => (
              <CarouselItem key={image.id} className="pl-2 basis-1/4 md:basis-1/5">
                <button
                  onClick={() => setSelectedImageIndex(index)}
                  className={`relative w-full aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImageIndex === index
                      ? "border-red-500 ring-2 ring-red-500 ring-opacity-50"
                      : "border-gray-600 hover:border-gray-400"
                  }`}
                >
                  <img
                    src={image.url || "/placeholder.svg"}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = "/placeholder.svg?height=150&width=150"
                    }}
                  />
                  {image.isPrimary && (
                    <div className="absolute top-1 left-1 bg-red-600 text-white text-xs px-1 rounded">Main</div>
                  )}
                </button>
              </CarouselItem>
            ))}
          </CarouselContent>
          {images.length > 4 && (
            <>
              <CarouselPrevious className="left-0 bg-gray-800 border-gray-600 text-white hover:bg-gray-700" />
              <CarouselNext className="right-0 bg-gray-800 border-gray-600 text-white hover:bg-gray-700" />
            </>
          )}
        </Carousel>
      )}

      {/* Error message for individual images */}
      {error && images.length > 0 && <p className="text-yellow-400 text-sm mt-2">Some images may not load properly</p>}
    </div>
  )
}
