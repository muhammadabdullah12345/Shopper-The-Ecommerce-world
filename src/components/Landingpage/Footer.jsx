import { NavLink, Link } from "react-router-dom";
function Footer() {
  return (
    <div className="bg-pink-300">
      <div className="flex items-center justify-center gap-10 p-[6px] text-xl">
        <a href="#" className="text-xl font-roboto">
          facebook
        </a>
        <a href="#" className="text-xl font-roboto">
          Instagram
        </a>
        <NavLink
          to="/contact"
          className={(e) =>
            e.isActive ? "text-xl font-bold font-roboto" : "text-xl font-roboto"
          }
        >
          Contact
        </NavLink>
        <NavLink
          to="/policies"
          className={(e) =>
            e.isActive ? "text-xl font-bold font-roboto" : "text-xl font-roboto"
          }
        >
          Policies
        </NavLink>
      </div>
      <div className="flex items-center justify-center text-sm py-1 font-roboto">
        &copy;Copyright {new Date().getFullYear()} by Shopper Inc.
      </div>
    </div>
  );
}

export default Footer;
