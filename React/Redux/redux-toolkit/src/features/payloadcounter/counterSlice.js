import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
  name:"counter",
  initialState:{value:0},
  reducers:{
    addByAmount:(state,action) =>{
      state.value += action.payload
    }
  }
});

export const {addByAmount} = counterSlice.actions;
export default counterSlice.reducer;