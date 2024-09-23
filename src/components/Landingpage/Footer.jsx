import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-pink-300">
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
  );
}

export default Footer;
