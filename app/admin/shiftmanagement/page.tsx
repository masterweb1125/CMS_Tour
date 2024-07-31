"use client";
import ShiftGrid from "@/src/components/admin/shiftmangment/shiftGraid";
import SearchInput from "@/src/components/dashboard/dashboardComponents/SearchInput";
import { CreateShift, GetAllShift } from "@/src/redux/service/AdminApi";
import { Grid, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import ShiftShadular from '@/src/components/admin/shift/ShiftShadular.js'
import { toUSVString } from "util";

const InputClasses = "font-mont text-xs rounded-lg hover:outline-none";

export default function ShiftManagement() {
  const [shifts, setShifts] = useState([]);
  const [newShift, setNewShift] = useState({ name: "", shiftDate: "" });
  const today = new Date().toISOString().split("T")[0];

  const fetch = async () => {
    const res = await GetAllShift();
    // setShifts(res.data);
  };

  useEffect(() => {
    fetch();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewShift((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // import toast from 'react-hot-toast'; // Ensure you have this import if not already present

  const handleCreateShift = async () => {
    // Assuming newShift is defined and initialized somewhere in your component
    const { name, shiftDate } = newShift;

    if (!name) {
      return toast.error("Please fill in the name field");
    }

    if (!shiftDate) {
      return toast.error("Please fill in the shift date field");
    }

    try {
      const response = await CreateShift({ name, shiftDate });
      if (response.status) {
        setNewShift({name:"",shiftDate:""})
        toast.success("Shift added successfully");
      } else {
        toast.error("Failed to add shift");
      }
    } catch (error) {
      toast.error("Server error");
    }
  };

  return (
    <div>
      <Toaster />
      <Grid container>
        <Grid item xs={12}>
          <div className="border rounded-lg px-8 py-4">
            <Grid container className="">
              <Grid item xs={12} mb={4}>
                <div className="border-t-4 border-[#FFA500] w-24 " />
                <p className="text-[#344054] text-lg font-semibold pt-4">
                  Add shift
                </p>
                <h6 className="text-xs text-[#475467] pt-1 md:pt-0">
                  Select user which you want to add something or deduct
                </h6>
              </Grid>
            </Grid>

            <Grid container spacing={3}>
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
                  value={newShift.name}
                  onChange={handleChange}
                  InputProps={{
                    className: InputClasses,
                  }}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <label className="text-[#344054] text-sm font-medium">
                  Shift Date <span className="text-red-500">*</span>
                </label>
                <br />
                <TextField
                  name="shiftDate"
                  type="date"
                  className="w-full font-mont"
                  placeholder="Percentage"
                  size="small"
                  value={newShift.shiftDate}
                  onChange={handleChange}
                  InputProps={{
                    className: InputClasses,
                  }}
                  inputProps={{
                    min: today, // Set the minimum date to today
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <button
                  onClick={handleCreateShift}
                  className="bg-[#FFA500] text-white font-medium text-xs px-6 py-2 rounded-lg "
                >
                  Add to shift
                </button>
              </Grid>
            </Grid>

            <ShiftShadular refetch={newShift}/>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
