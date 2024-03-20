"use client";
import Client_Paginator from "@/src/components/client/libs/paginator/paginator.component";
import FiltersInput from "@/src/components/dashboard/bookingcomponents/FiltersInputs";
import TourCardView from "@/src/components/dashboard/bookingcomponents/TourCardView";
import TourDetailDescription from "@/src/components/dashboard/bookingcomponents/TourDetails/TourDetailsDescription";
import TourDetailHeader from "@/src/components/dashboard/bookingcomponents/TourDetails/TourDetailsHeader";
import DashboardHeader from "@/src/components/dashboard/dashboardComponents/DashboardHeader";
import { tours } from "@/src/utils/data/tours";
import { Grid } from "@mui/material";
import { useState } from "react";

function Booking() {
  const [currentPage, setCurrentPage] = useState(1);
  const toursPerPage = 6;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <DashboardHeader name="Tosrium Agency" />

      <div className="md:border rounded-xl border-gray-300 px-1 md:p-5">
        <TourDetailHeader />
        <TourDetailDescription />
      </div>
    </div>
  );
}

export default Booking;
