import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiShoppingCart, FiShoppingBag, FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-pink-300 fixed top-0 w-full z-30">
      <div className="flex items-center justify-between px-6 md:px-20 py-4">
        {/* Logo */}
        <NavLink
          to="/"
          className="font-bold text-lg md:text-xl font-poppins flex items-center gap-2"
        >
          <span>SHOPPER</span>
          <FiShoppingBag />
        </NavLink>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl focus:outline-none"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Navigation Links and Cart in Sidebar for Mobile */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex md:gap-8 md:items-center absolute md:static top-full left-0 w-full md:w-auto bg-pink-300 md:bg-transparent md:flex-row flex flex-col md:h-auto z-20`}
        >
          <NavLink
            to="/shop"
            className={(e) =>
              e.isActive
                ? "text-lg md:text-xl font-bold font-roboto py-4 md:py-0"
                : "text-lg md:text-xl font-roboto py-4 md:py-0"
            }
            onClick={() => setMenuOpen(false)}
          >
            Shop
          </NavLink>
          <NavLink
            to="/men"
            className={(e) =>
              e.isActive
                ? "text-lg md:text-xl font-bold font-roboto py-4 md:py-0"
                : "text-lg md:text-xl font-roboto py-4 md:py-0"
            }
            onClick={() => setMenuOpen(false)}
          >
            Men
          </NavLink>
          <NavLink
            to="/women"
            className={(e) =>
              e.isActive
                ? "text-lg md:text-xl font-bold font-roboto py-4 md:py-0"
                : "text-lg md:text-xl font-roboto py-4 md:py-0"
            }
            onClick={() => setMenuOpen(false)}
          >
            Women
          </NavLink>
          <NavLink
            to="/jewelery"
            className={(e) =>
              e.isActive
                ? "text-lg md:text-xl font-bold font-roboto py-4 md:py-0"
                : "text-lg md:text-xl font-roboto py-4 md:py-0"
            }
            onClick={() => setMenuOpen(false)}
          >
            Jewelry
          </NavLink>

          {/* Cart in Sidebar for Mobile */}
          <NavLink
            to="/cart"
            className="flex md:hidden font-bold text-lg md:text-xl font-montserrat items-center gap-2 py-4"
            onClick={() => setMenuOpen(false)}
          >
            <FiShoppingCart />
            <span>Cart</span>
          </NavLink>
        </div>

        {/* Cart in Navbar for Larger Screens */}
        <NavLink
          to="/cart"
          className="hidden md:flex font-bold text-lg md:text-xl font-montserrat items-center gap-2"
        >
          <FiShoppingCart />
          <span>Cart</span>
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
