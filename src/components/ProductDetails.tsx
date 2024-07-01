import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
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

const ProductDetails = () => {
  const { productId } = useParams<{ productId: string }>();
  const [productDetails, setProductDetails] = useState<Product | null>(null);
  const navigate = useNavigate();

  const { addToCart } = useCart();

  // Get details for a product based on id
  const getProductDetails = async () => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${productId}`
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      const itemData = await response.json();
      setProductDetails(itemData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductDetails();
  }, [productId]);

  return (
    <div className="flex w-full min-h-[100vh] mx-auto justify-center items-center">
      <div className="flex flex-col md:flex-row w-full h-full justify-center items-center">
        <div className="w-full md:w-1/2 h-full flex items-center justify-center shadow-lg">
          <img
            src={productDetails?.image}
            alt="Product Image"
            className="w-full h-full bg-cover"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col p-4">
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold mb-2">{productDetails?.title}</h2>
            <button
              className="text-purple-600 bg-purple-100 border-2 border-purple-600 hover:bg-purple-500 hover:text-white text-sm font-medium px-4 rounded-md focus:outline-none"
              onClick={() => navigate(-1)}
            >
              &lt; Back
            </button>
          </div>
          <div className="flex flex-col">
            <p className="text-gray-700">{productDetails?.description}</p>
          </div>
          <div className="flex flex-col mt-4">
            <p className="font-semibold">Price:</p>
            <p className="text-gray-900">$ {productDetails?.price}</p>
          </div>
          <div className="mt-4">
            <button
              onClick={
                productDetails ? () => addToCart(productDetails) : undefined
              }
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:scale-105 duration-300"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
