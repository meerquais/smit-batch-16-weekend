import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import {db} from "../../firebase/config";
import { doc, setDoc , getDoc } from "firebase/firestore";


// save cart 

export const saveCart = createAsyncThunk("cart/save", async({userId, items}) =>{
  await setDoc(doc(db,"carts" , userId) , {items});
});

// load cart

export const loadCart = createAsyncThunk("cart/load", async(userId)=>{
  const snap = await getDoc(doc(db,"carts" , userId));
  return snap.exists() ? snap.data().items : [];
});

const slice = createSlice({
  name:"cart",
  initialState: {items: [] , total :0},
  reducers:{
    addToCart:(s,a)=>{
      const item = a.payload;
      const ex = s.items.find(i => i.id === item.id);
      if(ex){
      ex.quantitiy += 1;
    }else{
      s.items.push({...item, quantitiy:1})
    }
    },
    calculateTotal:(s)=>{
      s.total = s.items.reduce((t,i)=> t + i.price * i.quantitiy, 0)
    }
  },
  extraReducers:(b)=>{
    b.addCase(loadCart.fulfilled,(s,a)=>{
      s.items = a.payload
    })
  }
});

export const {addToCart , calculateTotal} = slice.actions
export default slice.reducer;