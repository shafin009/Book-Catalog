import { IBook } from "@/types/globalTypes";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

interface IWishlist {
  books: IBook[];
}

const storedWishlist = localStorage.getItem("wishlist");
const initialState: IWishlist = {
  books: storedWishlist ? JSON.parse(storedWishlist) : [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<IBook>) => {
      const existing = state.books.find(
        (book) => book._id === action.payload._id
      );
      if (existing) {
        toast.error("Book already exists in wishlist");
      } else {
        state.books.push(action.payload);
        toast.success("Book added to wishlist");
      }

      localStorage.setItem("wishlist", JSON.stringify(state.books));
    },
    removeFromWishlist: (state, action: PayloadAction<IBook>) => {
      state.books = state.books.filter(
        (book) => book._id !== action.payload._id
      );

      localStorage.setItem("wishlist", JSON.stringify(state.books));
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
