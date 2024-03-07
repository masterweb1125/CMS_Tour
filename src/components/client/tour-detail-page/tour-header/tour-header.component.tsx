import React from "react";
import Image from "next/image";
import Client_Container from "../../container/container.component";
import {
  ClockStopWatch,
  DollarShield,
  LocationIcon,
  Plane,
  RatingStar,
} from "@/src/utils/images/images";
import { Grid } from "@mui/material";

const Client_TourDetailHeader = () => {
  return (
    <div className="bg-[#FFF9EF] w-full py-8 px-4 md:px-20 lg:px-28 gap-5 md:gap-0">
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <div className="flex flex-col justify-start gap-4 w-full sm-block">
            <h1 className="text-3xl font-bold text-black-variant leading-7">
              Maldives Tour
            </h1>
            <div className="flex flex-row justify-start md:flex-col gap-2">
              <div className="flex flex-row gap-2 items-center">
                <Image src={LocationIcon} alt="" />
                <span className="description font-medium">
                  Main Street Cafe
                </span>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <Image src={RatingStar} alt="" />
                <span className="description font-medium">4.4 Ratings</span>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="flex flex-row h-full md:items-end md:justify-end w-full sm-block md:gap-8 lg:gap-12">
            <div className="flex flex-row justify-center items-center gap-2">
              <Image src={DollarShield} alt="" />
              <div className="flex flex-col">
                <span className="text-xs md:text-xs">From</span>
                <h1 className=" font-bold text-black-variant leading-7">
                  $200
                </h1>
              </div>
            </div>
            <div className="flex flex-row justify-center items-center gap-2">
              <Image src={ClockStopWatch} alt="" />
              <div className="flex flex-col">
                <span className="text-xs md:text-xs">Duration</span>
                <h1 className=" font-bold text-black-variant leading-7">
                  05Days
                </h1>
              </div>
            </div>
            <div className="flex flex-row justify-center items-center gap-2">
              <Image src={Plane} alt="" />
              <div className="flex flex-col">
                <span className="text-xs md:text-xs">Tour Type</span>
                <h1 className=" font-bold text-black-variant leading-7">
                  Advanture
                </h1>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Client_TourDetailHeader;
