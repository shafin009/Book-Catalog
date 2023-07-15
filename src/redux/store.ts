import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "../features/AllSlices/wishlistSlice";
import productReducer from "../features/AllSlices/productSlice";
import { api } from "./../features/api/apiSlice";
import userReducer from "../features/AllSlices/userSlice";

const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
    product: productReducer,
    user: userReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
