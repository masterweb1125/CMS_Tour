"use client";
import { createSlice } from "@reduxjs/toolkit";

export const GeneralData = createSlice({
  name: "general",
  initialState: {
    filter: {},
    loading: false,
    error: false,
  },

  reducers: {
   

    Filters: (state, action) => {
          state.filter = action.payload;
    },

    
  },
});

export const { Filters } = GeneralData.actions;

export default GeneralData.reducer;
