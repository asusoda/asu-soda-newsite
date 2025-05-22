"use client"

import { Helmet } from "react-helmet-async"
import { Outlet, useLocation } from "react-router-dom"
import { useEffect } from "react"
import SodaShopHeader from "../../components/SodaShop/SodaShopHeader"

// This is the main layout component for all shop pages
export default function SodaShopLayout() {
  const location = useLocation()

  useEffect(() => {
    // Hide the main navbar when on any shop page
    const navbar = document.querySelector("nav")
    if (navbar) {
      navbar.style.display = "none"
    }

    // Restore navbar when component unmounts
    return () => {
      if (navbar) {
        navbar.style.display = "flex"
      }
    }
  }, [])

  return (
    <>
      <Helmet>
        <title>SoDA Shop</title>
        <meta name="description" content="SoDA Shop - Get your SoDA merchandise and more!" />
        <meta
          name="keywords"
          content="soda shop, merchandise, asu, arizona state university, software developers association"
        />
      </Helmet>

      {/* Custom Header for all shop pages */}
      <SodaShopHeader />

      {/* This is where the nested route content will be rendered */}
      <Outlet />
    </>
  )
}
