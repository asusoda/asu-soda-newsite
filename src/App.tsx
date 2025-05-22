import "@fontsource/space-grotesk";
import "@fontsource/space-grotesk/700.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async"; // Import HelmetProvider
import NavbarSection from "./components/Navigation/Navbar";
import Home from "./pages/Home";
import Mentorship from "./pages/Mentorship";
import PointsSystem from "./pages/PointsSystem";
import Footer from "./components/Footer/Footer";
import Leaderboard from "./pages/LeaderBoard";
import Positions from "./pages/PositionOpenings";
import SodaShopLayout from "./pages/SodaShop"; // Import the layout component
import SodaShopHome from "./pages/SodaShop/SodaShopHome"; // Import the shop home page
import CategoryPage from "./pages/SodaShop/MerchCategory"; // Import the category page
import ProfilePage from "./pages/SodaShop/UserProfile"; // Import the profile page
import InstructionsPage from "./pages/SodaShop/Instructions"; // Import the instructions page
import NotFound from "./pages/NotFound"; // Import the NotFound component
import ScrollToTop from "./components/ScrollToTop";

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
            <Route path="category/:categoryId" element={<CategoryPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="instructions" element={<InstructionsPage />} />
          </Route>

          <Route path="*" element={<NotFound />} /> {/* Add the catch-all route */}
        </Routes>
        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;
