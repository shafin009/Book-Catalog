import { createSlice } from "@reduxjs/toolkit";
import {IBook } from '@/types/globalTypes'


interface IWishlist{
    books:IBook[]
}

const initialState={
    books:
}

const wishlistSlice = createSlice({});
