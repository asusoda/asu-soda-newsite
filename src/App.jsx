import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import Home from "./components/Home";

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <NavigationBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
