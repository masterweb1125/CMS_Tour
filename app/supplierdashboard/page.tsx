import CardComponent from "@/src/components/dashboard/dashboardComponents/Card";
import DashboardHeader from "@/src/components/dashboard/dashboardComponents/DashboardHeader";
import DataGrid from "@/src/components/supplierdashboard/dashboardComponents/DataGrid";
import QuickTabs from "@/src/components/supplierdashboard/dashboardComponents/QuickTabs";
import { Client01 } from "@/src/utils/images/images";
import { Divider, Grid } from "@mui/material";
import Image from "next/image";

const feedbackData = [
  {
    img: Client01,
    fullname: "Jhon Chritopher",
    comment:
      "See what Our Valuebale Clients Share about there Journey See what Our Valuebale Clients Share",
  },
  {
    img: Client01,
    fullname: "Jhon Chritopher",
    comment:
      "See what Our Valuebale Clients Share about there Journey See what Our Valuebale Clients Share",
  },
  {
    img: Client01,
    fullname: "Jhon Chritopher",
    comment:
      "See what Our Valuebale Clients Share about there Journey See what Our Valuebale Clients Share",
  },
];

function Dashboard() {
  return (
    <div>
      <DashboardHeader name="Jhon Christopher" />

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <CardComponent
            title="Upcoming Bookings"
            count={"2,420"}
            percentage={"40%"}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <CardComponent
            title="Total Revenue"
            count={"1,210"}
            percentage={"10%"}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <CardComponent
            title="Top Selling Tour"
            count={"Maldive To Lahore"}
            // percentage={"20%"}
            records={"900+"}
          />
        </Grid>
      </Grid>

      <QuickTabs />

      <Grid container spacing={3} mt={2}>
        <Grid item xs={12} md={6}>
          <DataGrid title={"Top Selling Tours"} />
        </Grid>

        <Grid item xs={12} md={6}>
          <div className="border rounded-lg px-5">
            <h3 className="pt-2 mt-4 text-xl font-semibold">
              Clients Feedback
            </h3>
            {feedbackData.map((item, index) => (
              <div key={index}>
                <div className="mb-3 mt-5">
                  <div className="flex gap-3 items-center">
                    <Image
                      className="w-10 h-10 object-cover rounded-full "
                      src={Client01}
                      alt="client_01"
                    />
                    <div className="client-info font-mont">
                      <p className="text-base font-semibold text-black-variant">
                        Jhon Chritopher
                      </p>
                      <p className="text-xs text-[#4F4F4FCC]">Feb-03-2023</p>
                    </div>
                  </div>

                  <p className="pt-2 text-base text-[#757575] font-mont">
                    See what Our Valuebale Clients Share about there Journey See
                    what Our Valuebale Clients Share
                  </p>
                </div>
                <Divider className="mb-4" />
              </div>
            ))}
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Dashboard;
