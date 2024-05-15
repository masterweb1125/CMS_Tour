"use client";
import React from "react";
import { IconButton, InputLabel, NativeSelect } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import toast from "react-hot-toast";

type Props = {};

const Client_BrowseForm = (props: Props) => {
  const [destination, setDestination] = React.useState("");


  const handleSearch = (e:any) => {
    e.preventDefault();
    toast.success("This functionality is in progress", {
      style: { width: "auto", height: "auto" },
      duration: 3000,
    });
}

  return (
    <div className="px-11 py-6 min-w-max w-3/5 bg-black bg-opacity-20 rounded-md text-white">
      <form onSubmit={handleSearch} className="w-full">
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
              <option value="swiss-alps">Swiss Alps</option>
              <option value="paris">Paris</option>
              <option value="new-york">New York</option>
              <option value="tokyo">Tokyo</option>
              <option value="maldives">Maldives</option>
              <option value="california">California</option>
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
              <option value="adventure">Adventure</option>
              <option value="cultural ">Cultural </option>
              <option value="heritage">Heritage tours</option>
              <option value="wellness">Wellness retreats</option>
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
              <option value="option1">1-3 days</option>
              <option value="option2">4-6 days</option>
              <option value="option3">7-12 days</option>
              <option value="option3">15+ days</option>
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
              <option value="option1">200$ - 350$</option>
              <option value="option2">400$ - 700$ </option>
              <option value="option2">700$ - 1000$ </option>
              <option value="option2">1000$ - 1800$ </option>
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
