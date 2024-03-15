import DataGridTabs from "@/src/components/dashboard/commissionandincentive/DataGridTabs";
import CardComponent from "@/src/components/dashboard/dashboardComponents/Card";
import DashboardHeader from "@/src/components/dashboard/dashboardComponents/DashboardHeader";
import { Grid } from "@mui/material";

function CommissionAndIncentive() {
  return (
    <div>
      <DashboardHeader name="Tosrium Agency" />

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <CardComponent
            title="Recent Revenue"
            count={"2,420"}
            percentage={"40%"}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <CardComponent
            title="Current Commission"
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
          <DataGridTabs title={"Programs"} />
        </Grid>
      </Grid>
    </div>
  );
}

export default CommissionAndIncentive;
