import CardComponent from "@/src/components/dashboard/dashboardComponents/Card";
import DashboardHeader from "@/src/components/dashboard/dashboardComponents/DashboardHeader";
import DataGrid from "@/src/components/dashboard/dashboardComponents/DataGrid";
import { Grid } from "@mui/material";

function Dashboard() {
  return (
    <div>
      <DashboardHeader name="Tosrium Agency" />

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
            percentage={"10%"}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <CardComponent
            title="Current Incentives"
            count={"316"}
            percentage={"20%"}
          />
        </Grid>
      </Grid>

      <Grid container spacing={3} mt={2}>
        <Grid item xs={12}>
          <DataGrid title={"Recent Booking"} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Dashboard;
