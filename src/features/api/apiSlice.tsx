/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/restrict-template-expressions */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
  tagTypes: ["comments", "book"],
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/books",
    }),
    singleBooks: builder.query({
      query: (_id) => `/books/${_id}`,
    }),
    postComment: builder.mutation({
      query: ({ _id, data }) => ({
        url: `/comment/${_id}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["comments"],
    }),
    getComments: builder.query({
      query: (_id) => `/comment/${_id}`,
      providesTags: ["comments"],
    }),
    addbooks: builder.mutation({
      query: ({ data }) => ({
        url: "/item",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["book"],
    }),

    updateBook: builder.mutation({
      query: ({ _id, data }) => ({
        url: `/books/update/${_id}`,
        method: "PATCH",
        data: data,
      }),
    }),

    deleteBook: builder.mutation({
      query: (_id) => ({
        url: `/books/${_id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetBooksQuery,
  useSingleBooksQuery,
  usePostCommentMutation,
  useGetCommentsQuery,
  useAddbooksMutation,
  useDeleteBookMutation,
  useUpdateBookMutation,
} = api;
