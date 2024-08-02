"use client";
import { LogoTransparent } from "@/src/utils/images/images";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import React, { useEffect, useState } from "react";
import BookingReports from "./GridLists/BookingReports";
import RevenueReports from "./GridLists/RevenueReports";
import Image from "next/image";
import { GetAgencyAllInfo } from "@/src/redux/service/AdminApi";
import { useCalendarState } from "@mui/x-date-pickers/internals";
// import { DemoItem } from "@mui/x-date-pickers/internals/demo";

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

function   AgencyDetails({ title, agencyData }: { title: string }) {
  const [value, setValue] = useState(0);
  const [agencyInfo, setagencyInfo] = useState(null);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const fetch = async () => {
    const info =await GetAgencyAllInfo(agencyData._id);
    setagencyInfo(info.agency);
  };

  useEffect(() => {
    fetch();
  }, []);

  const TabsData = [
    { title: "Revenue", Component: <RevenueReports data={agencyInfo} /> },
    { title: "Tours", Component: <BookingReports user={agencyData} /> },
  ];

  return (
    <div className="border rounded-lg mt-4">
      <Grid container className="px-5">
        <Grid item xs={12}>
          <Grid container className="mt-4">
            <Grid
              item
              xs={12}
              md={2}
              className="flex items-center justify-center"
            >
              <Image
                src={LogoTransparent}
                width={100}
                height={100}
                className="object-contain"
                alt=""
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <table cellPadding={4}>
                <tr className="text-sm">
                  <td className="font-semibold">Company Name: </td>
                  <td>{agencyData?.company_name}</td>
                </tr>
                <tr className="text-sm">
                  <td className="font-semibold">Email Address: </td>
                  <td>{agencyData?.email}</td>
                </tr>
                <tr className="text-sm">
                  <td className="font-semibold">last Name: </td>
                  <td>{agencyData.last_name}</td>
                </tr>
                <tr className="text-sm">
                  <td className="font-semibold">Facial Number:</td>
                  <td>{agencyData.facial_Number}</td>
                </tr>
              </table>
            </Grid>
            <Grid item xs={12} md={5}>
              <table cellPadding={4}>
                <tr className="text-sm">
                  <td className="font-semibold">office Number: </td>
                  <td>{agencyData.office_no}</td>
                </tr>
                <tr className="text-sm">
                  <td className="font-semibold">Country: </td>
                  <td>{agencyData.country}</td>
                </tr>
                {agencyData.occupation && (
                  <tr className="text-sm">
                    <td className="font-semibold">Occupation: </td>
                    <td>{agencyData.occupation}</td>
                  </tr>
                )}
                <tr className="text-sm">
                  <td className="font-semibold">emergency number: </td>
                  <td> {agencyData.cell_phone}</td>
                </tr>
              </table>
            </Grid>
          </Grid>
        </Grid>

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

export default AgencyDetails;
