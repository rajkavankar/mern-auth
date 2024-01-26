import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
  userData: null,
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload
    },
    setCredentials: (state, action) => {
      state.userInfo = action.payload
      state.userData = null
      localStorage.setItem("userInfo", JSON.stringify(action.payload))
    },
    logout: (state) => {
      state.userInfo = null
      localStorage.removeItem("userInfo")
    },
  },
})

export default userSlice.reducer

export const { setCredentials, logout, setUserData } = userSlice.actions
