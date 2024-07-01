// Cart.tsx
import React from "react";
import { useCart } from "./CartContext";

interface CartProps {
  openCart: boolean;
  setOpenCart: React.Dispatch<React.SetStateAction<boolean>>;
}

const Cart: React.FC<CartProps> = ({ openCart, setOpenCart }) => {
  const { cartItems, total } = useCart();

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
              <div className="flex items-center mb-2 justify-between">
                <div className="flex items-center">
                  <img
                    src={item.product.image}
                    alt={item.product.title}
                    className="w-10 h-10 mr-2"
                  />
                  <p>{item.product.title}</p>
                </div>
              </div>

              <div className="flex flex-col justify-between">
                <div className="flex justify-between">
                  <span>Quantity: {item.quantity}</span>
                  <span>${item.product.price * item.quantity}</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>

      <div className="p-4 border-t">
        <h2 className="text-lg font-bold">Total: ${total.toFixed(2)}</h2>
        <button className="w-full py-2 mt-2 bg-blue-500 text-white rounded-lg">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
