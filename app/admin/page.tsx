"use client";
import TourBookingCalender from "@/src/components/admin/tour_booking_calender/TourBookingCalender";
import CardComponent from "@/src/components/dashboard/dashboardComponents/Card";
import DashboardHeader from "@/src/components/dashboard/dashboardComponents/DashboardHeader";

import { Grid } from "@mui/material";
import {
  hendleGetTotalBooking,
  hendleGetTotalRevenue,
} from "../../src/redux/service/AdminApi.js";
import { useEffect, useState } from "react";
import Link from "next/link.js";
import { useRouter } from "next/navigation.js";

function Dashboard() {
  const router = useRouter();
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
 const hendleRedireaction = (url:String)=>{
   router.push(url)
 }
  // console.log("Revenue", revenueData);

  return (
    <div>
      <DashboardHeader name="Jhon Christopher" />

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <CardComponent
            title="Total Revenue"
            count={revenueData?.totalRevenue}
            percentage={`${revenueData?.percentageChange?.toFixed(2)}%`}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <CardComponent
            title="Booking"
            count={bookingData?.totalBookings}
            percentage={`${bookingData?.percentageChange}%`}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <CardComponent
            title="Active Tour"
            description={
              "Click To view the Tour list in progress Click To view the Tour list in progress"
            }
            Component={() => (
              <button onClick={()=>hendleRedireaction('/admin/track-tour')} className="bg-[#FFA500]  text-white font-medium text-xs px-6 py-2 rounded-lg mt-5">
                View Active Tours
              </button>
            )}
          />
        </Grid>
      </Grid>

      <Grid container spacing={3} mt={2}></Grid>
      <TourBookingCalender />
    </div>
  );
}

export default Dashboard;
