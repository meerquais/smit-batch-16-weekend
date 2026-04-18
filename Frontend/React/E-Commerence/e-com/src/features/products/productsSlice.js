import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import {db} from "../../firebase/config";
import { collection , getDocs , addDoc } from "firebase/firestore";


// fetch

export const fetchProducts = createAsyncThunk("products/fetch" , async()=>{
  const snap = await getDocs(collection(db,"products"));
  return snap.docs.map(doc =>({
    id:doc.id, ...doc.data()
  }))
});

// add product

export const addProduct = createAsyncThunk("products/add", async(product)=>{
  const docRef = await addDoc(collection(db,"products"), product);
  return {id:docRef.id , ...product}
});

const slice = createSlice({
  name:"products",
  initialState: {items:[],
    loading:false
  },
  extraReducers: (b)=>{
    b.addCase(fetchProducts.pending, (s)=>{s.loading = true})
    .addCase(fetchProducts.fulfilled, (s,a) =>{
      s.items = a.payload;
      s.loading = false
    })
    .addCase(addProduct.fulfilled, (s,a)=>{
      s.items.push(a.payload)
    })
  }
})

export default slice.reducer;