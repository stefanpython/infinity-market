import "./App.css";
import Navbar from "./components/Navbar";
import { CarouselDefault } from "./components/Carousel";

function App() {
  return (
    <div>
      <div className="z-50 relative">
        <Navbar />
      </div>
      <div className="-mt-[84px]">
        <CarouselDefault />
      </div>
    </div>
  );
}

export default App;
