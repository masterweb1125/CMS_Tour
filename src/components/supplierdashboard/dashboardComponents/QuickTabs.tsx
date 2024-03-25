import { Grid } from "@mui/material";
import Link from "next/link";
import React from "react";

function QuickTabs() {
  return (
    <Grid container className="border rounded-lg mt-10 p-3">
      <Grid item xs={12} md={3} className="items-center flex">
        <h1 className="text-xl font-semibold">Quick Tabs</h1>
      </Grid>
      <Grid item xs={12} md={9}>
        <div className="flex-col flex lg:flex-row justify-between md:justify-end gap-4 md:items-center">
          <button className="border-[#ffa500] text-black border font-mont text-base font-semibold px-4 py-2 rounded-md">
            Create Booking
          </button>
          <button className="border-[#ffa500] text-black border font-mont text-base font-semibold px-4 py-2 rounded-md">
            Tour inquiries
          </button>
          <Link href="/supplierdashboard/tour/edit">
            <button className="border-[#ffa500] text-black border font-mont text-base font-semibold px-4 py-2 rounded-md">
              Edit Tour
            </button>
          </Link>
          <Link href="/supplierdashboard/tour/create">
            <button className="bg-[#FFA500] text-white font-semibold text-base px-4 py-2 rounded-md">
              Create Tour
            </button>
          </Link>
        </div>
      </Grid>
    </Grid>
  );
}

export default QuickTabs;
