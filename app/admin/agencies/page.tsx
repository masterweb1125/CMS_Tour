"use client";
import AgencyGrid from "@/src/components/admin/agency/AgencyGrid";
import CardComponent from "@/src/components/dashboard/dashboardComponents/Card";
import SearchInput from "@/src/components/dashboard/dashboardComponents/SearchInput";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import Supplier from "../supplier/page";
import { GetAllAgency, hendleGetTotalRevenue } from "@/src/redux/service/AdminApi";


function Agency() {
  const [agencyData, setAgencyData] = useState<any>({})
  const [sceenView, setScreenView] = useState<any>(1)
   const [revenueData, setRevenueData] = useState({});
   const [allAgencyData, setallAgencyData] = useState([])
  
  const fetchRevenue = async () => {
    try {
      const res = await hendleGetTotalRevenue();
      const res1 = await GetAllAgency();
      setRevenueData(res);
      setallAgencyData(res1);
    } catch (error) {
      console.error("Error fetching revenue data:", error);
    }
  };

  useEffect(() => {
    fetchRevenue();
  }, []);
  const ComponentView: any = {
    1:
    <AgencyListView allAgency={allAgencyData} setAgencyData={setAgencyData} setScreenView={setScreenView} revenueData={revenueData} />,
    2: <AgencyDetailsView setAgencyData={setAgencyData} setScreenView={setScreenView} revenueData={revenueData} />,
  }
 
  return (
    <div>
      {ComponentView[sceenView]}
    </div>
  );
}

export default Agency;

const AgencyListView = ({ setAgencyData, setScreenView,revenueData,allAgency}: { setAgencyData: any; setScreenView: any,revenueData:any}) => { 
  
 console.log(allAgency)
  return (
  <div>
    <Grid container mb={3} spacing={3}>
      <Grid item xs={12} md={4}>
        <div>
          <h1 className="text-2xl font-semibold">Agencies</h1>
          <h6 className="text-xs text-[#475467] pt-1 md:pt-0">
            Here are all the agencies register at our platform
          </h6>
        </div>
      </Grid>
      <Grid item xs={12} md={5} />
      <Grid item xs={12} md={3} className="flex items-center">
        <SearchInput />
      </Grid>
    </Grid>

    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
     <CardComponent
          title="Total Agencyies"
          count={allAgency.totalAgency}
          percentage={`${allAgency.percentageChange}%`} />
      </Grid>
      <Grid item xs={12} md={6}>
      <CardComponent
            title="Total Revenue"
            count={revenueData?.totalRevenue}
            percentage={`${revenueData?.percentageChange}%`}
          />
      </Grid>

    </Grid>

    <Grid container spacing={3} my={2}>
      <Grid item xs={12}><AgencyGrid title={"Agency listed"} allAgency={allAgency} onSetData={setAgencyData} setScreenView={setScreenView} /></Grid>
    </Grid>
  </div>)
}

const AgencyDetailsView = ({ setAgencyData, setScreenView,revenueData }: { setAgencyData?: any; setScreenView?: any;revenueData:any }) => (
  <div>
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
          percentage={"10%"} />
      </Grid>
      <Grid item xs={12} md={4}>
        <CardComponent
          title="Current Incentives"
          count={"316"}
          percentage={"20%"}
        />
      </Grid>

    </Grid>

    <Supplier />
  </div>
)