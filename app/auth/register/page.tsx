"use client";
import { useEffect, useState } from "react";

import {
  appleProvider,
  auth,
  facebookProvider,
  googleProvider,
} from "../../../firebase";
import { signInWithPopup, signInWithRedirect } from "firebase/auth";
import Image from "next/image";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import OTPModal from "@/src/components/client/otp/OTPModel";
import { API_DOMAIN } from "@/src/redux/service/APIs";
import { GenerateOTP } from "@/src/utils/GenerateOTP";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { setUserData } from "@/src/redux/features/User.Slice";
import { useDispatch, useSelector } from "react-redux";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { SignUp_validate } from "@/src/schema/Signup";

const AuthComponent = () => {
  const navigate = useRouter();
  const dispatch = useDispatch();
  const [loading, setloading] = useState<boolean>(false);
  // const [email, setEmail] = useState("");
  const [emailRequiredError, setemailRequiredError] = useState(false);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [customGeneratedOTP, setcustomGeneratedOTP] = useState();
  const [userData, setuserData] = useState({name:"",email:"",password:'',roleId:'',email_verified:false});
  const [OTPDialoug, setOTPDialoug] = useState(false);
  const userLoggedin:any = useSelector((root: any) => root?.User?.UserInfo);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setuserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

 
const handleGoogleSignIn = () => {    
  if (userLoggedin.email){
    console.log(userLoggedin)
          return  toast.error("You ar already logged in", {
            style: { width: "auto", height: "auto" },
            duration: 3000,
          });
        }
  signInWithPopup(auth, googleProvider)
      .then((result) => {
    
          const user = result.user;
      
          const tokenResponse = result._tokenResponse;

          // Extracting user information
          const firstName = tokenResponse.firstName;
          const lastName = tokenResponse.lastName;
          const email = user.email;
          const emailVerified = user.emailVerified;
          const uid = user.uid;
          const providerId = tokenResponse.providerId;
            

          const res = API_DOMAIN.post('/api/v1/auth/social',{name:firstName,last_name:lastName,email:email,email_verified:emailVerified,client_id:uid,provider_id:providerId,roleId:userData.roleId}).then((item)=>{
            dispatch(setUserData(item.data.data));
            console.log(item.data.data)

            toast.success("registration done successfully", {
              style: { width: "auto", height: "auto" },
              duration: 3000,
            });
            navigate.push("/user/profile/update-profile");

          }).catch(error => {
            console.log('social Error',error)
          })
      })
      .catch((error) => {
          console.error('Error during Google sign-in:', error);
      });
};

const handleFacebookSignIn = () => {
  signInWithPopup(auth, facebookProvider)
    .then((result) => {
    
        console.log(result)

      
}).catch(error=>{
  console.log(error)
})}

  const handleAppleSignIn = () => {
    signInWithPopup(auth, appleProvider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const toggleForm = () => {
    if (typeof userData.email === "string") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailRegex.test(userData.email)) {
        setemailRequiredError(false);
        setShowEmailForm((prevState) => !prevState);
      } else {
        setemailRequiredError(true);
      }
    }
  };

  const handleEmailSignUp = () => {
    toggleForm();
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const onSubmit = async (e) => {
    if (userLoggedin.email){
      return  toast.error("You ar already logged in", {
        style: { width: "auto", height: "auto" },
        duration: 3000,
      });
    }
    setloading(false);
    // setuserData(data);
    const generateOTP: any = GenerateOTP();
    console.log("random OTP generated is: ", generateOTP);
    setcustomGeneratedOTP(generateOTP);
      setOTPDialoug(true);
    
    
    try {
     const res= await API_DOMAIN.post(`/api/v1/auth/verifyemail`, {
        email: userData.email,
        OTP: generateOTP,
      });
      if (res.status) {
        setuserData({...userData,email_verified:true})
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
  const handleRole = async ()=>{
    try {
      const res =await API_DOMAIN.post('/api/v1/auth/role',{name:'user'})
      setuserData({...userData,roleId:res.data.roleId})
    } catch (error) {
      console.log('role',error)
    }
  }
  useEffect(() => {
  handleRole();
  }, [])
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-[10px] border-2 border-[#E5E7EB] shadow-md">
        <div className="flex justify-center">
          <Image
            width={60}
            height={60}
            src="/images/logo_transparent1.png"
            alt="Logo"
            className="mb-4"
          />
        </div>
        <h2 className="text-center text-2xl font-bold">Create an account</h2>
        <p className="text-center text-gray-600">
          Start your 30-day free trial.
        </p>
        {showEmailForm ? (
          <>
            <div >
              <label htmlFor="name">Name:</label>
              <input
                id="name"
                type="text"
                name="name"
                value={userData.name}
                onChange={e=>handleInputChange(e)}
                placeholder="Enter your Name"
                className="w-full mb-4 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                value={userData.email}
                name="email"
                onChange={e=>handleInputChange(e)}
                placeholder="Enter your email"
                className="w-full mb-4 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <label htmlFor="password">Password:</label>
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
                  className="absolute inset-y-0 right-0 flex items-center px-3 text-sm text-gray-600"
                >
                  {showPassword ?<IoEyeOutline />: <IoEyeOffOutline /> }
                </button>
              </div>
              <button
                onClick={onSubmit}
                className="w-full p-3 mt-4 text-white bg-yellow-500 rounded-md hover:bg-yellow-600"
              >
                Signup
              </button>
            </div>
          </>
        ) : (
          <>
            <div>
              <p className="text-[12px] text-red-500">
                {emailRequiredError ? "Please enter a valid email" : ""}
              </p>
              <input
                type="email"
                value={userData.email}
                name={'email'}
                onChange={e=>handleInputChange(e)}
                placeholder="Enter your email"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                onClick={handleEmailSignUp}
                className="w-full p-3 mt-4 text-white bg-yellow-500 rounded-md hover:bg-yellow-600"
              >
                Get started
              </button>
            </div>
            <div className="flex items-center justify-between">
              <hr className="w-full border-gray-300" />
              <span className="p-2 text-gray-500">OR</span>
              <hr className="w-full border-gray-300" />
            </div>
            <div className="space-y-2">
              <button
                onClick={handleGoogleSignIn}
                className="w-full p-3 text-gray-700 bg-white border rounded-md hover:bg-gray-50"
              >
                <img
                  src="/images/google-icon.png"
                  alt="Google"
                  className="inline-block w-5 h-5 mr-2"
                />
                Sign up with Google
              </button>
              <button
                onClick={handleFacebookSignIn}
                className="w-full p-3 text-gray-700 bg-white border rounded-md hover:bg-gray-50"
              >
                <img
                  src="/images/facebook-icon.png"
                  alt="Facebook"
                  className="inline-block w-5 h-5 mr-2"
                />
                Sign up with Facebook
              </button>
              <button
                onClick={handleAppleSignIn}
                className="w-full p-3 text-gray-700 bg-white border rounded-md hover:bg-gray-50"
              >
                <img
                  src="/images/apple-icon.png"
                  alt="Apple"
                  className="inline-block w-5 h-5 mr-2"
                />
                Sign up with Apple
              </button>
            </div>
          </>
        )}
        <p className="text-center text-gray-600">
          Already have an account?{" "}
          <a href="#" className="text-blue-500">
            Log in
          </a>
        </p>
      </div>
      {OTPDialoug && (
        <OTPModal
          setOTPDialoug={setOTPDialoug}
          generatedOTP={customGeneratedOTP}
          userData={userData}
        />
      )}
    </div>
  );
};

export default AuthComponent;
