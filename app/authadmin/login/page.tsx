"use client"
import { LoginAPI } from "@/src/redux/service/APIs";
import { LogoTransparent, RegisterImage } from "@/src/utils/images/images";
import { Grid } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useRouter();
   const [loading, setloading] = useState(false);
   const [loginCreds, setLoginCreds] = useState({
     email: "",
     password: "",
   });
 
   const handleLogin = async (e:any) => {
     e.preventDefault();
       
     if (loginCreds.email && loginCreds.password) {
       try {
         const res = await LoginAPI(dispatch, loginCreds);
         console.log("login res: ", res)
         if (res === 200) {
           toast.success("Login Successfully", {
             style: { width: "auto", height: "auto" },
             duration: 3000,
           });
           navigate.push("/user/profile/update-profile");
         } else if (res === 400) {
           toast.error("Incorrect login credentials", {
             style: { width: "auto", height: "auto" },
             duration: 3000,
           });
         } else if (res === 404) {
           toast.error("User is not found", {
             style: { width: "auto", height: "auto" },
             duration: 3000,
           });
         }
       } catch (error) {
         toast.error("Something went wrong", {
           style: { width: "auto", height: "auto" },
           duration: 3000,
         });
 
         console.log("login error: " + error);
       }
     }
   };
   const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginCreds((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

 
  return (
    <Grid container spacing={2} className="md:pl-2">
      <Grid item xs={12} md={4} lg={4}></Grid>
      <Grid
        item
        xs={12}
        md={4}
        lg={4}
        className="h-screen flex flex-col items-center justify-center"
      >
        <form 
        //  onSubmit={handleLogin}
          className=" px-5 py-10 border rounded-2xl">
          <Grid container>
            <Grid item xs={12} md={12}>
              <div className="flex flex-col items-start justify-start">
                <Image
                  src={LogoTransparent}
                  className="object w-20 ml-3 self-center"
                  alt="Registration Image"
                />
                <h1 className="text-2xl font-semibold pl-8 pt-2">Admin Login</h1>
              </div>
            </Grid>
          </Grid>
          <Grid container className="px-8 py-4" spacing={3}>
            <Grid item xs={12} md={12}>
              {/* <div className="form-group">
                <label className="mb-2 text-sm font-medium font-mont text-[#344054]">
                  Select User
                </label>
                <br />
                <select className="w-full border-solid border py-2 border-opacity-20 pl-2 rounded-lg border-black-variant bg-[#FBFBFB] outline-none">
                  <option>Admin</option>
                  <option>Agency</option>
                  <option>User</option>
                </select>
              </div> */}
            </Grid>
            <Grid item xs={12}>
              <div className="form-group">
                <label className="mb-2 text-sm font-medium font-mont text-[#344054]">
                  Email*
                </label>
                <br />
                <input
                onChange={e=>handleInputChange(e)}
                value={loginCreds.email}
                name="email"
                  className="w-full border-solid border py-2 border-opacity-20 pl-2 rounded-lg border-black-variant bg-[#FBFBFB] outline-none"
                  type="text"
                  placeholder="Email"
                />
              </div>
            </Grid>

            <Grid item xs={12}>
              <div className="form-group">
                <label className="mb-2 text-sm font-medium font-mont text-[#344054]">
                  Password*
                </label>
                <br />
                <input
                name="password"
                value={loginCreds.password}
                onChange={e=>handleInputChange(e)}
                  className="w-full border-solid border py-2 border-opacity-20 pl-2 rounded-lg border-black-variant bg-[#FBFBFB] outline-none"
                  type="text"
                  placeholder="Password"
                />
              </div>
            </Grid>

            <Grid item xs={12} md={6}>
              <div className="form-group">
                <button onClick={handleLogin} className="bg-[#FFA500] text-white font-mont text-base px-4 py-2 rounded-md mt-4">
                  Login Now
                </button>
              </div>
            </Grid>
          </Grid>
        </form>
      </Grid>
      <Grid item xs={12} md={4} lg={4}></Grid>
    </Grid>
  );
};

export default Login;
