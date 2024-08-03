import SearchInput from "@/src/components/dashboard/dashboardComponents/SearchInput";
import { Grid } from "@mui/material";
import React from "react";

const Setting = () => {
  return (
    <section className="w-full h-full  py-4 flex-col flex">
       <Grid container mb={3} spacing={3}>
        <Grid item xs={12} md={4}>
          <div>
            <h1 className="text-2xl font-semibold">Setting</h1>
            <h6 className="text-xs text-[#475467] pt-1 md:pt-0">
              Fund any wallet quickly. you can enter a negatice amount to deduct
              from wallet.
            </h6>
          </div>
        </Grid>
        <Grid item xs={12} md={5} />
        <Grid item xs={12} md={3} className="flex items-center">
          <SearchInput />
        </Grid>
      </Grid>

      <ul className="w-[40%]">
        
        <li className="flex py-4 hover:bg-[#F1F1F1] rounded-[8px] bg-white  border-[#C4C4C4] border-2 items-center 
        relative justify-between px-4 text-lg">
            <div className="w-[8px] rounded-e-lg h-full absolute right-0 bg-[#FFA500]"/>
          Admin{" "}
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 1.58508L8 6.16963L2 10.7542"
              stroke="#161616"
              stroke-opacity="0.8"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </li>
      </ul>
    </section>
  );
};

export default Setting;
