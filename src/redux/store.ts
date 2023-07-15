import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "../features/AllSlices/wishlistSlice";
import productReducer from "../features/AllSlices/productSlice";

const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
    product: productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
