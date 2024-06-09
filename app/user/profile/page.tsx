"use client";
import BreadCrame from "@/src/components/client/blog-main/profile_blog_breadcrame";
import { AgentAvatarOne } from "@/src/utils/images/images";
import { Box, Container, Grid, Tab, Tabs } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import UpcomingBooking from "./allgrids/upcoming";

let list = ["Home", "Add To Cart", "My Account"];

const UserProfile = () => {
  return (
    <div className="">
      <div className="flex gap-3 my-5 pl-28">
        <BreadCrame list={list} />
      </div>

      <div className="my-7">
        <Container>
          <div className="flex gap-10">
            <div>
              <Image src={AgentAvatarOne} alt="" className="w-20" />
            </div>
            <div>
              <h1 className="font-semibold text-3xl">
                Hello Noraiz Shahid Raja
              </h1>
              <p className="font-medium">noriazraja2121@gmail.com</p>
              <Link href="" className="text-[#FFA500] font-normal">
                Edit Profile
              </Link>
            </div>
          </div>

          <DataGridTabs />
        </Container>
      </div>
    </div>
  );
};

export default UserProfile;

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

function DataGridTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const TabsData = [
    { title: "Upcoming Booking", Component: <UpcomingBooking /> },
    { title: "Past booking", Component: <UpcomingBooking /> },
    { title: "Manage Profile", Component: <UpcomingBooking /> },
    { title: "Contact Support", Component: <UpcomingBooking /> },
  ];

  return (
    <div className="mt-7">
      <Grid container>
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
