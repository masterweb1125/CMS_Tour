"use client";
import { SignUp_validate } from "@/src/schema/Signup";
import { LogoTransparent, RegisterImage } from "@/src/utils/images/images";
import { Grid } from "@mui/material";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastNotification } from "@/src/utils/ShowNotification";
import { GenerateOTP } from "@/src/utils/GenerateOTP";
import { useState } from "react";
import { API_DOMAIN } from "@/src/redux/service/APIs";
import { LuLoader2 } from "react-icons/lu";
import OTPModal from "@/src/components/client/otp/OTPModel";
import toast from "react-hot-toast";


const Register = () => {
  const [loading, setloading] = useState<boolean>(false);
  const [customGeneratedOTP, setcustomGeneratedOTP] = useState();
  const [userData, setuserData] = useState();
  const [OTPDialoug, setOTPDialoug] = useState(false);



  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  }: any = useForm<any>({
    resolver: yupResolver(SignUp_validate),
  });

  // Submit data
  const onSubmit = async (data: any) => {
    setloading(false);
    console.log("formdata : ", data);
    setuserData(data);
    const generateOTP: any = GenerateOTP();
    console.log("random OTP generated is: ", generateOTP);
    setcustomGeneratedOTP(generateOTP);
      setOTPDialoug(true);
    
    
    try {
      await API_DOMAIN.post(`/api/v1/auth/verifyemail`, {
        email: data.email,
        OTP: generateOTP,
      });
      setloading(false);
      setOTPDialoug(true);
    } catch (error) {
      toast.error("Email verification failed, try again!", {
        style: { width: "auto", height: "auto" },
        duration: 3000,
      });
      console.log("something went wrong, while verifying email: ", error);
      setloading(false);
    }
  };

  return (
    <Grid container spacing={2} className="md:pl-2">
      <Grid item xs={12} md={7}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center h-full justify-center"
        >
          <Grid container>
            <Grid item xs={12} md={12}>
              <div className="flex flex-col items-start justify-start">
                <Image
                  src={LogoTransparent}
                  className="object w-32"
                  alt="Registration Image"
                />
                <h1 className="text-2xl font-semibold pl-8 pt-2">
                  Agency Registration
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
                  {...register("company_name")}
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
                  {...register("firstName")}
                  placeholder="Name"
                />
                <div className="text-sm text-red-500">
                  {errors.firstName?.message}
                </div>
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
                  {...register("lastName")}
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
                  {...register("email")}
                  placeholder="Email"
                />
                <div className="text-sm text-red-500">
                  {errors.email?.message}
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className="form-group">
                <label className="mb-2 text-sm font-medium font-mont text-[#344054]">
                  Facial Number, RNC, EIN,VATNUMBER
                </label>
                <br />
                <input
                  className="w-full border-solid border py-2 border-opacity-20 pl-2 rounded-lg border-black-variant bg-[#FBFBFB] outline-none"
                  type="text"
                  {...register("Facial_no")}
                  placeholder="Facial Number, RNC, EIN,VATNUMBER"
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
                  {...register("password")}
                  placeholder="Password"
                />
                <div className="text-sm text-red-500">
                  {errors.password?.message}
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className="form-group">
                <label className="mb-2 text-sm font-medium font-mont text-[#344054]">
                  Country
                </label>
                <br />

                <select
                  className="w-full border-solid border py-2 border-opacity-20 pl-2 rounded-lg border-black-variant bg-[#FBFBFB] outline-none"
                  {...register("country")}
                >
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
                <select
                  className="w-full border-solid border py-2 border-opacity-20 pl-2 rounded-lg border-black-variant bg-[#FBFBFB] outline-none"
                  {...register("office_no")}
                >
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
                <select
                  className="w-full border-solid border py-2 border-opacity-20 pl-2 rounded-lg border-black-variant bg-[#FBFBFB] outline-none"
                  {...register("cell_phone")}
                >
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
                  {...register("occupation")}
                  placeholder="Occupation"
                />
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className="form-group">
                <button
                  type="submit"
                  className="bg-[#FFA500] text-white font-mont text-base px-4 py-2 rounded-md mt-4"
                >
                  {loading ? (
                    <span className="animate-spin flex justify-center items-center text-[1.6rem] text-white">
                      <LuLoader2 />
                    </span>
                  ) : (
                    <span className="text-white text-[1rem] font-bold tracking-[0.16rem]">
                      Create Account
                    </span>
                  )}
                </button>
              </div>
            </Grid>
          </Grid>
        </form>
      </Grid>
      <Grid item xs={12} md={5}>
        <div className="flex justify-end items-end">
          <Image
            src={RegisterImage}
            className="object-contain"
            alt="Registration Image"
          />
        </div>
      </Grid>

      {OTPDialoug && (
        <OTPModal
          setOTPDialoug={setOTPDialoug}
          generatedOTP={customGeneratedOTP}
          userData={userData}
        />
      )}
    </Grid>
  );
};

export default Register;
