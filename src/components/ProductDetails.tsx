import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { productId } = useParams<{ productId: string }>();

  // Fetch product details based on productId and display them
  // You can fetch product details from an API or a local data source

  return (
    <div>
      <h2>Product Details for Product ID: {productId}</h2>
      {/* Display product details here */}
    </div>
  );
};

export default ProductDetails;
