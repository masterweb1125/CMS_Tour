"use client";
import React from "react";
import BasicDatePicker from "../../libs/AppDatePicker/datepicker.component";

type Props = {};

const Client_CustomBrowseForm = (props: Props) => {
  const [destination, setDestination] = React.useState("");

  return (
    <div className="px-4 md:px-8 lg:px-14 py-8 min-w-full md:min-w-[400px] lg:min-w-[500px] bg-black bg-opacity-50 rounded-md text-white">
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold leading-normal text-white block mb-5">
        Create Custom Tour Request
      </h1>
      <p className="text-sm md:text-md lg:text-lg font-medium leading-7 text-white mb-5 w-full md:w-[70%]  m-auto">
        Embark on a journey to unforgettable destinations, where breathtaking
        landscapes meet your expectations
      </p>
      <form className="w-full">
        <div className="flex flex-col gap-5 items-center">
          <div className="flex lg:flex-row flex-col gap-5">
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
          </div>
          <div className="flex lg:flex-row flex-col gap-5">
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
            <div className="form-item flex flex-col gap-2 text-left">
              <label
                htmlFor="destination"
                className="text-base font-semibold font-mont"
              >
                Start Date
              </label>
              <input
                type="date"
                id="price"
                name="price"
                className="border border-r-[16px] border-transparent min-w-56 p-4 mt-1 block w-full border-gray-300 text-black bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:white sm:text-sm"
              />
            </div>
            <div className="form-item flex flex-col gap-2 text-left">
              <label
                htmlFor="destination"
                className="text-base font-semibold font-mont"
              >
                End Date
              </label>
              <input
                type="date"
                id="price"
                name="price"
                className="border border-r-[16px] border-transparent min-w-56 p-4 mt-1 block w-full border-gray-300 text-black bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:white sm:text-sm"
              />
            </div>
          </div>
        </div>
        <div className="form-item">
          <button
            type="submit"
            className="search-button min-w-56 mt-5 h-full bg-[#FFA500]  p-5 rounded-md"
          >
            Create Request
          </button>
        </div>
      </form>
    </div>
  );
};

export default Client_CustomBrowseForm;
