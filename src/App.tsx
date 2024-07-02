// App.tsx
import "./App.css";
import { CarouselDefault } from "./components/Carousel";
import { HashRouter, Routes, Route } from "react-router-dom";
import MyNavbar from "./components/Navbar"; // Update import if necessary
import Footer from "./components/Footer";
import Shop from "./components/Shop";
import ProductDetails from "./components/ProductDetails";
import About from "./components/About";
import Contact from "./components/Contact";
import { CartProvider } from "./components/CartContext";

function App() {
  return (
    <div>
      <CartProvider>
        <HashRouter>
          <MyNavbar />
          <Routes>
            <Route path="/" element={<CarouselDefault />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:productId" element={<ProductDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </HashRouter>
      </CartProvider>
    </div>
  );
}

export default App;
