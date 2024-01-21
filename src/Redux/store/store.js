import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slice/cartSlice";


//store
const store = configureStore({
  reducer: {

    carts: cartReducer,
   
  },
});

export default store;
