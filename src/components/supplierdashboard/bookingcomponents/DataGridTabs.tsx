"use client";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import React, { useState } from "react";
import ConfirmBooking from "./BookingInquires/ConfirmBooking";
import RecentInquires from "./BookingInquires/RecentInquires";
import CancelAndRefund from "./BookingInquires/CancelAndRefund";
import SearchInput from "../dashboardComponents/SearchInput";

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
    { title: "Recent Booking", Component: <RecentInquires /> },
    { title: "Confirm Booking", Component: <ConfirmBooking /> },
    { title: "Cancel Refund", Component: <CancelAndRefund /> },
  ];

  return (
    <div className="shadow-4xl rounded-lg">
      <Grid container px={3} pt={3}>
        <Grid item xs={12} md={9}>
          <h1 className="text-lg font-semibold">{title}</h1>
        </Grid>

          <Grid item xs={12} md={3}>
          <div className="flex justify-between gap-3">
            <SearchInput />
            <svg
              width="40"
              height="34"
              viewBox="0 0 40 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="39"
                height="43"
                rx="7.5"
                stroke="#D0D5DD"
              />
              <path
                d="M15 22H25M12.5 17H27.5M17.5 27H22.5"
                stroke="#667085"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </Grid> 

        <Grid item xs={12} md={12} mt={1} mb={4}>
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
