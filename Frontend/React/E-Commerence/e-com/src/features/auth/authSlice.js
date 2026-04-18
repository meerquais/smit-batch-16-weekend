import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import {auth} from "../../firebase/config";
import { createUserWithEmailAndPassword,
          signInWithEmailAndPassword,
          signOut,
          onAuthStateChanged
 } from "firebase/auth";  


export const signupUser = createAsyncThunk("auth/signup", async (data) =>{
  const res = await createUserWithEmailAndPassword(auth, data.email , data.password);
  return res.user
});

export const loginUser = createAsyncThunk("auth/login" , async (data) =>{
  const res = await signInWithEmailAndPassword(auth , data.email , data.password);
  return res.user;
});

export const logoutUser = createAsyncThunk("auth/logout" , async ()=>{
  await signOut(auth);
});

// auto login

export const listenToAuth = createAsyncThunk("auth/listen" , async (__, thunkAPI) =>{
  return new Promise((resolve) =>{
    onAuthStateChanged(auth, (user)=>{
      resolve(user || null);
    });
  });
});



const slice = createSlice({
  name:"auth",
  initialState:{user:null},
  extraReducers:(builder) =>{
    builder
    .addCase(signupUser.fulfilled, (s , a) =>{s.user = a.payload})
    .addCase(loginUser.fulfilled, (s,a)=>{s.user = a.payload})
    .addCase(logoutUser.fulfilled, (s)=> {s.user = null})
    .addCase(listenToAuth.fulfilled, (s,a)=>{s.user = a.payload})
  }
})

export default slice.reducer;