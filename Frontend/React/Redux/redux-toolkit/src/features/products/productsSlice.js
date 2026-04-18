import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, name: "shoes", price: 2000 },
  { id: 2, name: "Shirt", price: 1500 },
  { id: 3, name: "Watch", price: 20000 },
  { id: 4, name: "Pant", price: 2500 }
];

const productsSlice = createSlice({
  name:"products",
  initialState,
  reducers:{}
})

export default productsSlice.reducer;