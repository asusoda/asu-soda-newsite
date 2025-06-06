"use client"

import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import ProductCard from "./ProductCard"

interface Product {
  name: string
  description: string
  price: string
}

interface ProductCarouselProps {
  products: Product[]
  title?: string
  showTitle?: boolean
  emptyMessage?: string
  autoPlay?: boolean
  infinite?: boolean
  showDots?: boolean
  showArrows?: boolean
  enableHover?: boolean
  itemsToShow?: {
    desktop?: number
    tablet?: number
    mobile?: number
  }
}

export default function ProductCarousel({
  products,
  title = "Products",
  showTitle = false,
  emptyMessage = "No products available",
  autoPlay = false,
  infinite = true,
  showDots = true,
  showArrows = true,
  enableHover = false,
  itemsToShow = {
    desktop: 3,
    tablet: 2,
    mobile: 1,
  },
}: ProductCarouselProps) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: itemsToShow.desktop || 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: itemsToShow.tablet || 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: itemsToShow.mobile || 1,
      slidesToSlide: 1,
    },
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-8 text-gray-400">
        <p>{emptyMessage}</p>
        <p className="text-sm mt-2">Check back later for new items.</p>
      </div>
    )
  }

  return (
    <div className="product-carousel">
      {showTitle && <h3 className="text-2xl font-bold mb-6">{title}</h3>}

      <Carousel
        responsive={responsive}
        infinite={infinite && products.length > (itemsToShow.desktop || 3)}
        autoPlay={autoPlay}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="transform 300ms ease-in-out"
        transitionDuration={300}
        containerClass="carousel-container"
        removeArrowOnDeviceType={!showArrows ? ["desktop", "tablet", "mobile"] : []}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding"
        arrows={showArrows}
        showDots={showDots && products.length > (itemsToShow.desktop || 3)}
        pauseOnHover={autoPlay}
      >
        {products.map((product, index) => (
          <div key={index} className="px-2 py-4">
            <ProductCard product={product} index={index} isCarousel={true} disableHover={!enableHover} />
          </div>
        ))}
      </Carousel>

      <style jsx global>{`
        .product-carousel .react-multi-carousel-list {
          padding: 0 20px;
        }
        
        .product-carousel .react-multi-carousel-item {
          padding: 0 8px;
        }
        
        .product-carousel .react-multi-carousel-dot-list {
          margin-top: 20px;
        }
        
        .product-carousel .react-multi-carousel-dot button {
          background-color: #4a5568;
          border: none;
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
        
        .product-carousel .react-multi-carousel-dot--active button {
          background-color: #3182ce;
        }
        
        .product-carousel .react-multiple-carousel__arrow {
          background-color: #2d3748;
          border: 1px solid #4a5568;
          color: white;
          min-width: 40px;
          min-height: 40px;
          z-index: 20;
        }
        
        .product-carousel .react-multiple-carousel__arrow:hover {
          background-color: #4a5568;
        }
        
        .product-carousel .react-multiple-carousel__arrow::before {
          font-size: 16px;
        }
      `}</style>
    </div>
  )
}
