// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000" }),
  endpoints: (builder) => ({
    getPopularMovies: builder.query({
      query: () => "/popular",
    }),
    getTopRatedMovies: builder.query({
      query: () => "/top_rated",
    }),
    userSignUp: builder.mutation({
      query: ({ name, email, password }) => ({
        url: "/db/sign-up",
        method: "POST",
        body: { name, email, password },
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetPopularMoviesQuery,
  useGetTopRatedMoviesQuery,
  useUserSignUpMutation,
} = apiSlice;
