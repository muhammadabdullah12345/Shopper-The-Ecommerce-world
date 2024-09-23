import { NavLink } from "react-router-dom";
import Button from "../ui/Button";

function MenItem({ item }) {
  return (
    <NavLink
      to="/mendetail"
      state={{ item }}
      className="flex flex-col md:flex-row gap-4 items-center justify-center bg-pink-50 border rounded-2xl shadow-xl border-pink-50 hover:shadow-2xl hover:translate-x-1 hover:translate-y-1 transition-all"
    >
      <div className="bg-pink-50">
        <img
          src={item.image}
          alt={item.title}
          className="h-60 w-full md:h-72 md:w-72 object-fill"
        />
      </div>
      <div className="flex items-start gap-2 justify-center flex-col px-2 py-4 text-center md:text-left">
        <div className="font-semibold text-balance font-poppins text-lg">
          {item.title}
        </div>
        <div className="font-roboto text-lg">${item.price}</div>
        <div className="font-semibold font-roboto">⭐{item.rating.rate}</div>
        <Button>Add to cart</Button>
      </div>
    </NavLink>
  );
}

export default MenItem;
