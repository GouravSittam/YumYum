import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlices";

const AppStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
export default AppStore;
