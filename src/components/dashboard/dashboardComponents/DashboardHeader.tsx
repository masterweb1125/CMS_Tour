import { Grid } from "@mui/material";
import React from "react";
import SearchInput from "./SearchInput";

function DashboardHeader({ name }: { name: string }) {
  return (
    <Grid container mb={3} spacing={3}>
      <Grid item xs={12} md={9}>
        <div>
          <h1 className="text-2xl font-semibold">
            Welcome back, {name}
          </h1>
          <h6 className="text-xs text-[#475467] pt-1 md:pt-0">
            Track, manage and forecast your customers and orders.
          </h6>
        </div>
      </Grid>
      <Grid item xs={12} md={3}>
        <SearchInput />
      </Grid>
    </Grid>
  );
}

export default DashboardHeader;
