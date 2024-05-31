"use client";
import { createSlice } from "@reduxjs/toolkit";
export const UserInfo = createSlice({
  name: "user",
  initialState: {
    UserInfo: {},
    cart: {},
    loading: false,
    error: false,
  },

  reducers: {
    MakingApiRequest: (state) => {
      state.loading = true;
    },

    setUserData: (state, action) => {
      state.UserInfo = action.payload;
    },

    addToCart: (state, action) => {
      state.cart = action.payload;
    },

    LogOutUser: (state) => {
      state.UserInfo = {};
    },

    ApiRequestFailed: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  setUserData,
  ApiRequestFailed,
  MakingApiRequest,
  LogOutUser,
  addToCart,
} = UserInfo.actions;

export default UserInfo.reducer;
