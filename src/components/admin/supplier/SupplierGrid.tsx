"use client";
import { Button, ButtonGroup, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import React, { useState } from "react";
import SearchInput from "../../dashboard/dashboardComponents/SearchInput";
import BookingReports from "./GridLists/BookingReports";
import RevenueReports from "./GridLists/RevenueReports";
import SupplierReports from "./GridLists/SupplierReports";
import CustomerBehavior from "./GridLists/CustomerBehavior";

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
    { title: "Revenue", Component: <RevenueReports /> },
    { title: "Tours", Component: <BookingReports /> },
  ];

  return (
    <div className="">
      <Grid container>
        <Grid
          item
          xs={12}
          md={12}
          mt={1}
          mb={4}
          className="flex justify-between mt-5 flex-wrap gap-2 lg:gap-0"
        >
          <Box>
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
                  className="normal-case font-mont text-black font-semibold"
                  label={title}
                  {...a11yProps(index)}
                />
              ))}
            </Tabs>
          </Box>
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
