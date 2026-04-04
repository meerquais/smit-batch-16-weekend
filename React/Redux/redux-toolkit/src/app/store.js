import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/payloadcounter/counterSlice";
import todoReducer from "../features/todo/todoSlice"

export const store = configureStore({
  reducer:{
    counter:counterReducer,
    todos:todoReducer,
  }
})