import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HOST } from "../utils/constants";

const baseQuery = fetchBaseQuery({
  baseUrl: HOST,
  // credentials:'include',
});

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery,
  tagTypes: ["User"],
  endpoints: (builder) => ({}),
});


