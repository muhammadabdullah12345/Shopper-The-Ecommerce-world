import { useSelector } from "react-redux";
import EmptyCart from "./EmptyCart";
import CartItem from "./CartItem";

import { NavLink } from "react-router-dom";

function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  if (!cart.length) return <EmptyCart />;

  return (
    <div className=" pt-20 h-full">
      <div className="font-bold text-xl md:text-2xl flex items-center justify-center p-7 font-poppins">
        Your Cart
      </div>
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 md:px-0">
        {cart?.map((item, i) => (
          <CartItem item={item} key={i} />
        ))}
      </div>
      <div className="bg-pink-300 fixed bottom-0 w-full">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 p-2 text-lg sm:text-xl">
          <a href="#" className="font-roboto">
            Facebook
          </a>
          <a href="#" className="font-roboto">
            Instagram
          </a>
          <NavLink
            to="/contact"
            className={(e) =>
              e.isActive ? "font-bold font-roboto" : "font-roboto"
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/policies"
            className={(e) =>
              e.isActive ? "font-bold font-roboto" : "font-roboto"
            }
          >
            Policies
          </NavLink>
        </div>
        <div className="flex items-center justify-center text-sm sm:text-base py-1 font-roboto">
          &copy;Copyright {new Date().getFullYear()} Shopper Inc.
        </div>
      </div>
    </div>
  );
}

export default Cart;
