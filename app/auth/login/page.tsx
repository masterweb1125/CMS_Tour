"use client";
import { useEffect, useState } from "react";
import {
  appleProvider,
  auth,
  facebookProvider,
  googleProvider,
} from "../../../firebase";
import { signInWithPopup, signInWithEmailAndPassword, signInWithRedirect } from "firebase/auth";
import Image from "next/image";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "@/src/redux/features/User.Slice";
import { API_DOMAIN } from "@/src/redux/service/APIs";

const LoginComponent = () => {
  const navigate = useRouter();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState(false);
  const [userData, setUserDataState] = useState({ email: "", password: "",roleId:''});
  const userLoggedin: any = useSelector((root: any) => root?.User?.UserInfo);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDataState((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleGoogleSignIn = () => {
    if (userLoggedin.email){
      return  toast.error("You are already logged in", {
        style: { width: "auto", height: "auto" },
        duration: 3000,
      });
    }
   
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        const tokenResponse = result._tokenResponse;
        const firstName = tokenResponse.firstName;
        const lastName = tokenResponse.lastName;
        const email = user.email;
        const emailVerified = user.emailVerified;
        const uid = user.uid;
        const providerId = tokenResponse.providerId;

        API_DOMAIN.post("/api/v1/auth/social", {
          name: firstName,
          last_name: lastName,
          email: email,
          email_verified: emailVerified,
          client_id: uid,
          provider_id: providerId,
          roleId: userData.roleId,
        })
          .then((item) => {
            dispatch(setUserData(item.data.data));
            toast.success("Logged in successfully", {
              style: { width: "auto", height: "auto" },
              duration: 3000,
            });
            navigate.push("/user/profile/update-profile");
          })
          .catch((error) => {
            console.log("Social Error", error);
          });
      })
      .catch((error) => {
        console.error("Error during Google sign-in:", error);
      });
  };

  const handleFacebookSignIn = () => {
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleAppleSignIn = () => {
    signInWithPopup(auth, appleProvider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const onSubmit = async () => {
    // e.preventdefault();
    if (userLoggedin.email){
      return  toast.error("You are already logged in", {
        style: { width: "auto", height: "auto" },
        duration: 3000,
      });
    }
    e.preventDefault();
    setLoading(true);
    
      API_DOMAIN.post('/api/v1/auth/signin',{email:userData.email,password:userData.password}).then(item=>{
        if (item.data.status === 201) {
           toast.error(item.data.message)
        }
      }).catch(error=>{
        console.log(error)
      })

   
   
  };
  const handleRole = async ()=>{
    try {
      const res =await API_DOMAIN.post('/api/v1/auth/role',{name:'user'})
      setUserDataState({...userData,roleId:res.data.roleId})
    } catch (error) {
      console.log('role',error)
    }
  }
  useEffect(() => {
  handleRole();
  }, [])

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-md p-8 space-y-2 bg-white rounded-[10px] border-2 border-[#E5E7EB] shadow-md">
        <div className="flex justify-center">
          <Image
            width={60}
            height={60}
            src="/images/logo_transparent1.png"
            alt="Logo"
            className="mb-4"
          />
        </div>
        <h2 className="text-center text-2xl font-bold">Log in to your account</h2>
        <div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              className="w-full mb-4 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <label htmlFor="password">Password:</label>
            <div className="relative w-full mb-4">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={userData.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 flex items-center px-3 text-sm text-gray-600"
              >
                {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
              </button>
            </div>
            <button
              onClick={onSubmit}
              className="w-full p-3 mt-4 text-white bg-yellow-500 rounded-md hover:bg-yellow-600"
            >
              Log in
            </button>
          </div>
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
            Log in with Google
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
            Log in with Facebook
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
            Log in with Apple
          </button>
        </div>
        <p className="text-center text-gray-600">
          Don't have an account?{" "}
          <a href="#" className="text-blue-500">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginComponent;
