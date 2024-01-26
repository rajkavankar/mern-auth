import { apiSlice } from "./apiSlice"

const OTP_URL = "/api/otp"

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getOtp: builder.mutation({
      query: (data) => ({
        url: `${OTP_URL}/sendotp`,
        method: "POST",
        body: data,
      }),
    }),
    verifyOtp: builder.mutation({
      query: (data) => ({
        url: `${OTP_URL}/verifyotp`,
        method: "POST",
        body: data,
      }),
    }),
  }),
})

export const { useGetOtpMutation, useVerifyOtpMutation } = userApi
