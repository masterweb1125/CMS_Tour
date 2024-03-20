"use client";
import SearchIcon from "@mui/icons-material/Search";
import { Grid } from "@mui/material";
import { useState } from "react";

export default function FiltersInput() {
  const [destination, setDestination] = useState("");

  return (
    <form className="w-full">
      <Grid container spacing={3}>
        <Grid item xs={12} md={2.7}>
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
              className="p-4 block w-full border rounded-lg focus:outline-none"
            >
              <option value="">Select Destination</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
        </Grid>

        <Grid item xs={12} md={2.7}>
          <div className="form-item flex flex-col gap-2 text-left">
            <label
              htmlFor="destination"
              className="text-base font-semibold font-mont"
            >
              Travel Date
            </label>
            <input
              type="date"
              className="p-[13px] block w-full border rounded-lg focus:outline-none"
              name="travelDate"
            />
          </div>
        </Grid>

        <Grid item xs={12} md={2.7}>
          <div className="form-item flex flex-col gap-2 text-left">
            <label
              htmlFor="Supplier"
              className="text-base font-semibold font-mont"
            >
              Supplier
            </label>
            <select
              id="days"
              name="days"
              className="p-4 block w-full border rounded-lg focus:outline-none"
            >
              <option value="">Select Supplier</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
        </Grid>

        <Grid item xs={12} md={2.7}>
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
              className="p-4 block w-full border rounded-lg focus:outline-none"
            >
              <option value="">Select Price Range</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
        </Grid>

        <Grid item xs={12} md={1}>
          <button
            type="submit"
            className="search-button w-full h-full bg-[#FFA500] p-4 md:p-5 rounded-md"
          >
            <SearchIcon className="hidden md:block" fontSize="large" />
            <span className="block md:hidden font-semibold">
              Search
            </span>
          </button>
        </Grid>
      </Grid>
    </form>
  );
}
