import DataGrid from "@/src/components/admin/tracktour/DataGrid";
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
            title="Total Revenue"
            count={"2,420"}
            percentage={"40%"}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <CardComponent
            title="Bookings"
            count={"1,210"}
            percentage={"10%"}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <CardComponent
            title="Active Tours"
            descritpion={
              "Click To view the Tour list in progress Click To view the Tour list in progress"
            }
            Component={() => (
              <button className="bg-[#FFA500] text-white font-medium text-xs px-6 py-2 rounded-lg mt-5">
                View Active Tours
              </button>
            )}
          />
        </Grid>
      </Grid>

      <Grid container spacing={3} mt={2}>
        <Grid item xs={12}>
          <DataGrid title={""}  />
        </Grid>
      </Grid>
    </div>
  );
}

export default CommissionAndIncentive;
