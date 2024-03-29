"use client";
import DataGridTabs from "@/src/components/supplierdashboard/bookingcomponents/DataGridTabs";
import DashboardHeader from "@/src/components/supplierdashboard/dashboardComponents/DashboardHeader";
import QuickTabs from "@/src/components/supplierdashboard/dashboardComponents/QuickTabs";
import { Grid } from "@mui/material";

function Booking() {
  return (
    <div>
      <DashboardHeader name="Jhon Christopher" />

      <QuickTabs />

      <Grid container mt={7}>
        <Grid item xs={12}>
          <DataGridTabs title={"Booking Inquiries"} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Booking;
