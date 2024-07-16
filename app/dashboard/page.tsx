"use client"
import CardComponent from "@/src/components/dashboard/dashboardComponents/Card";
import DashboardHeader from "@/src/components/dashboard/dashboardComponents/DashboardHeader";
import DataGrid from "@/src/components/dashboard/dashboardComponents/DataGrid";
import QuickTabs from "@/src/components/supplierdashboard/dashboardComponents/QuickTabs";
import { GetAgencyAnalytics } from "@/src/redux/service/AdminApi";
import { Grid } from "@mui/material";
import { Anybody } from "next/font/google";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Dashboard() {
  const user: any = useSelector((root: any) => root?.User?.UserInfo);
  const [analytics,setanalytics] = useState(null);

  const fetch =async ()=>{
   const analytics = await GetAgencyAnalytics(user._id);
   setanalytics(analytics);
  }
  useEffect(()=>{
   fetch()
  },[])
  
  return (
    <div>
      <DashboardHeader name="Tosrium Agency" />

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <CardComponent
            title="Recent Bookings"
            count={analytics?analytics.recentBookings.length:0}
            percentage={analytics?analytics.statistics.percentageDifference + "%":0 + "%" }
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <CardComponent
            title="Commission Earned"
            count={analytics?analytics.statistics.totalCommission:0}
            percentage={analytics?analytics.statistics.profitPercentageDifference:0}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <CardComponent
            title="Current Incentives"
            count={analytics?analytics.statistics.totalCurrentIncentives:0}
            percentage={analytics?analytics.statistics.incentivesPercentageDifference:0}
          />
        </Grid>
      </Grid>
      <QuickTabs />

      <Grid container spacing={3} mt={2}>
        <Grid item xs={12}>
          <DataGrid title={"Recent Booking"} analytics={analytics} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Dashboard;
