export default function Cart({ openCart, setOpenCart }) {
  return (
    <div
      className={`cart-container fixed top-0 right-0 h-full w-full sm:w-1/3 duration-700 ease-in-out z-50 shadow-2xl bg-brown-100 rounded-xl`}
    >
      <div className="flex justify-between items-center p-4 border-b">
        <h1 className="text-lg font-bold">Shopping Cart</h1>
        <button onClick={() => setOpenCart(!openCart)}>
          <span className="text-4xl">&times;</span>
        </button>
      </div>

      <div className="p-4 overflow-y-auto max-h-[750px]">
        {/* {cartItems &&
      cartItems.map((item) => (
        <div key={item._id} className="flex flex-col mb-2">
          <div className="flex items-center mb-2 justify-between">
            <div className="flex items-center">
              <img
                src={`https://ecom-express-backend-production.up.railway.app/images/${item.product.image}`}
                alt=""
                className="w-10 h-10 mr-2"
              />
              <p>{item.product.name}</p>
            </div>

            <button
             
              data-testid="remove-button"
            >
              <img className="w-6 h-6" src="./bin.png" alt="recycle-bin" />
            </button>
          </div>

          <div className="flex flex-col">
            <div className="flex mr-4 justify-between">
              <p className="mr-2">Quantity:</p>
              <p>{item.quantity}</p>
            </div>

            <div className="flex justify-between">
              <p className="mr-2">Price:</p>
              <p>$12</p>
            </div>
          </div>
          <hr />
        </div>
      ))} */}
      </div>

      <div className="flex justify-between items-center p-4 border-t">
        <p>Total:</p>
        <p>$ dollars</p>
      </div>

      <div className="p-4">items</div>
    </div>
  );
}
