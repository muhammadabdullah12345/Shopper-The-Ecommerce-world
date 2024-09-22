import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./components/Pages/Cart/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
export default store;
