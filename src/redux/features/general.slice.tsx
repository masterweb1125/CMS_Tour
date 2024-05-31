"use client";
import { createSlice } from "@reduxjs/toolkit";

export const GeneralData = createSlice({
  name: "general",
  initialState: {
    filter: {},
    toursData: [],
    blogs: [],
    loading: false,
    error: false,
  },

  reducers: {
   

    Filters: (state, action) => {
          state.filter = action.payload;
    },

    addToursData: (state, action) => {
      state.toursData = action.payload;
    },

    addBlogs: (state, action) => {
      state.blogs = action.payload;
    },

    
  },
});

export const { Filters, addToursData, addBlogs } = GeneralData.actions;

export default GeneralData.reducer;
