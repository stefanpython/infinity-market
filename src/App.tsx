import "./App.css";
import Navbar from "./components/Navbar";
import { CarouselDefault } from "./components/Carousel";
import Footer from "./components/Footer";
import Shop from "./components/Shop";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <HashRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<CarouselDefault />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>

        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
