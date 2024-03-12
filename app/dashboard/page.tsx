import CardComponent from "@/src/components/dashboard/dashboardComponents/Card";
import DataGrid from "@/src/components/dashboard/dashboardComponents/DataGrid";
import SearchInput from "@/src/components/dashboard/dashboardComponents/SearchInput";
import { Grid } from "@mui/material";
import React from "react";

function Dashboard() {
  return (
    <div>
      <Grid container mb={3} spacing={3}>
        <Grid item xs={12} md={8}>
          <div>
            <h1 className="text-2xl font-semibold">
              Welcome back, Tosrium Agency
            </h1>
            <h6 className="text-xs text-[#475467]">
              Track, manage and forecast your customers and orders.
            </h6>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <SearchInput />
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <CardComponent
            title="Recent Bookings"
            count={"2,420"}
            percentage={"40%"}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <CardComponent
            title="Commission Earned"
            count={"1,210"}
            percentage={"10%"}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <CardComponent
            title="Current Incentives"
            count={"316"}
            percentage={"20%"}
          />
        </Grid>
      </Grid>

      <Grid container spacing={3} mt={2}>
        <Grid item xs={12}>
          <DataGrid title={"Recent Booking"} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Dashboard;
