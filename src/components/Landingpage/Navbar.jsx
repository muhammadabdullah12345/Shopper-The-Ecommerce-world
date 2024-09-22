import { NavLink } from "react-router-dom";
import { FiShoppingCart, FiShoppingBag } from "react-icons/fi";
function Navbar() {
  return (
    <div className="flex items-center justify-between px-20 py-4 bg-pink-300 fixed top-0 w-full z-10">
      <NavLink
        to="/"
        className="font-bold text-xl font-poppins flex items-center justify-center gap-2"
      >
        <span>SHOPPER</span>
        <FiShoppingBag />
      </NavLink>
      <div className="flex gap-8 items-center justify-center">
        <NavLink
          to="/shop"
          className={(e) =>
            e.isActive ? "text-xl font-bold font-roboto" : "text-xl font-roboto"
          }
        >
          Shop
        </NavLink>
        <NavLink
          to="/men"
          className={(e) =>
            e.isActive ? "text-xl font-bold font-roboto" : "text-xl font-roboto"
          }
        >
          Men
        </NavLink>
        <NavLink
          to="/women"
          className={(e) =>
            e.isActive ? "text-xl font-bold font-roboto" : "text-xl font-roboto"
          }
        >
          Women
        </NavLink>
        <NavLink
          to="/jewelery"
          className={(e) =>
            e.isActive ? "text-xl font-bold font-roboto" : "text-xl font-roboto"
          }
        >
          Jewelery
        </NavLink>
      </div>
      <NavLink
        to="/cart"
        className="font-bold text-xl font-montserrat flex items-center justify-center gap-2"
      >
        <FiShoppingCart />
        <span>Cart</span>
      </NavLink>
    </div>
  );
}

export default Navbar;
