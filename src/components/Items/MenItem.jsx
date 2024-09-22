import { NavLink } from "react-router-dom";
import Button from "../ui/Button";

function MenItem({ item }) {
  return (
    <NavLink
      to="/mendetail"
      state={{ item }}
      className="flex gap-20 items-center justify-center bg-pink-50 border rounded-2xl shadow-xl border-pink-50 hover:shadow-2xl hover:translate-x-1 hover:translate-y-1 transition-all"
    >
      <div className=" bg-pink-50">
        <img src={item.image} alt="item.id" className="h-72 w-72" />
      </div>
      <div className="flex items-start gap-4 justify-center flex-col px-2 py-4">
        <div className="font-semibold text-balance font-poppins">
          {item.title}
        </div>
        <div className="font-roboto">${item.price}</div>
        <div className="font-semibold font-roboto">⭐{item.rating.rate}</div>
        <Button>Add to cart</Button>
      </div>
    </NavLink>
  );
}

export default MenItem;
