"use client";
import { AdminRegister, LogoTransparent } from "@/src/utils/images/images";
import { Grid } from "@mui/material";
import Image from "next/image";

const RedStar = () => <span className="text-red-400">*</span>;

const Register = () => {
  return (
    <Grid container spacing={2} className="md:pl-2">
      <Grid item xs={12} md={7}>
        <form className="flex flex-col items-center h-full justify-center">
          <Grid container>
            <Grid item xs={12} md={12}>
              <div className="flex flex-col items-start justify-start">
                <Image
                  src={LogoTransparent}
                  className="object w-20 ml-3"
                  alt="Registration Image"
                />
                <h1 className="text-2xl font-semibold pl-8 pt-8">
                  Registration Form
                </h1>
              </div>
            </Grid>
          </Grid>
          <Grid container className="px-8 py-4" spacing={3}>
            <Grid item xs={12} md={6}>
              <div className="form-group">
                <label className="mb-2 text-sm font-medium font-mont text-[#344054]">
                  First Name <RedStar />
                </label>
                <br />
                <input
                  className="w-full border-solid border py-2 border-opacity-20 pl-2 rounded-lg border-black-variant bg-[#FBFBFB] outline-none"
                  type="text"
                  placeholder="Enter your first name"
                />
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className="form-group">
                <label className="mb-2 text-sm font-medium font-mont text-[#344054]">
                  Last Name
                </label>
                <br />
                <input
                  className="w-full border-solid border py-2 border-opacity-20 pl-2 rounded-lg border-black-variant bg-[#FBFBFB] outline-none"
                  type="text"
                  placeholder="Enter your last name"
                />
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className="form-group">
                <label className="mb-2 text-sm font-medium font-mont text-[#344054]">
                  Email <RedStar />
                </label>
                <br />
                <input
                  className="w-full border-solid border py-2 border-opacity-20 pl-2 rounded-lg border-black-variant bg-[#FBFBFB] outline-none"
                  type="text"
                  placeholder="Enter your email"
                />
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className="form-group">
                <label className="mb-2 text-sm font-medium font-mont text-[#344054]">
                  Mobile Number
                </label>
                <br />
                <input
                  className="w-full border-solid border py-2 border-opacity-20 pl-2 rounded-lg border-black-variant bg-[#FBFBFB] outline-none"
                  type="text"
                  placeholder="Enter mobile number"
                />
              </div>
            </Grid>
          
            <Grid item xs={12} md={6}>
              <div className="form-group">
                <label className="mb-2 text-sm font-medium font-mont text-[#344054]">
                  Password <RedStar />
                </label>
                <br />
                <input
                  className="w-full border-solid border py-2 border-opacity-20 pl-2 rounded-lg border-black-variant bg-[#FBFBFB] outline-none"
                  type="text"
                  placeholder="Create a Password"
                />
              </div>
            </Grid>

            <Grid item xs={12} md={6}>
              <div className="form-group">
                <label className="mb-2 text-sm font-medium font-mont text-[#344054]">
                 Re-enter Password <RedStar />
                </label>
                <br />
                <input
                  className="w-full border-solid border py-2 border-opacity-20 pl-2 rounded-lg border-black-variant bg-[#FBFBFB] outline-none"
                  type="text"
                  placeholder="Re type Password"
                />
              </div>
            </Grid>
           
            <Grid item xs={12} md={6}>
              <div className="form-group">
                <label className="mb-2 text-sm font-medium font-mont text-[#344054]">
                 Register as a
                </label>
                <br />
                <select className="w-full border-solid border py-2 border-opacity-20 pl-2 rounded-lg border-black-variant bg-[#FBFBFB] outline-none">
                  <option>Travel Agency</option>
                </select>
              </div>
            </Grid>
            
            <Grid item xs={12} md={12}>
              <div className="form-group">
                <button className="bg-[#FFA500] text-white font-mont font-medium text-base px-4 py-2 rounded-md mt-4">
                  Register
                </button>
              </div>
            </Grid>
          </Grid>
        </form>
      </Grid>
      <Grid item xs={12} md={5}>
        <div className="flex justify-end items-end">
          <Image
            src={AdminRegister}
            className="object-contain"
            alt="Registration Image"
          />
        </div>
      </Grid>
    </Grid>
  );
};

export default Register;
