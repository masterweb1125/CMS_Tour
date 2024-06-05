"use client";
import React, { useState } from "react";
import { IconButton, InputLabel, NativeSelect } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Filters } from "@/src/redux/features/general.slice";
type Props = {};

const Client_BrowseForm = (props: Props) => {
  const [formData, setFormData] = useState({
    destination: "",
    category: "",
    duration: "",
    price: "",
  });

  const dispatch = useDispatch();

  const handleInputChange = (e:any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSearch = (e:any) => {
    e.preventDefault();
    dispatch(Filters(formData))
  
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
              value={formData.destination}
              onChange={handleInputChange}
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
              value={formData.category}
              onChange={handleInputChange}
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
              name="duration"
              value={formData.duration}
              onChange={handleInputChange}
              className="border border-r-[16px] border-transparent min-w-56 p-4 mt-1 block w-full border-gray-300 text-black bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:white sm:text-sm"
            >
              <option value="">Select Number of Days</option>
              <option value="1 - 3">1-3 days</option>
              <option value="4 - 6">4-6 days</option>
              <option value="7 - 10">7-12 days</option>
              <option value="10 - 15">10-15 days</option>
              <option value="15 - 30">15-30 days</option>
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
              value={formData.price}
              onChange={handleInputChange}
              className="border border-r-[16px] border-transparent min-w-56 p-4 mt-1 block w-full border-gray-300 text-black bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:white sm:text-sm"
            >
              <option value="">Select Price Range</option>
              <option value="50-100">$50 - $100</option>
              <option value="100-500">$100 - $500 </option>
              <option value="500-1000">$500 - $1000</option>
              <option value="1000-2000">1k$ - $2k </option>
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
