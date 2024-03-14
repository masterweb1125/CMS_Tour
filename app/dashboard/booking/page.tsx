"use client";
import Client_Paginator from "@/src/components/client/libs/paginator/paginator.component";
import FiltersInput from "@/src/components/dashboard/bookingcomponents/FiltersInputs";
import TourCardView from "@/src/components/dashboard/bookingcomponents/TourCardView";
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

      <div className="md:border rounded-xl border-gray-300 p-3 md:p-5">
        <Grid container mb={3} spacing={3}>
          <Grid item xs={12} md={12}>
            <div>
              <h1 className="text-2xl font-semibold font-inter">
                Upcoming Tours and Details
              </h1>
              <h6 className="text-xs text-[#475467] pt-1 md:pt-2">
                Track, manage and forecast your customers and orders.
              </h6>
            </div>
          </Grid>
        </Grid>

        <div className="rounded-xl md:p-6 md:shadow-4xl">
          <FiltersInput />
        </div>

        <Grid container mt={3} spacing={3}>
          {tours.map((tour, index) => (
            <Grid item xs={12} md={4} key={index}>
              <TourCardView tour={tour} />
            </Grid>
          ))}
        </Grid>

        <br />
        <Client_Paginator
          totalItems={tours?.length || 0}
          itemsPerPage={toursPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
      <br />
    </div>
  );
}

export default Booking;
