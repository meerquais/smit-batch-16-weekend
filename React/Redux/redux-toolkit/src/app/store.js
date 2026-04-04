import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/payloadcounter/counterSlice";
import todoReducer from "../features/todo/todoSlice";
import cartReducer from "../features/cart/cartSlice";
import productsReducer from "../features/products/productsSlice";

export const store = configureStore({
  reducer:{
    counter:counterReducer,
    todos:todoReducer,
    cart:cartReducer,
    products:productsReducer
  }
})