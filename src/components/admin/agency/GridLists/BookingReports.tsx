"use client"
import { Grid } from "@mui/material";
import { KababMenu } from "@/src/components/dashboard/dashboardComponents/CardItems";
import { useEffect, useState } from "react";
import { GetTourByAgencyId } from "@/src/redux/service/AdminApi";
import TourCardView from "@/src/components/dashboard/bookingcomponents/TourCardView";

const columns = [
  "ID",
  "Tour Name",
  "Person",
  "Price",
  "Time",
  "Payment Status",
  "Travel Date",
  "Status",
  "Action",
];

function BookingReports({ user }) {
  const [tours, settours] = useState([]);

  const fetch = async ()=>{
    const res = await GetTourByAgencyId(user._id);
    settours(res.data)
  }
useEffect(()=>{
  fetch();
},[])
  return (
    <div className="rounded-lg mb-3">
      <Grid container mt={3} spacing={3}>
        {tours.length !== 0 ?
          tours.map((tour) => (
            <Grid item xs={12} md={4} key={tour._id}>
              <TourCardView
                userUrl={"/admin/create_tour/tour/"}
                tour={tour}
                user={user}
              />
            </Grid>
          )):<div className="flex items-start pb-4 justify-center w-full">Tours not found</div>}
      </Grid>
    </div>
  );
}

export default BookingReports;
