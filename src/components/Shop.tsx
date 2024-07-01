import "./Shop.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Pagination from "react-js-pagination";
import { useCart } from "./CartContext";

interface Product {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
  title: string;
}

export default function Shop() {
  const [products, setProducts] = useState<Product[]>([]);
  const { addToCart } = useCart(); // Destructure addToCart from useCart

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Get products list
  const getProductsList = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products`);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      const productsData = await response.json();
      setProducts(productsData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductsList();
  }, []);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="lg:pl-60 lg:pr-60 md:p-0">
      <div className="card-container grid lg:grid-cols-4 md:grid-cols-2 gap-4 mt-10 ">
        {currentProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-lg p-4 min-w-40 flex flex-col justify-between"
          >
            <Link
              to={`/product/${product.id}`}
              className="flex flex-col items-center"
            >
              <div className="flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-60 h-60 object-cover mb-4"
                />
              </div>
              <p className="text-gray-700 text-base">{product.title}</p>
              <p className="text-gray-700 text-base line-clamp-2">
                {product.description.slice(0, 10)}...
              </p>
              <p className="text-gray-700 text-lg font-bold mb-2">
                ${product.price}
              </p>
            </Link>
            <button
              onClick={() => addToCart(product)}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:scale-105 duration-300"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10 mb-2">
        <Pagination
          activePage={currentPage}
          itemsCountPerPage={productsPerPage}
          totalItemsCount={products.length}
          pageRangeDisplayed={5}
          onChange={handlePageChange}
          itemClass="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring ring-gray-500 focus:border-gray-500 active:bg-gray-100"
          linkClass="relative inline-flex items-center px-2 py-2 border text-sm font-medium bg-white text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring ring-gray-500 focus:border-gray-500"
          activeLinkClass="z-10 bg-gray-500 text-black border-gray-500"
          prevPageText="Prev"
          nextPageText="Next"
        />
      </div>
    </div>
  );
}
