import CardComponent from "@/src/components/dashboard/dashboardComponents/Card";
import DashboardHeader from "@/src/components/dashboard/dashboardComponents/DashboardHeader";
import { Grid } from "@mui/material";

function Dashboard() {
  return (
    <div>
      <DashboardHeader name="Jhon Christopher" />

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <CardComponent
            title="Total Revenue"
            count={"2,420"}
            percentage={"40%"}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <CardComponent title="Booking" count={"1,210"} percentage={"10%"} />
        </Grid>
        <Grid item xs={12} md={4}>
          <CardComponent
            title="Active Tour"
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

      <Grid container spacing={3} mt={2}></Grid>
    </div>
  );
}

export default Dashboard;
