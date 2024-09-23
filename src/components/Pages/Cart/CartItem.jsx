import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { clearCart, deleteItem } from "./cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  function handleDeleteItem() {
    dispatch(deleteItem(item.id));
  }

  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 my-3">
        <div className="flex gap-2 items-center">
          <div className="font-roboto">{item.quantity}</div>
          <span className="font-roboto">x</span>
          <div className="font-semibold text-balance font-poppins">
            {item.title}
          </div>
        </div>
        <div className="flex gap-4 mt-2 md:mt-0">
          <div className="font-roboto">{item.size}</div>
          <div className="font-roboto">{item.color}</div>
        </div>
        <div className="flex gap-2 mt-2 md:mt-0">
          <Button onClick={handleDeleteItem}>Delete</Button>
          <Button onClick={() => dispatch(clearCart())}>Clear Cart</Button>
        </div>
      </div>
      <div className="h-[1px] bg-slate-700 my-3 w-full"></div>
    </>
  );
}

export default CartItem;
