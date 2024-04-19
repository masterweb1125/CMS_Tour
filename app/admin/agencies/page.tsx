"use client";
import AgencyGrid from "@/src/components/admin/agency/AgencyGrid";
import CardComponent from "@/src/components/dashboard/dashboardComponents/Card";
import SearchInput from "@/src/components/dashboard/dashboardComponents/SearchInput";
import { Grid } from "@mui/material";
import { useState } from "react";
import Supplier from "../supplier/page";


function Agency() {
  const [agencyData, setAgencyData] = useState<any>({})
  const [sceenView, setScreenView] = useState<any>(1)

  const ComponentView: any = {
    1:
      <AgencyListView setAgencyData={setAgencyData} setScreenView={setScreenView} />,
    2: <AgencyDetailsView setAgencyData={setAgencyData} setScreenView={setScreenView} />,
  }

  return (
    <div>
      {ComponentView[sceenView]}
    </div>
  );
}

export default Agency;

const AgencyListView = ({ setAgencyData, setScreenView }: { setAgencyData: any; setScreenView: any }) => (
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
          title="Total Agencies"
          count={"2,420"}
          percentage={"40%"}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <CardComponent
          title="Total Revenue"
          count={"1,210"}
          percentage={"10%"} />
      </Grid>

    </Grid>

    <Grid container spacing={3} my={2}>
      <Grid item xs={12}><AgencyGrid title={"Agency listed"} onSetData={setAgencyData} setScreenView={setScreenView} /></Grid>
    </Grid>
  </div>
)

const AgencyDetailsView = ({ setAgencyData, setScreenView }: { setAgencyData?: any; setScreenView?: any }) => (
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