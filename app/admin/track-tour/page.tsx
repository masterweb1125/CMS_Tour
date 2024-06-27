"use client";
import DataGrid from "@/src/components/admin/tracktour/DataGrid";
import CardComponent from "@/src/components/dashboard/dashboardComponents/Card";
import DashboardHeader from "@/src/components/dashboard/dashboardComponents/DashboardHeader";
import {
  hendleGetTotalBooking,
  hendleGetTotalRevenue,
} from "@/src/redux/service/AdminApi";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";

function CommissionAndIncentive() {
  const [revenueData, setRevenueData] = useState({});
  const [bookingData, setbookingData] = useState({});
  
  const fetchRevenue = async () => {
    try {
      const res = await hendleGetTotalRevenue();
      const res1 = await hendleGetTotalBooking();
      setbookingData(res1);
      setRevenueData(res);
    } catch (error) {
      console.error("Error fetching revenue data:", error);
    }
  };

  useEffect(() => {
    fetchRevenue();
  }, []);

  return (
    <div>
      <DashboardHeader name="Tosrium Agency" />

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <CardComponent
            title="Total Revenue"
            count={revenueData?.totalRevenue}
            percentage={`${revenueData?.percentageChange?revenueData?.percentageChange:'0' }%`}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <CardComponent
            title="Booking"
            count={bookingData?.totalBookings}
            percentage={`${bookingData?.percentageChange}%`}
          />
        </Grid>
        
      </Grid>

      <Grid container spacing={3} mt={2}>
        <Grid item xs={12}>
          <DataGrid title={""} />
        </Grid>
      </Grid>
    </div>
  );
}

export default CommissionAndIncentive;
