import { useSelector } from "react-redux";
import EmptyCart from "./EmptyCart";
import CartItem from "./CartItem";

import { NavLink } from "react-router-dom";
import { IoMdContact } from "react-icons/io";
import { MdPolicy } from "react-icons/md";
import { FaFacebook, FaInstagram } from "react-icons/fa";

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
      <div className="bg-pink-300 md:fixed md:bottom-0 md:w-full">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 pt-2 pb-1 text-lg sm:text-xl">
          <a
            href="https://www.facebook.com/login"
            className="font-roboto text-lg"
          >
            <span className="flex items-center justify-center text-2xl">
              <FaFacebook />
            </span>
            <span>Facebook</span>
          </a>

          <a
            href="https://www.instagram.com/accounts/login/"
            className="font-roboto text-lg"
          >
            <span className="flex items-center justify-center text-2xl">
              <FaInstagram />
            </span>
            <span>Instagram</span>
          </a>

          <NavLink
            to="/policies"
            className={(e) =>
              e.isActive ? "font-bold font-roboto" : "font-roboto text-lg"
            }
          >
            <span className="flex items-center justify-center text-2xl">
              <MdPolicy />
            </span>
            <span>Policies</span>
          </NavLink>

          <NavLink
            to="/contact"
            className={(e) =>
              e.isActive ? "font-bold font-roboto" : "font-roboto text-lg"
            }
          >
            <span className="flex items-center justify-center text-2xl">
              <IoMdContact />
            </span>
            <span>Contact</span>
          </NavLink>
        </div>
        <div className="flex items-center justify-center text-sm font-roboto pb-[2px]">
          &copy;Copyright {new Date().getFullYear()} Shopper Inc.
        </div>
      </div>
    </div>
  );
}

export default Cart;
