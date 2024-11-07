import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navigation/Navbar";
import Home from "./pages/Home";
import Mentorship from "./pages/Mentorship";
import PointsSystem from "./pages/PointsSystem";
import Footer from "./components/Footer/Footer";
import Leaderboard from "./pages/LeaderBoard";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mentorship" element={<Mentorship />} />
        <Route path="/distinguishedMembers" element={<PointsSystem />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
