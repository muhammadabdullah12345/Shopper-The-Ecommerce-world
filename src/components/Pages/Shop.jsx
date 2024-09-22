import { NavLink } from "react-router-dom";
function Shop() {
  return (
    <div className="pt-20 h-screen bg-gradient-to-b from-pink-100 via-pink-200 to-pink-100  flex justify-center items-center">
      <div className="grid grid-cols-3  gap-20 ">
        <NavLink
          to="/men"
          className=" relative bg-cover bg-center h-64 w-full rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          style={{ backgroundImage: `url('/images/men.png')` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
          <div className="relative z-10 p-4">
            <h2 className="text-white text-2xl font-bold">Men</h2>
            <p className="text-white">Explore our men's collection.</p>
          </div>
        </NavLink>
        <NavLink
          to="/women"
          className="relative bg-cover bg-center h-72 w-full rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          style={{ backgroundImage: `url('/images/women.png')` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
          <div className="relative z-10 p-4">
            <h2 className="text-white text-2xl font-bold">Women</h2>
            <p className="text-white">Discover the latest trends for women.</p>
          </div>
        </NavLink>
        <NavLink
          to="/jewelery"
          className="relative bg-cover bg-center h-80 w-full rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          style={{ backgroundImage: `url('/images/jewelery.png')` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
          <div className="relative z-10 p-4 flex flex-col justify-between">
            <h2 className="text-white text-2xl font-bold">Jewelry</h2>
            <p className="text-white">Shop exclusive jewelry pieces.</p>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Shop;
