import { NavLink } from "react-router-dom";

function EmptyCart() {
  return (
    <div className="flex items-center justify-center flex-col gap-4 bg-gradient-to-b from-pink-100 via-pink-200 to-pink-100 pt-20 h-screen text-center px-4 sm:px-6 lg:px-8">
      <NavLink
        to="/shop"
        className="text-blue-800 font-roboto text-lg sm:text-xl"
      >
        &larr; Back to shopping
      </NavLink>
      <p className="text-xl font-roboto">
        Your cart is empty. Start adding some items😊.
      </p>
    </div>
  );
}

export default EmptyCart;
