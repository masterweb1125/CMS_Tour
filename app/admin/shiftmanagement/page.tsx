"use client";
import SearchInput from "@/src/components/dashboard/dashboardComponents/SearchInput";
import { Grid, TextField } from "@mui/material";

const InputClasses = "font-mont text-xs rounded-lg hover:outline-none";

export default function ShiftManagement() {
  return (
    <div>
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
                  className="w-full font-mont"
                  placeholder="Enter name"
                  size="small"
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
                  type="date"
                  className="w-full font-mont"
                  placeholder="Percentage"
                  size="small"
                  InputProps={{
                    className: InputClasses,
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <button className="bg-[#FFA500] text-white font-medium text-xs px-6 py-2 rounded-lg ">
                  Add to shift
                </button>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
