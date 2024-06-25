import "./Shop.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

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

  return (
    <div className=" lg:pl-60 lg:pr-60 md:p-0">
      <div className="card-container grid lg:grid-cols-4 md:grid-cols-2 gap-4 mt-10 ">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="bg-white rounded-lg shadow-md p-4 min-w-40"
          >
            <div className="flex items-center justify-center">
              <img
                src={product.image}
                alt={product.title}
                className="w-60 h-60 object-cover mb-4"
              />
            </div>

            <p className="text-gray-700 text-base">{product.title}</p>
            <p className="text-gray-700 text-lg font-bold mb-2">
              ${product.price}
            </p>

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex w-full justify-center">
              Add to Cart
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}
