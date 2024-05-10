import { ClockStopWatch, DollarShield, Plane } from "@/src/utils/images/images";
import { Grid } from "@mui/material";
import Image from "next/image";

const Client_TourDetailHeader = ({ handleOpen }: { handleOpen: any }) => {
  return (
    <div className="w-full py-8 px-4 md:px-20 lg:px-28 gap-5 md:gap-0 mt-6">
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <div className="flex flex-col justify-start gap-4 w-full sm-block">
            <h1 className="text-3xl font-bold text-black-variant leading-7">
              Maldives Tour
            </h1>
          </div>
          <div className="flex gap-8 mt-6">
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
        <Grid item xs={12} md={6}>
          <div className="flex flex-row md:items-end md:justify-end w-full gap-6">
            <button className="text-black font-medium text-md px-6 py-2 border">
              Term & Condition
            </button>
            <button
              className="bg-[#FFA500] text-white font-medium text-md px-6 py-2"
              onClick={handleOpen}
            >
              Download Ticket
            </button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Client_TourDetailHeader;
