import { LogoTransparent, SupplierRegister } from "@/src/utils/images/images";
import { Grid } from "@mui/material";
import Image from "next/image";

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
                  Supplier Registration
                </h1>
              </div>
            </Grid>
          </Grid>
          <Grid container className="px-8 py-4" spacing={3}>
            <Grid item xs={12} md={6}>
              <div className="form-group">
                <label className="mb-2 text-sm font-medium font-mont text-[#344054]">
                  Company Name
                </label>
                <br />
                <input
                  className="w-full border-solid border py-2 border-opacity-20 pl-2 rounded-lg border-black-variant bg-[#FBFBFB] outline-none"
                  type="text"
                  placeholder="Company Name"
                />
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className="form-group">
                <label className="mb-2 text-sm font-medium font-mont text-[#344054]">
                  Name*
                </label>
                <br />
                <input
                  className="w-full border-solid border py-2 border-opacity-20 pl-2 rounded-lg border-black-variant bg-[#FBFBFB] outline-none"
                  type="text"
                  placeholder="Name"
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
                  placeholder="Last Name"
                />
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className="form-group">
                <label className="mb-2 text-sm font-medium font-mont text-[#344054]">
                  Email*
                </label>
                <br />
                <input
                  className="w-full border-solid border py-2 border-opacity-20 pl-2 rounded-lg border-black-variant bg-[#FBFBFB] outline-none"
                  type="text"
                  placeholder="Email"
                />
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className="form-group">
                <label className="mb-2 text-sm font-medium font-mont text-[#344054]">
                  Facial Number
                </label>
                <br />
                <input
                  className="w-full border-solid border py-2 border-opacity-20 pl-2 rounded-lg border-black-variant bg-[#FBFBFB] outline-none"
                  type="text"
                  placeholder="Facial Number"
                />
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className="form-group">
                <label className="mb-2 text-sm font-medium font-mont text-[#344054]">
                  Password*
                </label>
                <br />
                <input
                  className="w-full border-solid border py-2 border-opacity-20 pl-2 rounded-lg border-black-variant bg-[#FBFBFB] outline-none"
                  type="text"
                  placeholder="Password"
                />
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className="form-group">
                <label className="mb-2 text-sm font-medium font-mont text-[#344054]">
                  Country
                </label>
                <br />
                <select className="w-full border-solid border py-2 border-opacity-20 pl-2 rounded-lg border-black-variant bg-[#FBFBFB] outline-none">
                  <option>Select Country</option>
                </select>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className="form-group">
                <label className="mb-2 text-sm font-medium font-mont text-[#344054]">
                  Office Number
                </label>
                <br />
                <select className="w-full border-solid border py-2 border-opacity-20 pl-2 rounded-lg border-black-variant bg-[#FBFBFB] outline-none">
                  <option>Select Office Number</option>
                </select>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className="form-group">
                <label className="mb-2 text-sm font-medium font-mont text-[#344054]">
                  Cell Phone
                </label>
                <br />
                <select className="w-full border-solid border py-2 border-opacity-20 pl-2 rounded-lg border-black-variant bg-[#FBFBFB] outline-none">
                  <option>Select Cell Phone</option>
                </select>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className="form-group">
                <label className="mb-2 text-sm font-medium font-mont text-[#344054]">
                  Occupation
                </label>
                <br />
                <input
                  className="w-full border-solid border py-2 border-opacity-20 pl-2 rounded-lg border-black-variant bg-[#FBFBFB] outline-none"
                  type="text"
                  placeholder="Occupation"
                />
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className="form-group">
                <button className="bg-[#FFA500] text-white font-mont text-base px-4 py-2 rounded-md mt-4">
                  Register Now
                </button>
              </div>
            </Grid>
          </Grid>
        </form>
      </Grid>
      <Grid item xs={12} md={5}>
        <div className="flex justify-end items-end">
          <Image
            src={SupplierRegister}
            className="object-contain"
            alt="Registration Image"
          />
        </div>
      </Grid>
    </Grid>
  );
};

export default Register;
