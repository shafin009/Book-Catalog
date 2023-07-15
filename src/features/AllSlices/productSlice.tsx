import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IProduct {
  searchQuery: string;
  filterGenre: string;
  filterYear: string;
}

const initialState: IProduct = {
  searchQuery: "",
  filterGenre: "",
  filterYear: "",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setFilterGenre: (state, action: PayloadAction<string>) => {
      state.filterGenre = action.payload;
    },
    setFilterYear: (state, action: PayloadAction<string>) => {
      state.filterYear = action.payload;
    },
  },
});

export const { setSearchQuery, setFilterGenre, setFilterYear } =
  productSlice.actions;
export default productSlice.reducer;
