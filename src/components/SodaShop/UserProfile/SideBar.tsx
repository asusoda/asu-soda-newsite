"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { Dot } from "lucide-react"
import { cn } from "@/lib/utils"

interface User {
  name: string
  classStanding: string
  balance: number
}

interface ProfileSideBarProps {
  user: User[]
}

export default function ProfileSideBar({ user }: ProfileSideBarProps) {
  const [activeSection, setActiveSection] = useState("")
  const lastScrollY = useRef(0)
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down")
  const updateTimeoutRef = useRef<NodeJS.Timeout>()
  const lastUpdateTime = useRef(0)

  // Debounced function to update active section
  const debouncedSetActiveSection = useCallback(
    (newSection: string) => {
      const now = Date.now()
      const timeSinceLastUpdate = now - lastUpdateTime.current

      // Prevent updates that are too frequent (minimum 150ms between changes)
      if (timeSinceLastUpdate < 150 && activeSection !== "") {
        if (updateTimeoutRef.current) {
          clearTimeout(updateTimeoutRef.current)
        }

        updateTimeoutRef.current = setTimeout(() => {
          setActiveSection(newSection)
          lastUpdateTime.current = Date.now()
        }, 150 - timeSinceLastUpdate)
        return
      }

      // Clear any pending timeout
      if (updateTimeoutRef.current) {
        clearTimeout(updateTimeoutRef.current)
      }

      setActiveSection(newSection)
      lastUpdateTime.current = now
    },
    [activeSection],
  )

  useEffect(() => {
    const menuItems = ["shopfavorites", "shoppointsbreakdown", "orderhistory", "profilesettings"]
    let scrollTimeout: NodeJS.Timeout

    // Debounced scroll direction tracking
    const handleScroll = () => {
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => {
        const currentScrollY = window.scrollY
        const newDirection = currentScrollY > lastScrollY.current ? "down" : "up"

        // Only update direction if there's a significant change
        if (Math.abs(currentScrollY - lastScrollY.current) > 10) {
          setScrollDirection(newDirection)
        }
        lastScrollY.current = currentScrollY
      }, 50) // Debounce scroll events
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = new Map()

        // Collect all intersecting sections
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
            // Minimum threshold
            visibleSections.set(entry.target.id, {
              element: entry.target,
              ratio: entry.intersectionRatio,
              boundingRect: entry.boundingClientRect,
            })
          }
        })

        if (visibleSections.size === 0) return

        // Sort sections by their order in the menu
        const sortedSections = Array.from(visibleSections.entries()).sort(([idA], [idB]) => {
          const indexA = menuItems.indexOf(idA)
          const indexB = menuItems.indexOf(idB)
          return indexA - indexB
        })

        let newActiveSection = ""

        if (sortedSections.length === 1) {
          // Only one section visible, use it
          newActiveSection = sortedSections[0][0]
        } else {
          // Multiple sections visible, use scroll direction to decide
          if (scrollDirection === "down") {
            // When scrolling down, prefer the first (topmost) section
            newActiveSection = sortedSections[0][0]
          } else {
            // When scrolling up, prefer the section with highest intersection ratio
            const bestSection = sortedSections
              .map(([id, data]) => ({ id, ...data }))
              .sort((a, b) => b.ratio - a.ratio)[0]

            newActiveSection = bestSection.id
          }
        }

        // Only update if the section actually changed
        if (newActiveSection && newActiveSection !== activeSection) {
          debouncedSetActiveSection(newActiveSection)
        }
      },
      {
        threshold: 0.3, // Single threshold to reduce firing frequency
        rootMargin: "-30% 0px -30% 0px", // Balanced margins
      },
    )

    // Observe all sections
    menuItems.forEach((id) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    // Set initial active section
    const checkInitialSection = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2

      for (let i = menuItems.length - 1; i >= 0; i--) {
        const element = document.getElementById(menuItems[i])
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(menuItems[i])
          lastUpdateTime.current = Date.now()
          break
        }
      }
    }

    setTimeout(checkInitialSection, 100)

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", handleScroll)
      if (updateTimeoutRef.current) {
        clearTimeout(updateTimeoutRef.current)
      }
      clearTimeout(scrollTimeout)
    }
  }, [debouncedSetActiveSection, activeSection, scrollDirection])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const yOffset = -160
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset

      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  const menuItems = [
    { name: "Favorites", id: "shopfavorites" },
    { name: "Points Breakdown", id: "shoppointsbreakdown" },
    { name: "Order History", id: "orderhistory" },
    { name: "Profile Settings", id: "profilesettings" },
  ]

  const currentUser = user[0]

  return (
    <div className="border border-gray-700 rounded-lg p-6 sticky top-40">
      <div className="flex flex-col items-center mb-6">
        <div className="w-24 h-24 bg-gray-800 rounded-full mb-4"></div>
        <h2 className="text-xl font-bold">{currentUser.name}</h2>
        <div className="flex gap-1 text-gray-400 justify-center w-full">
          <p className="text-center">{currentUser.classStanding}</p>
          <Dot />
          <p className="text-center">{currentUser.balance} pts</p>
        </div>
      </div>

      <nav>
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "w-full text-left p-2 rounded transition-all duration-200 border-l-2", // Added duration for smoother transitions
                  activeSection === item.id
                    ? "bg-gray-800 text-white border-blue-500"
                    : "hover:bg-gray-800 hover:text-white border-transparent",
                )}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
