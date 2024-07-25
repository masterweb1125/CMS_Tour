"use client";
import DashboardHeader from "@/src/components/dashboard/dashboardComponents/DashboardHeader";
import TourEditDescription from "@/src/components/supplierdashboard/Tour/TourEdit/TourEditDescription";
import TourEditHeader from "@/src/components/supplierdashboard/Tour/TourEdit/TourEditHeader";
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
        <TourEditHeader />
        <TourEditDescription />
      </div>
    </div>
  );
}

export default Booking;
