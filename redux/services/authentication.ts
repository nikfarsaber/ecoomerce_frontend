"use client";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authenticationApi = createApi({
  reducerPath: "authenticationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API}/api/otp`,
  }),
  endpoints: (builder) => ({
    getOtp: builder.mutation({
      query: (FormData) => {
        return {
          url: `/send-otp`,
          method: "POST",
          body: FormData,
        };
      },
    }),
    register: builder.mutation({
      query: (FormData) => {
        return {
          url: `/validate-otp`,
          method: "POST",
          body: FormData,
        };
      },
    }),
  }),
});

export const { useGetOtpMutation, useRegisterMutation } = authenticationApi;
