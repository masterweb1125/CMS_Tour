"use client";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import React, { useState } from "react";
import CommissionGrid from "./programgrids/CommissionGrid";
import IncentiveGrid from "./programgrids/IncentiveGrid";
import PaymentHistory from "./programgrids/PaymentHistory";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function DataGridTabs({ title }: { title: string }) {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const TabsData = [
    { title: "Commission", Component: <CommissionGrid /> },
    { title: "Incentives", Component: <IncentiveGrid /> },
    { title: "Payment History", Component: <PaymentHistory /> },
  ];

  return (
    <div className="shadow-4xl rounded-lg">
      <Grid container mb={3} spacing={3} px={3}>
        <Grid item xs={6} md={12}>
          <h1 className="text-2xl font-semibold">{title}</h1>
        </Grid>

        <Grid item xs={6} className="flex md:hidden  items-start justify-start">
          <button className="bg-[#FFA500] text-white font-mont text-sm px-3 py-2 rounded-lg">
            Download Report
          </button>
        </Grid>

        <Grid item xs={12} md={10}>
          <Box sx={{ width: "100%" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              textColor={"inherit"}
              TabIndicatorProps={{
                style: { backgroundColor: "#ffa500" },
              }}
            >
              {TabsData.map(({ title }: any, index: number) => (
                <Tab
                  key={index}
                  className="normal-case font-mont text-black"
                  label={title}
                  {...a11yProps(index)}
                />
              ))}
            </Tabs>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          md={2}
          className="hidden md:flex items-start justify-start "
        >
          <button className="bg-[#FFA500] text-white font-mont text-sm px-3 py-2 rounded-lg">
            Download Report
          </button>
        </Grid>

        <Grid item xs={12}>
          {TabsData.map(({ Component }, index) => (
            <CustomTabPanel key={index} value={value} index={index}>
              {Component}
            </CustomTabPanel>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}

export default DataGridTabs;
