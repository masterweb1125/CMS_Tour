"use client";
import React from "react";
import { IconButton, InputLabel, NativeSelect } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

type Props = {};

const Client_BrowseForm = (props: Props) => {
  const [destination, setDestination] = React.useState("");

  return (
    <div className="px-11 py-6 min-w-max w-3/5 bg-black bg-opacity-20 rounded-md text-white">
      <form className="w-full">
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="form-item flex flex-col gap-2 text-left">
            <label
              htmlFor="destination"
              className="text-base font-semibold font-mont"
            >
              Destination
            </label>
            <select
              id="destination"
              name="destination"
              className="border border-r-[16px] border-transparent min-w-56 p-4 mt-1 block w-full border-gray-300 text-black bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:white sm:text-sm"
            >
              <option value="">Select Destination</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>

          <div className="form-item flex flex-col gap-2 text-left">
            <label
              htmlFor="destination"
              className="text-base font-semibold font-mont"
            >
              Category
            </label>
            <select
              id="category"
              name="category"
              className="border border-r-[16px] border-transparent min-w-56 p-4 mt-1 block w-full border-gray-300 text-black bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:white sm:text-sm"
            >
              <option value="">Select Tour Category</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>

          <div className="form-item flex flex-col gap-2 text-left">
            <label
              htmlFor="destination"
              className="text-base font-semibold font-mont"
            >
              Duration
            </label>
            <select
              id="days"
              name="days"
              className="border border-r-[16px] border-transparent min-w-56 p-4 mt-1 block w-full border-gray-300 text-black bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:white sm:text-sm"
            >
              <option value="">Select Number of Days</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>

          <div className="form-item flex flex-col gap-2 text-left">
            <label
              htmlFor="destination"
              className="text-base font-semibold font-mont"
            >
              Price Range
            </label>
            <select
              id="price"
              name="price"
              className="border border-r-[16px] border-transparent min-w-56 p-4 mt-1 block w-full border-gray-300 text-black bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:white sm:text-sm"
            >
              <option value="">Select Price Range</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>

          <div className="form-item">
            <button
              type="submit"
              className="search-button w-full h-full bg-[#FA7436] p-5 rounded-md"
            >
              <SearchIcon fontSize="large" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Client_BrowseForm;
