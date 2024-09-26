import { NavLink } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdPolicy } from "react-icons/md";
import { IoMdContact } from "react-icons/io";

function Footer() {
  return (
    <div className="bg-pink-300">
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
  );
}

export default Footer;
