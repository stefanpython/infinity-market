import "./Shop.css";
import { Link } from "react-router-dom";

export default function Shop() {
  const products = [
    {
      image: "./blouse.jpg",
      description: "Black T-Shirt",
      price: "$19.99",
    },
    {
      image: "./blouse.jpg",
      description: "Blue Jeans",
      price: "$49.99",
    },
    {
      image: "./blouse.jpg",
      description: "Blue Jeans",
      price: "$49.99",
    },
    {
      image: "./blouse.jpg",
      description: "Blue Jeans",
      price: "$49.99",
    },

    // Add more products here
  ];

  return (
    <div className="h-[100vh] lg:pl-60 lg:pr-60 md:p-0">
      <div className="card-container grid lg:grid-cols-4 md:grid-cols-2 gap-4 mt-10 ">
        {products.map((product) => (
          <Link
            key={product.description}
            to={`/product/${product.description}`}
            className="bg-white rounded-lg shadow-md p-4 min-w-40"
          >
            <div className="flex items-center justify-center">
              <img
                src={product.image}
                alt={product.description}
                className="w-60 h-60 object-cover mb-4"
              />
            </div>

            <p className="text-gray-700 text-base">{product.description}</p>
            <p className="text-gray-700 text-lg font-bold mb-2">
              {product.price}
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
