import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const ProductDetails = () => {
  const { productId } = useParams<{ productId: string }>();
  const [productDetails, setProductDetails] = useState({});

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

  console.log(productDetails);

  return (
    <div className="flex w-full h-[100vh] mx-auto justify-center">
      <div className="flex flex-col md:flex-row w-full h-full justify-center items-center">
        <div className="w-full md:w-1/2 h-full">
          <img
            src="./blouse.jpg"
            alt="Product Image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col p-4">
          <h2 className="text-2xl font-bold">Product Details</h2>
          <div className="flex flex-col">
            <p className="font-semibold">Product Name:</p>
            <p className="text-gray-500">Product Description</p>
          </div>
          <div className="flex flex-col mt-4">
            <p className="font-semibold">Price:</p>
            <p className="text-gray-500">$99.99</p>
          </div>
          <div className="mt-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
