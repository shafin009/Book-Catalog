import { IBook } from "@/types/globalTypes";
import { createSlice } from "@reduxjs/toolkit";

interface IWishlist {
  books: IBook[];
}

const initialState: IWishlist = {
  books: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {},
});

export default wishlistSlice.reducer;
