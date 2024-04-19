"use client";
import SupplierGrid from "@/src/components/admin/supplier/SupplierGrid";
import { Grid } from "@mui/material";

function Supplier() {
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <SupplierGrid title={"Reports"} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Supplier;
