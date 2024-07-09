"use client";
import Client_Paginator from "@/src/components/client/libs/paginator/paginator.component";
import FiltersInput from "@/src/components/dashboard/bookingcomponents/FiltersInputs";
import TourCardView from "@/src/components/dashboard/bookingcomponents/TourCardView";
import TourDetailDescription from "@/src/components/dashboard/bookingcomponents/TourDetails/TourDetailsDescription";
import TourDetailHeader from "@/src/components/dashboard/bookingcomponents/TourDetails/TourDetailsHeader";
import DashboardHeader from "@/src/components/dashboard/dashboardComponents/DashboardHeader";
import { GetTourById } from "@/src/redux/service/AdminApi";
import { tours } from "@/src/utils/data/tours";
import { Grid } from "@mui/material";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

function Booking() {
  const params = useParams();
  const {id} = params;
  const [tour,settour] = useState({});

  const [currentPage, setCurrentPage] = useState(1);
  const toursPerPage = 6;
  
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

const fetch = async ()=>{
  const res =await GetTourById(id);
  settour(res)
  
}
useEffect(()=>{
fetch();
},[])
if(!tour._id){
 return "Loading..."
}
  return (
    <div>
      <DashboardHeader name="Tosrium Agency" />

      <div className="md:border rounded-xl border-gray-300 px-1 md:p-5">
        <TourDetailHeader tour = {tour}/>
        <TourDetailDescription tour={tour}/>
      </div>
    </div>
  );
}

export default Booking;
