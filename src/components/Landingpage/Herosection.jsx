import { NavLink } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
function Herosection() {
  return (
    <div className="pt-20 flex items-center justify-center flex-col bg-gradient-to-b from-pink-100 via-pink-200 to-pink-200 h-screen">
      <h1 className="font-poppins text-4xl font-bold">
        Discover the Latest Fashion Trends
      </h1>
      <p className="text-2xl my-3 font-roboto">
        Shop our collection of the season's hottest looks.
      </p>
      <NavLink
        to="/shop"
        className="font-montserrat bg-pink-400 rounded-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:bg-pink-400 focus:ring-offset-2 hover:bg-pink-500 text-xl font-medium flex items-center justify-center gap-1"
      >
        Shop Now
        <FiArrowRight />
      </NavLink>
    </div>
  );
}

export default Herosection;
