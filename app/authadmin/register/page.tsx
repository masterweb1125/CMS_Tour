"use client"
import React, { useState, useEffect } from 'react';
import OTPModal from "@/src/components/client/otp/OTPModel";
import { API_DOMAIN } from "@/src/redux/service/APIs";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

import { GenerateOTP } from "@/src/utils/GenerateOTP";
import { AdminRegister, LogoTransparent } from "@/src/utils/images/images";
import { Grid } from "@mui/material";
import Image from "next/image";

const RedStar = () => <span className="text-red-400">*</span>;

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [customGeneratedOTP, setCustomGeneratedOTP] = useState();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    last_name:"",
    Register_As:"",
    password: '',
    roleId: '',
    cell_phone:'',
    email_verified: false
  });
  const [OTPDialoug, setOTPDialoug] = useState(false);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const generateOTP = GenerateOTP();
    console.log("random OTP generated is: ", generateOTP);
    setCustomGeneratedOTP(generateOTP);
    setOTPDialoug(true);

    try {
      const res = await API_DOMAIN.post(`/api/v1/auth/verifyemail`, {
        email: userData.email,
        OTP: generateOTP,
      });
      
      if (res.status === 200) {
        setUserData({ ...userData, email_verified: true });
      }

      setLoading(false);
    } catch (error) {
      console.error("Email verification failed, try again!", error);
      setLoading(false);
    }
  };

  const handleRole = async () => {
    try {
      const res = await API_DOMAIN.post('/api/v1/auth/role', { name: 'admin' });
      setUserData({ ...userData, roleId: res.data.roleId });
    } catch (error) {
      console.log('role error', error);
    }
  };

  useEffect(() => {
    handleRole();
  }, []);

  return (
    <Grid container spacing={2} className="md:pl-2">
      <Grid item xs={12} md={7}>
        <div className="flex flex-col items-center h-full justify-center" >
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
                  value={userData.name}
                  name="name"
                  onChange={(e)=>handleInputChange(e)}
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
                  value={userData.last_name}
                  name='last_name'
                  onChange={(e)=>handleInputChange(e)}
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
                  type="email"
                  placeholder="Enter your email"
                  value={userData.email}
                  name="email"
                  onChange={(e)=>handleInputChange(e)}
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
                  type="tel"
                  pattern="[0-9]{10}"
                  maxLength={13}
                  minLength={10}
                  value={userData.cell_phone}
                  name={"cell_phone"}
                  onChange={(e)=>handleInputChange(e)}
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
                <div className="relative w-full mb-4">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  onChange={e=>handleInputChange(e)}
                  value={userData.password}
                  placeholder="Create your Password"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  onChange={e=>handleInputChange(e)}
                  className="absolute inset-y-0 right-0 flex items-center px-3 text-sm text-gray-600"
                >
                  {showPassword ?<IoEyeOutline />: <IoEyeOffOutline /> }
                </button>
              </div>
              </div>
           
            </Grid>
            {/* Other form fields */}
            <Grid item xs={12} md={6}>
              <div className="form-group">
                <label className="mb-2 text-sm font-medium font-mont text-[#344054]">
                 Re-enter Password <RedStar />
                </label>
                <br />
                <input
                  className="w-full border-solid border py-2 border-opacity-20 pl-2 rounded-lg border-black-variant bg-[#FBFBFB] outline-none"
                  type="password"
                  placeholder="Re-type Password"
                />
              </div>
            </Grid>
            {/* Other form fields */}
            <Grid item xs={12} md={6}>
              <div className="form-group">
                <label className="mb-2 text-sm font-medium font-mont text-[#344054]">
                 Register as a
                </label>
                <br />
                <select className="w-full border-solid border py-2 border-opacity-20 pl-2 rounded-lg border-black-variant bg-[#FBFBFB] outline-none" onChange={(e)=>handleInputChange(e)}>
                  <option>Travel Agency</option>
                </select>
              </div>
            </Grid>
            {/* Other form fields */}
            <Grid item xs={12} md={12}>
              <div className="form-group">
                <button
                  className="bg-[#FFA500] text-white font-mont font-medium text-base px-4 py-2 rounded-md mt-4"
                  disabled={loading}
                  onClick={onSubmit}
                >
                  {loading ? 'Loading...' : 'Register'}
                </button>
              </div>
            </Grid>
          </Grid>
        </div>
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
