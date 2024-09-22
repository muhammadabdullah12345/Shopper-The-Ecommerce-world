import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { clearCart, deleteItem } from "./cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();
  function handleDeleteItem() {
    dispatch(deleteItem(item.id));
  }
  //   function handleClearCart() {
  //     dispatch(clearCart());
  //   }
  return (
    <div>
      <div className="flex items-center justify-between px-48 my-3 ">
        <div className="flex gap-2 items-center justify-center">
          <div className="font-roboto">{item.quantity}</div>
          <span className="font-roboto">x</span>
          <div className="font-semibold text-balance font-poppins">
            {item.title}
          </div>
        </div>
        <div className="font-roboto">{item.size}</div>
        <div className="font-roboto">{item.color}</div>
        {/* <div className="flex items-center justify-between gap-2">
          <div>{item.size}</div>
          <div>{item.color}</div>
        </div> */}
        <div className="flex gap-2">
          <Button onClick={handleDeleteItem}>Delete</Button>
          <Button onClick={() => dispatch(clearCart())}>Clear Cart</Button>
        </div>
      </div>
      <div className=" h-[1px] bg-slate-700 mx-48"></div>
    </div>
  );
}

export default CartItem;
