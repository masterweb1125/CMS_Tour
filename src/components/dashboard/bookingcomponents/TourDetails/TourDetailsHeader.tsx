import {
  ClockStopWatch,
  DashboardTourDetails,
  DollarShield,
  LocationIcon,
  Plane,
  RatingStar,
} from "@/src/utils/images/images";
import { Grid } from "@mui/material";
import Image from "next/image";

export default function TourDetailHeader() {
  return (
    <div>
      <div
        className="bg-cover bg-no-repeat w-full h-56 pt-24 px-4 md:px-14 md:py-4 flex items-center text-white rounded-lg"
        style={{ backgroundImage: `url(${DashboardTourDetails.src})` }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <div className="flex flex-col justify-end gap-4 w-full sm-block">
              <h1 className="text-3xl font-bold leading-7">Maldives Tour</h1>
              <div className="flex justify-start flex-col gap-2">
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
            <div className="hidden md:flex flex-row h-full md:items-end md:justify-end w-full sm-block md:gap-8 lg:gap-12">
              <div className="flex flex-row justify-center items-center gap-2">
                <Image src={DollarShield} alt="" />
                <div className="flex flex-col">
                  <span className="text-xs md:text-xs">From</span>
                  <h1 className=" font-bold leading-7">$200</h1>
                </div>
              </div>
              <div className="flex flex-row justify-center items-center gap-2">
                <Image src={ClockStopWatch} alt="" />
                <div className="flex flex-col">
                  <span className="text-xs md:text-xs">Duration</span>
                  <h1 className=" font-bold leading-7">05Days</h1>
                </div>
              </div>
              <div className="flex flex-row justify-center items-center gap-2">
                <Image src={Plane} alt="" />
                <div className="flex flex-col">
                  <span className="text-xs md:text-xs">Tour Type</span>
                  <h1 className=" font-bold leading-7">Advanture</h1>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>

      <Grid container mt={3}>
        <Grid item xs={12} md={6}>
          <div className="flex md:hidden flex-row items-center justify-between">
            <div className="flex flex-row justify-center items-center gap-2">
              <Image src={DollarShield} width={23} alt="" />
              <div className="flex flex-col">
                <span className="text-xs">From</span>
                <h1 className="text-sm font-semibold">$200</h1>
              </div>
            </div>
            <div className="flex flex-row justify-center items-center gap-2">
              <Image src={ClockStopWatch} width={23} alt="" />
              <div className="flex flex-col">
                <span className="text-xs">Duration</span>
                <h1 className="text-sm font-semibold">05 Days</h1>
              </div>
            </div>
            <div className="flex flex-row justify-center items-center gap-2">
              <Image src={Plane} width={23} alt="" />
              <div className="flex flex-col">
                <span className="text-xs">Tour Type</span>
                <h1 className="text-sm font-semibold">Advanture</h1>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
