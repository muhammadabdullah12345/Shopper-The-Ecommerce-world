import { NavLink } from "react-router-dom";
import men from "/images/men.png";
import women from "/images/women.png";
import jewelery from "/images/jewelery.jpg";
import bgImage from "/images/bg-image.jpg"; // Add your background image here

function Shop() {
  return (
    <div className="relative pt-28 h-full flex justify-center items-center mb-5">
      {/* Background image with an overlay */}
      <div
        className="absolute inset-0 bg-cover"
        style={{
          backgroundImage: `url(${bgImage})`,
          filter: "blur(5px)", // Apply a slight blur to the background image
        }}
      >
        {/* Soft overlay for background image */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Cards Grid */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 z-10 px-4 lg:py-5">
        <NavLink
          to="/men"
          className="relative bg-cover bg-center h-96  w-full rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          style={{ backgroundImage: `url(${men})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
          <div className="relative z-10 p-4">
            <h2 className="text-white text-xl sm:text-2xl font-bold">Men</h2>
            <p className="text-white text-sm sm:text-base">
              Explore our men's collection.
            </p>
          </div>
        </NavLink>

        <NavLink
          to="/women"
          className="relative bg-cover bg-center h-96 w-full rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          style={{ backgroundImage: `url(${women})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
          <div className="relative z-10 p-4">
            <h2 className="text-white text-xl sm:text-2xl font-bold">Women</h2>
            <p className="text-white text-sm sm:text-base">
              Discover the latest trends for women.
            </p>
          </div>
        </NavLink>

        <NavLink
          to="/jewelery"
          className="relative bg-cover bg-center h-96 w-full rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          style={{ backgroundImage: `url(${jewelery})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
          <div className="relative z-10 p-4">
            <h2 className="text-white text-xl sm:text-2xl font-bold">
              Jewelry
            </h2>
            <p className="text-white text-sm sm:text-base">
              Shop exclusive jewelry pieces.
            </p>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Shop;
