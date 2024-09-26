import { useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  decreaseItemQuantity,
  getCurrentQuantityById,
  increaseItemQuantity,
} from "../Pages/Cart/cartSlice";

function DetailedJeweleryItem() {
  const [color, setColor] = useState("Blue");
  const [size, setSize] = useState("Medium");
  const location = useLocation();
  const { item } = location.state;
  const dispatch = useDispatch();
  const newItem = { ...item, color, size, quantity: 1 };
  const currentQuantity = useSelector(getCurrentQuantityById(item.id));
  const isInCart = currentQuantity > 0;

  function handleAddToCart() {
    dispatch(addItem(newItem));
  }
  function handleIncrement() {
    dispatch(increaseItemQuantity(item.id));
  }
  function handleDecrement() {
    dispatch(decreaseItemQuantity(item.id));
  }

  return (
    <div className="bg-gradient-to-b from-pink-100 via-pink-200 to-pink-100 pt-20 ">
      <div className="text-center font-semibold text-2xl py-6 font-poppins">
        {item.title}
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center py-5 gap-10 md:gap-28 font-roboto px-4">
        <div className="flex flex-col gap-5">
          <div>Price: ${item.price}</div>
          <div>Rating: ⭐{item.rating.rate}</div>
          <div>{item.rating.count} Sold🙂</div>

          <div className="flex gap-2 items-center justify-center font-roboto">
            <label>Color:</label>
            <select
              className="bg-pink-400 rounded-full py-1 px-2 focus:outline-none focus:ring-2 focus:ring-pink-400 hover:bg-pink-500"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            >
              <option value="White">White</option>
              <option value="Blue">Blue</option>
              <option value="Black">Black</option>
            </select>
          </div>
          <div className="flex gap-2 items-center justify-center font-roboto">
            <label>Size:</label>
            <select
              className="bg-pink-400 rounded-full py-1 px-2 focus:outline-none focus:ring-2 focus:ring-pink-400 hover:bg-pink-500"
              value={size}
              onChange={(e) => setSize(e.target.value)}
            >
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </div>
        </div>

        <img src={item.image} alt={item.id} className="h-80 w-56 object-fill" />

        <div className="flex items-center justify-center gap-3 flex-col">
          {!isInCart && <Button onClick={handleAddToCart}>Add to cart</Button>}
          {isInCart && <Button>Add to cart</Button>}
          <div className="flex items-center justify-center gap-2">
            {isInCart && (
              <button
                onClick={handleDecrement}
                className="font-medium border rounded-full bg-pink-400 px-3 py-2 hover:bg-pink-500 font-montserrat focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm"
              >
                -
              </button>
            )}
            <span>{isInCart && currentQuantity}</span>
            {isInCart && (
              <button
                onClick={handleIncrement}
                className="font-medium border rounded-full bg-pink-400 px-3 py-2 hover:bg-pink-500 font-montserrat focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm"
              >
                +
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center px-4 md:px-[85px] font-roboto py-3">
        {item.description}
      </div>
    </div>
  );
}

export default DetailedJeweleryItem;
