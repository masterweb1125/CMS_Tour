"use client";
import { createSlice } from "@reduxjs/toolkit";

export const GeneralData = createSlice({
  name: "general",
  initialState: {
    filter: {},
    toursData: [],
    loading: false,
    error: false,
  },

  reducers: {
   

    Filters: (state, action) => {
          state.filter = action.payload;
    },

    addToursData: (state, action) => {
      state.toursData = action.payload;
      console.log("tour data payload: ", action.payload)
    }

    
  },
});

export const { Filters, addToursData } = GeneralData.actions;

export default GeneralData.reducer;
