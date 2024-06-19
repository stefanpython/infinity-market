import "./App.css";
import Navbar from "./components/Navbar";
import { CarouselDefault } from "./components/Carousel";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />

      <CarouselDefault />

      <Footer />
    </div>
  );
}

export default App;
