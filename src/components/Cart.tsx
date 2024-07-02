// Cart.tsx
import React, { useState } from "react";
import { useCart } from "./CartContext";

interface CartProps {
  openCart: boolean;
  setOpenCart: React.Dispatch<React.SetStateAction<boolean>>;
}

const Cart: React.FC<CartProps> = ({ openCart, setOpenCart }) => {
  const { cartItems, removeFromCart, emptyCart, updateCartQuantity } =
    useCart();
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      return;
    }

    setIsCheckoutModalOpen(true);
  };

  const handleQuantityChange = (productId: number, quantity: number) => {
    if (quantity === 0) {
      removeFromCart(productId);
    } else {
      updateCartQuantity(productId, quantity);
    }
  };

  return (
    <div
      className={`cart-container fixed top-0 right-0 h-full w-full sm:w-1/3 duration-700 ease-in-out z-50 shadow-2xl bg-brown-100 rounded-xl ${
        openCart ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center p-4 border-b">
        <h1 className="text-lg font-bold">Shopping Cart</h1>
        <button onClick={() => setOpenCart(!openCart)}>
          <span className="text-4xl">&times;</span>
        </button>
      </div>

      <div className="p-4 overflow-y-auto max-h-[750px]">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.product.id} className="flex flex-col mb-2">
              <div className="flex items-center justify-between p-2">
                <div className="flex items-center">
                  <img
                    src={item.product.image}
                    alt={item.product.title}
                    className="w-10 h-10 mr-2"
                  />
                  <p>{item.product.title}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.product.id)}
                  className="text-2xl"
                >
                  &times;
                </button>
              </div>

              <div className="flex flex-col justify-between">
                <div className="flex items-center mr-10">
                  <span>Quantity:</span>
                  <input
                    className="w-10 text-start border border-gray-300 rounded-lg p-1"
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(
                        item.product.id,
                        Number(e.target.value)
                      )
                    }
                  />
                </div>
                <div className="flex justify-between">
                  <span>${item.product.price * item.quantity}</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="p-4 border-t">
          <h2 className="text-lg font-bold">
            Total: $
            {cartItems
              .reduce(
                (total, item) => total + item.quantity * item.product.price,
                0
              )
              .toFixed(2)}
          </h2>
          <button
            className="w-full py-2 mt-2 bg-blue-500 text-white rounded-lg"
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </div>
      )}

      {isCheckoutModalOpen && (
        <div
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={{ maxWidth: "500px" }}
        >
          <div className="bg-white rounded-lg p-4">
            <h2 className="text-lg font-bold">Thank you for your purchase!</h2>
            <button
              className="w-full py-2 mt-2 bg-blue-500 text-white rounded-lg"
              onClick={() => {
                setIsCheckoutModalOpen(false);
                emptyCart();
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
