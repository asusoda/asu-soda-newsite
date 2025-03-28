import "@fontsource/space-grotesk";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async"; // Import HelmetProvider
import NavbarSection from "./components/Navigation/Navbar";
import Home from "./pages/Home";
import Mentorship from "./pages/Mentorship";
import PointsSystem from "./pages/PointsSystem";
import Footer from "./components/Footer/Footer";
import Leaderboard from "./pages/LeaderBoard";
import Positions from "./pages/PositionOpenings";
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
          <Route path="/positions" element={<Positions />} />
        </Routes>
        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;
