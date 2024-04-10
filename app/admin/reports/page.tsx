"use client";
import ReportsGrid from "@/src/components/admin/reports/ReportsGrid";
import { Grid } from "@mui/material";

function Reports() {
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <ReportsGrid title={"Reports"} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Reports;
