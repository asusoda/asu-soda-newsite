import "@fontsource/space-grotesk"
import "@fontsource/space-grotesk/700.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { HelmetProvider } from "react-helmet-async"
import NavbarSection from "./components/Navigation/Navbar"
import Home from "./pages/Home"
import Mentorship from "./pages/Mentorship"
import PointsSystem from "./pages/PointsSystem"
import Footer from "./components/Footer/Footer"
import Leaderboard from "./pages/LeaderBoard"
import Positions from "./pages/PositionOpenings"
import SodaShopLayout from "./pages/SodaShop"
import SodaShopHome from "./pages/SodaShop/SodaShopHome"
import CategoryPage from "./pages/SodaShop/MerchCategory"
import ProfilePage from "./pages/SodaShop/UserProfile"
import InstructionsPage from "./pages/SodaShop/Instructions"
import UserCartPage from "./pages/SodaShop/Cart"
import NotFound from "./pages/NotFound"
import ScrollToTop from "./components/ScrollToTop"

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <NavbarSection />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mentorship" element={<Mentorship />} />
          <Route path="/distinguishedMembers" element={<PointsSystem />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/apply" element={<Positions />} />

          {/* Nested routes for the shop section */}
          <Route path="/shop" element={<SodaShopLayout />}>
            <Route index element={<SodaShopHome />} />

            {/* Main category routes */}
            <Route path="category/:categoryId" element={<CategoryPage />} />

            {/* Subcategory routes */}
            <Route path="category/:categoryId/:subcategoryId" element={<CategoryPage />} />

            {/* Other shop pages */}
            <Route path="profile" element={<ProfilePage />} />
            <Route path="instructions" element={<InstructionsPage />} />
            <Route path="cart" element={<UserCartPage />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </HelmetProvider>
  )
}

export default App
