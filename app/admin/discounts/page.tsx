"use client";
import DiscountGrid from "@/src/components/admin/discounts/DiscountGrid";
import SearchInput from "@/src/components/dashboard/dashboardComponents/SearchInput";
import { CreateDiscount } from "@/src/redux/service/AdminApi";
import { Grid, TextField } from "@mui/material";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const InputClasses = "font-mont text-xs rounded-lg hover:outline-none";

export default function Discounts() {
  const [discountData, setDiscountData] = useState({
    name: '',
    value: 0,
    expirationDate: '',
    usageLimit: 0,
    timesUsed: 0,
    isActive: false
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDiscountData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Get today's date in YYYY-MM-DD format for the min attribute
  const today = new Date().toISOString().split('T')[0];

  const createDiscount = async () => {
    // Validate all fields are filled
    if (!discountData.name && !discountData.value && !discountData.expirationDate && !discountData.usageLimit) {
      toast.error("Please fill all the fields");
      return;
    }

    // Format expiration date to the required format
    const expirationDate = new Date(discountData.expirationDate).toISOString();

    // Convert value and usageLimit to numbers before sending to the backend
    const payload = {
      ...discountData,
      expirationDate,
      value: Number(discountData.value),
      usageLimit: Number(discountData.usageLimit),
      isActive: discountData.isActive === "true" || discountData.isActive === true // Ensure isActive is a boolean
    };

    try {
      const res = await CreateDiscount(payload);
      toast.success("Discount created successfully!");
      resetForm();
    } catch (error) {
      toast.error("Error creating discount");
      console.error(error);
    }
  };

  const resetForm = () => {
    setDiscountData({
      name: '',
      value: 0,
      expirationDate: '',
      usageLimit: 0,
      timesUsed: 0,
      isActive: false
    });
  };

  return (
    <div>
      <Toaster />
      <Grid container mb={3} spacing={3}>
        <Grid item xs={12} md={4}>
          <div>
            <h1 className="text-2xl font-semibold">Discounts</h1>
            <h6 className="text-xs text-[#475467] pt-1 md:pt-0">
              Discounts which are given to any agency customer or anyone is
              managed here
            </h6>
          </div>
        </Grid>
        <Grid item xs={12} md={5} />
        <Grid item xs={12} md={3} className="flex items-center">
          <SearchInput />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <div className="border rounded-lg px-8 py-4">
            <Grid container>
              <Grid item xs={12} md={6} className="pr-4">
                <label className="text-[#344054] text-sm font-medium">
                  Name <span className="text-red-500">*</span>
                </label>
                <br />
                <TextField
                  name="name"
                  className="w-full font-mont"
                  placeholder="Enter name"
                  size="small"
                  InputProps={{
                    className: InputClasses,
                  }}
                  onChange={handleInputChange}
                />
              </Grid>

              <Grid item xs={12} md={6} className="pr-4 mt-4">
                <label className="text-[#344054] text-sm font-medium">
                  Amount <span className="text-red-500">*</span>
                </label>
                <br />
                <TextField
                  name="value"
                  value={discountData.value}
                  type="number"
                  className="w-full font-mont"
                  placeholder="Percentage"
                  size="small"
                  InputProps={{
                    className: InputClasses,
                  }}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} md={6} className="pr-4 mt-4">
                <label className="text-[#344054] text-sm font-medium">
                  Expiration Date <span className="text-red-500">*</span>
                </label>
                <br />
                <TextField
                  name="expirationDate"
                  value={discountData.expirationDate}
                  type="date"
                  className="w-full font-mont"
                  placeholder="Select Date"
                  size="small"
                  InputProps={{
                    className: InputClasses,
                  }}
                  onChange={handleInputChange}
                  inputProps={{ min: today }} // Restrict to current date and future dates
                />
              </Grid>
              <Grid item xs={12} md={6} className="pr-4 mt-4">
                <label className="text-[#344054] text-sm font-medium">
                  Max Limit <span className="text-red-500">*</span>
                </label>
                <br />
                <TextField
                  name="usageLimit"
                  value={discountData.usageLimit}
                  type="number"
                  className="w-full font-mont"
                  placeholder="Max using limit"
                  size="small"
                  InputProps={{
                    className: InputClasses,
                  }}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} md={6} className="pr-4">
                <label className="text-[#344054] text-sm font-medium">
                  Status <span className="text-red-500">*</span>
                </label>
                <br />
                <select
                  name="isActive"
                  className="w-full border-solid border py-2 border-opacity-20 pl-2 rounded-lg border-black-variant bg-[#FBFBFB] outline-none"
                  value={}
                  onChange={handleInputChange}
                >
                  <option value={true}>Active</option>
                  <option value={false}>Inactive</option>
                </select>
              </Grid>

              <Grid item xs={12}>
                <button
                  className="bg-[#FFA500] text-white font-medium text-xs px-6 py-2 rounded-lg mt-5"
                  onClick={createDiscount}
                >
                  Apply Discount
                </button>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>

      {/* Display existing discounts */}
      <Grid container className="mt-14">
        <Grid item xs={12}>
          <DiscountGrid />
        </Grid>
      </Grid>
    </div>
  );
}
