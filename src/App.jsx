import PropTypes from "prop-types";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />
      {/* Edit Home at /pages/Home.jsx */}
      <Home />
      <Footer />
    </>
  );
}

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
