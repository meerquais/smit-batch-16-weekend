import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items:[],
  totalAmount:0
};

const cartSlice = createSlice({
  name:"cart",
  initialState,
  reducers:{
    addToCart: (state,action) =>{
      const item = action.payload;
      const existing = state.items.find(i => i.id === item.id);

      if(existing){
        existing.quantity += 1;
      }else{
        state.items.push({...item, quantity:1})
      }
    },
    removeFromCart: (state,action)=>{
      state.items = state.items.filter(i => i.id !== action.payload);
    },
    increaseQty: (state, action) =>{
      const item = state.items.find(i => i.id === action.payload);
      if(item){
        item.quantity += 1;
      }

    },
    decreaseQty: (state,action)=>{
      const item = state.items.find(i => i.id === action.payload);
      if(item && item.quantity > 1){
        item.quantity -= 1;
      }
    },
    calculateTotal: (state)=>{
      let total = 0;
      state.items.forEach(i =>{
        total += i.price * i.quantity;
      });
      state.totalAmount = total;
    }




  }
});

export const {addToCart , removeFromCart , increaseQty,decreaseQty,calculateTotal} = cartSlice.actions;

export default cartSlice.reducer;