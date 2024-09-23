import { NavLink } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

function Herosection() {
  return (
    <div className="relative h-screen flex items-center justify-center flex-col pt-20">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-fill"
        style={{
          minWidth: "100%",
          minHeight: "100%",
        }}
      >
        <source src="/videos/bg-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay to darken the background for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content (Text and Button) */}
      <div className="relative z-10 text-center p-4">
        <h1 className="font-poppins text-3xl md:text-4xl font-bold text-white">
          Discover the Latest Fashion Trends
        </h1>
        <p className="text-lg md:text-2xl my-3 font-roboto text-white">
          Shop our collection of the season's hottest looks.
        </p>
        <NavLink
          to="/shop"
          className="font-montserrat bg-pink-400 rounded-full py-2 px-4 md:py-3 md:px-6 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:bg-pink-400 focus:ring-offset-2 hover:bg-pink-500 text-lg md:text-xl font-medium flex items-center justify-center gap-1 text-white"
        >
          Shop Now
          <FiArrowRight />
        </NavLink>
      </div>
    </div>
  );
}

export default Herosection;
