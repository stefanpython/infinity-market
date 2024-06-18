import "./App.css";
import Navbar from "./components/Navbar";
import { CarouselDefault } from "./components/Carousel";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <div className="z-50 relative">
        <Navbar />
      </div>

      <div className="-mt-[84px]">
        <CarouselDefault />
      </div>

      <Footer />
    </div>
  );
}

export default App;
