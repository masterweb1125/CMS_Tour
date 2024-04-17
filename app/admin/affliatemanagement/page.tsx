"use client";
import AffliateManagementGrid from "@/src/components/admin/affliatemanagement/AffliateManagementGrid";
import SearchInput from "@/src/components/dashboard/dashboardComponents/SearchInput";
import { Grid, TextField } from "@mui/material";

const InputClasses = "font-mont text-xs rounded-lg hover:outline-none";

export default function AffliateManagement() {
  return (
    <div>
      <Grid container mb={3} spacing={3}>
        <Grid item xs={12} md={4}>
          <div>
            <h1 className="text-2xl font-semibold">Affliate Management</h1>
            <h6 className="text-xs text-[#475467] pt-1 md:pt-0">
              Fund any wallet quickly. you can enter a negatice amount to deduct
              from wallet.
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
              <Grid item xs={12} mb={4}>
                <div className="border-t-4 border-[#FFA500] w-24 " />
                <p className="text-[#344054] text-lg font-semibold pt-4">
                  Select Account
                </p>
                <h6 className="text-xs text-[#475467] pt-1 md:pt-0">
                  Select user which you want to add something or deduct
                </h6>
              </Grid>
            </Grid>

            <Grid container>
              <Grid item xs={12} md={6} className="pr-4">
                <label className="text-[#344054] text-sm font-medium">
                  Select User <span className="text-red-500">*</span>
                </label>
                <br />
                <select className="w-full border-solid border py-2 border-opacity-20 pl-2 rounded-lg border-black-variant bg-[#FBFBFB] outline-none">
                  <option>agency</option>
                </select>
              </Grid>

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

              <Grid item xs={12} md={6} className="pr-4 mt-4">
                <label className="text-[#344054] text-sm font-medium">
                  Sale Commission <span className="text-red-500">*</span>
                </label>
                <br />
                <TextField
                  className="w-full font-mont"
                  placeholder="Percentage"
                  size="small"
                  InputProps={{
                    className: InputClasses,
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <button className="bg-[#FFA500] text-white font-medium text-xs px-6 py-2 rounded-lg mt-5">
                  Apply Discount
                </button>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>

      <Grid container className="mt-14">
        <Grid item xs={12}>
          <AffliateManagementGrid />
        </Grid>
      </Grid>
    </div>
  );
}
