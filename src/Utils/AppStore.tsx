import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlices";

const AppStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof AppStore.getState>;
export type AppDispatch = typeof AppStore.dispatch;
export default AppStore;
