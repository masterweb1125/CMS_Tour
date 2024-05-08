"use client";
import { createSlice } from "@reduxjs/toolkit";

export const UserInfo = createSlice({
  name: "user",
  initialState: {
    UserInfo: {},
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

    LogOutUser: (state) => {
      state.UserInfo = {};
    },
    ApiRequestFailed: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { setUserData, ApiRequestFailed, MakingApiRequest, LogOutUser } =
  UserInfo.actions;

export default UserInfo.reducer;
