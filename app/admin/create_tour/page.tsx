"use client";
import ReportsGrid from "@/src/components/admin/reports/ReportsGrid";
import { Grid } from "@mui/material";

function Page() {
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <ReportsGrid title={"Create a Tour"} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Page;
