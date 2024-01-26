import { apiSlice } from "./apiSlice"

const AUTH_URL = "/api/auth"

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (data) => ({
        url: `${AUTH_URL}`,
        method: "POST",
        body: data,
      }),
    }),
  }),
})

export const { useRegisterUserMutation } = authApi
