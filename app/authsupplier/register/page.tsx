"use client"
import OTPModal from "@/src/components/client/otp/OTPModel";
import { API_DOMAIN } from "@/src/redux/service/APIs";
import { GenerateOTP } from "@/src/utils/GenerateOTP";
import { LogoTransparent, SupplierRegister } from "@/src/utils/images/images";
import { Grid } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { LuLoader2 } from "react-icons/lu";

const Register = () => {
  const [loading, setloading] = useState<boolean>(false);
  const [emailRequiredError, setemailRequiredError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [customGeneratedOTP, setcustomGeneratedOTP] = useState();
  const [userData, setuserData] = useState({
    name: "",
    email: "",
    last_name: "",
    office_no: "",
    company_name: "",
    facial_Number: "",
    country:"",
    cell_phone:"",
    occupation: "",
    password: "",
    roleId: "",
    email_verified: false,
  });
  const [OTPDialoug, setOTPDialoug] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setuserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  // Submit data
  const onSubmit = async (e) => {
    
    setloading(false);
    // setuserData(data);
    const generateOTP: any = GenerateOTP();
    console.log("random OTP generated is: ", generateOTP);
    setcustomGeneratedOTP(generateOTP);
    setOTPDialoug(true);

    try {
      const res = await API_DOMAIN.post(`/api/v1/auth/verifyemail`, {
        email: userData.email,
        OTP: generateOTP,
      });
      if (res.status) {
        setuserData({ ...userData, email_verified: true });
      }
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
  const handleRole = async () => {
    try {
      const res = await API_DOMAIN.post("/api/v1/auth/role", { name: "supplier" });
      setuserData({ ...userData, roleId: res.data.roleId });
    } catch (error) {
      console.log("role", error);
    }
  };
  useEffect(() => {
    handleRole();
  }, []);
  return (
    <Grid container spacing={2} className="md:pl-2">
    <Grid item xs={12} md={7}>
      <div
        // onSubmit={handleSubmit(onSubmit)}
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
                name="company_name"
                onChange={e=>handleInputChange(e)}
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
                name="name"
                onChange={e=>handleInputChange(e)}
                placeholder="Name"
              />
              <div className="text-sm text-red-500">
                {/* {errors.firstName?.message} */}
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
                name="last_name"
                onChange={e=>handleInputChange(e)}
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
                name="email"
                onChange={e=>handleInputChange(e)}
                placeholder="Email"
              />
              <div className="text-sm text-red-500">
                {/* {errors.email?.message} */}
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
                name="facial_Number"
                onChange={e=>handleInputChange(e)}
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
              <div className="relative w-full mb-4">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                onChange={e=>handleInputChange(e)}
                value={userData.password}
                placeholder="Create your Password"
                className="w-full border-solid border py-2 border-opacity-20 pl-2 rounded-lg border-black-variant bg-[#FBFBFB] outline-none"

              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 flex items-center px-3 text-sm text-gray-600"
              >
                {showPassword ?<IoEyeOutline />: <IoEyeOffOutline /> }
              </button>
            </div>
              <div className="text-sm text-red-500">
                {/* {errors.password?.message} */}
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="form-group">
              <label className="mb-2 text-sm font-medium font-mont text-[#344054]">
                Country
              </label>
              <br />

              <select onChange={e=>handleInputChange(e)} name="country" value={userData.country} className="w-full border-solid border py-2 border-opacity-20 pl-2 rounded-lg border-black-variant bg-[#FBFBFB] outline-none">
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
              <select name="office_Number" onChange={e=>handleInputChange(e)} value={userData.facial_Number} className="w-full border-solid border py-2 border-opacity-20 pl-2 rounded-lg border-black-variant bg-[#FBFBFB] outline-none">
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
              <select name="cell_phone" onChange={e=>handleInputChange(e)} value={userData.cell_phone} className="w-full border-solid border py-2 border-opacity-20 pl-2 rounded-lg border-black-variant bg-[#FBFBFB] outline-none">
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
              name="occupation"
              onChange={e=>handleInputChange(e)}
              value={userData.occupation}
                className="w-full border-solid border py-2 border-opacity-20 pl-2 rounded-lg border-black-variant bg-[#FBFBFB] outline-none"
                type="text"
                placeholder="Occupation"
              />
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="form-group">
              <button
                onClick={onSubmit}
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
      </div>
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
