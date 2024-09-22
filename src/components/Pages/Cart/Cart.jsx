import { useSelector } from "react-redux";
import EmptyCart from "./EmptyCart";
import CartItem from "./CartItem";

function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  if (!cart.length) return <EmptyCart />;
  return (
    <div className="bg-gradient-to-b from-pink-100 via-pink-200 to-pink-100 pt-20 h-screen">
      <div className="font-bold text-xl flex items-center justify-center p-7 font-poppins">
        Your Cart
      </div>
      <div>
        {cart?.map((item, i) => (
          <CartItem item={item} key={i} />
        ))}
      </div>
    </div>
  );
}

export default Cart;
