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

export default function TourEditHeader() {
  return (
    <div>
      <div className="flex items-end justify-end">
        <button className="bg-[#FFA500] text-white font-mont text-sm font-medium px-4 py-2 rounded-md mb-3 flex gap-1 items-center">
          <div>Edit Tour</div>
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.79232 2.08301H4.97332C6.243 2.08301 6.87785 2.08301 7.11883 2.31105C7.32714 2.50816 7.41946 2.79854 7.36322 3.07976C7.29816 3.4051 6.77986 3.7717 5.74327 4.5049L4.0497 5.70279C3.01311 6.43598 2.49481 6.80259 2.42975 7.12792C2.37351 7.40914 2.46582 7.69952 2.67414 7.89664C2.91512 8.12467 3.54997 8.12467 4.81965 8.12467H5.20898M3.33398 2.08301C3.33398 2.77336 2.77434 3.33301 2.08398 3.33301C1.39363 3.33301 0.833984 2.77336 0.833984 2.08301C0.833984 1.39265 1.39363 0.833008 2.08398 0.833008C2.77434 0.833008 3.33398 1.39265 3.33398 2.08301ZM9.16732 7.91634C9.16732 8.6067 8.60767 9.16634 7.91732 9.16634C7.22696 9.16634 6.66732 8.6067 6.66732 7.91634C6.66732 7.22599 7.22696 6.66634 7.91732 6.66634C8.60767 6.66634 9.16732 7.22599 9.16732 7.91634Z"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
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
            <div className="hidden md:flex justify-end gap-2 items-center cursor-pointer">
              <div className="font-semibold text-base">Edit</div>
              <svg
                width="17"
                height="17"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.68014 19.7236C5.98548 19.6403 6.13815 19.5987 6.28052 19.5348C6.40692 19.478 6.52709 19.4083 6.63908 19.3267C6.76521 19.2348 6.87711 19.1229 7.1009 18.8991L17.4343 8.56569C17.6323 8.36768 17.7313 8.26867 17.7684 8.15451C17.8011 8.05409 17.8011 7.94591 17.7684 7.84549C17.7313 7.73133 17.6323 7.63232 17.4343 7.43431L14.5657 4.56569C14.3677 4.36768 14.2687 4.26867 14.1545 4.23158C14.0541 4.19895 13.9459 4.19895 13.8455 4.23158C13.7313 4.26867 13.6323 4.36768 13.4343 4.56569L3.1009 14.8991C2.87711 15.1229 2.76521 15.2348 2.67332 15.3609C2.59172 15.4729 2.52199 15.5931 2.46523 15.7195C2.40131 15.8619 2.35968 16.0145 2.2764 16.3199L1 21L5.68014 19.7236Z"
                  fill="white"
                />
                <path
                  d="M17 1L21 5M1 21L2.2764 16.3199C2.35968 16.0145 2.40131 15.8619 2.46523 15.7195C2.52199 15.5931 2.59172 15.4729 2.67332 15.3609C2.76521 15.2348 2.87711 15.1229 3.1009 14.8991L13.4343 4.56569C13.6323 4.36768 13.7313 4.26867 13.8455 4.23158C13.9459 4.19895 14.0541 4.19895 14.1545 4.23158C14.2687 4.26867 14.3677 4.36768 14.5657 4.56569L17.4343 7.43431C17.6323 7.63232 17.7313 7.73133 17.7684 7.84549C17.8011 7.94591 17.8011 8.05409 17.7684 8.15451C17.7313 8.26867 17.6323 8.36768 17.4343 8.56569L7.1009 18.8991C6.87711 19.1229 6.76521 19.2348 6.63908 19.3267C6.52709 19.4083 6.40692 19.478 6.28052 19.5348C6.13815 19.5987 5.98548 19.6403 5.68014 19.7236L1 21Z"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

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
