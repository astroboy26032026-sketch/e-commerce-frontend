import Cookies from "js-cookie";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_API_URL,
    prepareHeaders: async (headers, { getState, endpoint }) => {
      try {
        const userInfo = Cookies.get("userInfo");
        if (userInfo) {
          const user = JSON.parse(userInfo); 
          if (user?.accessToken) {
            headers.set("Authorization", `Bearer ${user.accessToken}`);
          }
        }
      } catch {
        // Cookie corrupt — silently ignore, header will be sent without auth token
        Cookies.remove("userInfo");
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({}),
  tagTypes: ['all-category','all-products','all-coupons','review-by-product','user-orders'],
});
