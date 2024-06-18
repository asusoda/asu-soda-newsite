import PropTypes from "prop-types"; // Import PropTypes
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./styles/index.css";

function App({ children }) {
  return (
    <>
      <Navbar />
      <main className="home">{children}</main>
      <Footer />
    </>
  );
}

// Define prop types for App component
App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
