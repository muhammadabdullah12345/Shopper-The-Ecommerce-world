import { NavLink } from "react-router-dom";

function EmptyCart() {
  return (
    <div className="flex items-center justify-center flex-col gap-3 bg-gradient-to-b from-pink-100 via-pink-200 to-pink-100 pt-20 h-screen">
      <NavLink to="/shop" className="text-blue-800 font-roboto">
        &larr; Back to shopping
      </NavLink>
      <p className="flex items-center justify-center text-xl font-roboto">
        Your cart is Empty.Start adding some items😊.
      </p>
    </div>
  );
}

export default EmptyCart;
