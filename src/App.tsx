import "./App.css";
import { CarouselDefault } from "./components/Carousel";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Shop from "./components/Shop";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <div>
      <HashRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<CarouselDefault />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
        </Routes>

        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
