"use client";
import { CartTourImage } from "@/src/utils/images/images";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import { Divider, Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
  FUNDING,
} from "@paypal/react-paypal-js";
import toast, { Toaster } from "react-hot-toast";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { API_DOMAIN } from "@/src/redux/service/APIs";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/src/redux/features/User.Slice";
import { ApplyDiscountCode, ApplyReferralCode, checkBooking, CreateBooking } from "@/src/redux/service/AdminApi";
interface CartItem {
  sku: string;
  quantity: number;
}

const style: any = { layout: "vertical" };

function createOrder(): Promise<string> {
  return fetch(
    "https://react-paypal-js-storybook.fly.dev/api/paypal/create-order",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cart: [
          {
            sku: "1blwyeo8",
            quantity: 2,
          },
        ],
      }),
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((order: { id: string }) => {
      return order.id;
    })
    .catch((error) => {
      console.error("Error creating order:", error);
      throw error;
    });
}

// ----------- new one onApprove func-----------
function onApprove(data: { orderID: string }): Promise<void> {
  console.log("data in the onApprove function: ", data);

  // Log the successful transaction response
  return Promise.resolve(console.log("Transaction completed successfully"));
}

const ButtonWrapper: React.FC<{ showSpinner: boolean }> = ({ showSpinner }) => {
  const [{ isPending }] = usePayPalScriptReducer();

  const fundingSources = [FUNDING.PAYPAL, FUNDING.PAYLATER, FUNDING.CARD];

  return (
    <>
      {showSpinner && isPending && <div className="spinner" />}
      {fundingSources.map((source) => (
        <PayPalButtons
          key={source}
          style={style}
          disabled={false}
          forceReRender={[style]}
          fundingSource={source}
          createOrder={createOrder}
          onApprove={onApprove}
        />
      ))}
    </>
  );
};

 
const faqs = [
  {
    question: "What your Package Includes",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, ",
  },
  {
    question: "What your Package Includes",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, ",
  },
  {
    question: "What your Package Includes",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, ",
  },
];

const CartPage = ({setBookingVoucherStatus,setBookingData}) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedOption, setSelectedOption] = useState("option1");
  const [createbookingstatus, setcreatebookingstatus] = useState(false);
  const dispatch = useDispatch();
  const cart: any = useSelector((root: any) => root?.User?.cart);
  const User: any = useSelector((root: any) => root.User.UserInfo);
  const roo: any = useSelector((root: any) => root);
  const [discount,setdiscount] = useState({userId:User?._id,code:"",orderTotal:cart?.price})
  const [referral,setreferral] = useState({userId:User?._id,code:"",orderTotal:cart?.price})
  const [discountErrorMessage,setdiscountErrorMessage] = useState('');
  const [referralErrorMessage,setreferralErrorMessage] = useState('');
  const [disable,setdisable] = useState(0);
  const [bookingApiResponce,setbookingApiResponce] = useState(null)
  const [totalprice,settotalprice] =  useState(cart?.price?cart.price:0);
  const [transation,settransation] = useState({ 
    discountId:null,
    raferralId:null,
    discountAmount:0,
    raferralAmount:0,
    actualAmount:0,
    amount:0,
    comment:"",
    type:'stripe'
  })
  // console.log("User :", User);
  // console.log("Cart :",roo);

  const toggleAccordion = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleOptionChange = (e: any) => {
    setSelectedOption(e.target.value);
  };

  // ------- remove item from cart ---------
  const removeItem = () => {
    dispatch(addToCart({}));
  };
const hendleDiscountCodeChange = (e)=>{
  setdiscount({...discount,code:e.target.value})
  if(discount.code != ''){
    setdiscountErrorMessage('')
  }
}
const hendlereferralCodeChange = (e)=>{
  setreferral({...referral,code:e.target.value})
  if(referral.code != ''){
    setreferralErrorMessage('')
  }
}
useEffect(()=>{
  settransation({...transation,actualAmount:cart?.price})
  if(totalprice === 0) {
    setdisable(3)
  }
},[])
const handleApplyDiscount = async ()=>{
try {
  if (!discount.code != "") {
    return setdiscountErrorMessage('Please fill promo code')
  }
  const res = await ApplyDiscountCode(discount);
  console.log(res)
  if (res){
   if(!res.status){
    setdiscountErrorMessage(res.msg);
   }else{
    setdiscountErrorMessage('')
    settotalprice(res.newTotal)
    setdisable(2)
    settransation({...transation,discountId:res.data._doc._id,discountAmount:res.newTotal,amount:res.newTotal})
   }
  }
} catch (error) {
 console.log(error)
}

}


const handleApplyReferral= async ()=>{
  try {
    if (!referral.code != "") {
      return setreferralErrorMessage('Please fill referral code')
    }
    const res = await ApplyReferralCode(referral);
    console.log(res)
    if (res){
     if(!res.status){
      setreferralErrorMessage(res.msg);
     }else{
      setreferralErrorMessage('')
      settotalprice(res.newTotal)
      setdisable(1)
      settransation({...transation,raferralId:res.data._doc._id,raferralAmount:res.newTotal,amount:res.newTotal})
     }
    }
  } catch (error) {
   console.log(error)
  }
  
  }
const checking = async ()=>{
  const res = await checkBooking({user:User._id,tour:cart.tourId,bookingDate:cart.date})
  return res;
}
  const handlePaymentMethod = async (e: any) => {
       const bookingcheck = await checking();
       console.log(bookingcheck);
       if(!bookingcheck.status){
        toast.error('Your booking Already exist')
        return
       }
    
   

    try {
      const stripe = await loadStripe(
        "pk_test_51Nl9FzEIX222al03QlMhPLYtVp3dZMKb03KmngWUNT4ABfoDlCgP1rDQF8qgKD2MnxYgK2uq0kNMiVw6LxuznnSy00yaKxaK9w"
      );

      const res = await API_DOMAIN.post(`/api/v1/payment/checkout`, {
        amount: totalprice,
        data: {
          confirm: false,
          user: User._id,
          tour: cart.tourId,
          totalAdult: cart.person,
          paymentType: "credit_card",
          totalChild: cart.child,
          totalInfant: 0,
          pickupLocation:cart.pickupdate,
          paymentStatus: "pending",
          bookingDate: cart.date,
          departTime: cart.departTime,
          duration: cart.duration,
          totalPrice: cart.price,
          agency :cart.agencyId,
          languge:cart.languge,
          transaction:transation
          // tourRequiredPrice: '',
        },
      });

      // console.log(payment done res: , res.data);

      const session_id = res?.data.id;
      // console.log(res)
      const result = stripe?.redirectToCheckout({
        sessionId: session_id,
      });
      // console.log(result);
    } catch (error) {
      console.log("stripe res: ", error);
      toast.error("Stripe response error");
    }
  };
  const hendleCreateBooking = async (data: any) => {
    try {
      const res = await CreateBooking(data);
      return  res;
    } catch (error) {
      console.log("Create booking functiuon error", error);
    }
  };
  const fetch  = async(data)=>{
    const res = await hendleCreateBooking(data)
    return res  
  }
useEffect(() => {
   const funtion  = ()=>{
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const dataParam = urlParams.get("data");
    // console.log("createbookingstatus", createbookingstatus);
    if (dataParam && !createbookingstatus) {
      const data = JSON.parse(decodeURIComponent(dataParam));
      const {
        user,
        tour,
        paymentType,
        totalAdult,
        totalChild,
        totalInfant,
        pickupLocation,
        paymentStatus,
        totalPrice,
        bookingDate,
        departTime,
        duration,
        languge,
        transaction
      } = data;
      console.log("Parems Data", data);

      const res =  fetch({
        user,
        tour,
        paymentType,
        totalAdult,
        totalChild,
        totalInfant,
        paymentStatus,
        pickupLocation,
        totalPrice,
        bookingDate,
        departTime,
        duration,
        languge,
      });
     
    }
   }
   funtion()
  }, [createbookingstatus]);
  return (

    <div className="px-4 md:px-20 lg:px-30 relative">
      <Toaster/>
      <h1 className="pt-14 text-3xl font-bold md:text-2xl md:font-semibold font-mont text-[#000]">
        Complete Your Booking
      </h1>

      <Grid container spacing={6}>
        <Grid item md={7}>
          {cart?.tourId ? (
            <React.Fragment>
              <div className="hidden md:flex justify-between pb-8 pt-8 ">
                <div className="tour-info flex gap-4">
                  <Image
                    className="w-40 h-40 object-contain rounded-xl "
                    width={200}
                    height={200}
                    src={cart?.imageUrl}
                    alt="tour-pic"
                  />
                  <div className="tour-detail-info flex-col gap-2 flex">
                    <h6 className=" text-[#000] text-1xl font-semibold font-mont ">
                      {cart?.tourName}
                    </h6>
                    <p className="text-[#000] text-xs font-medium font-mont ">
                      Date: {cart?.date}
                    </p>
                    <p className="text-[#000] text-xs font-medium font-mont ">
                      Duration : {cart?.duration}
                    </p>
                    <p className="text-[#000] text-xs font-medium font-mont ">
                      Person: {cart?.person}
                    </p>
                    <p className="text-[#000] text-xs font-medium font-mont ">
                      Child: {cart?.child}
                    </p>

                    <p className="text-[#000] text-xs font-medium font-mont ">
                      Departure Time : {cart?.departTime}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col justify-between items-end">
                  <div className="actions flex gap-4">
                    <div className="text-xs font-mont font-normal cursor-pointer ">
                      <ModeEditOutlinedIcon fontSize="inherit" /> Edit
                    </div>
                    <div
                      className="text-xs font-mont font-normal cursor-pointer "
                      onClick={removeItem}
                    >
                      <DeleteOutlineRoundedIcon fontSize="inherit" /> Remove
                    </div>
                  </div>
                  <div className="price ">
                    <p className="text-[#FFA500] font-mont font-semibold text-2xl">
                      ${totalprice}
                    </p>
                  </div>
                </div>
              </div>

              <Divider />
            </React.Fragment>
          ) : (
            <div className="addItem text-[1.3rem] text-gray-400 font-bold mt-6 mb-4">
              <h4 className="tracking-[2px]">Your Cart is an Empty!</h4>
            </div>
          )}

          <div className="font-mont mt-4 pt-10 bg-[#FBFBFB] rounded-lg p-6">
            <Grid container>
              <Grid item xs={12}>
                <label className="text-[#000] border-t-4 border-[#FFA500] text-1xl font-semibold pt-4">
                  Personal Details
                </label>
              </Grid>
            </Grid>

            <Grid container spacing={2} mt={0.2} mb={2}>
              <Grid item xs={3} md={2}>
                <div className="form-group">
                  <label className="mb-2 text-sm font-mont font-normal text-[#344054]">
                    Title
                  </label>
                  <br />
                  <input
                    className="w-full border-solid border py-2 border-opacity-20 pl-2 rounded-lg border-black-variant bg-[#FBFBFB] outline-none"
                    type="text"
                    placeholder="Mr,"
                    required={true}
                  />
                </div>
              </Grid>
              <Grid item xs={9} md={5}>
                <div className="form-group">
                  <label className="mb-2 text-sm font-mont font-normal text-[#344054]">
                    First Name
                  </label>
                  <br />
                  <input
                    className="w-full border-solid border  py-2 border-opacity-20  pl-2  rounded-lg border-black-variant bg-[#FBFBFB] outline-none"
                    type="text"
                    placeholder="First name"
                  />
                </div>
              </Grid>
              <Grid item xs={12} md={5}>
                <div className="form-group">
                  <label className="mb-2 text-sm font-mont font-normal text-[#344054]">
                    Last Name
                  </label>
                  <br />
                  <input
                    className="w-full border-solid border border-opacity-20 py-2  pl-2  rounded-lg border-black-variant bg-[#FBFBFB]"
                    type="text"
                    placeholder="Last name"
                  />
                </div>
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <div className="form-group">
                  <label className="text-sm font-mont font-normal text-[#344054]">
                    Cellphone Number
                  </label>
                  <br />
                  <input
                    className="w-full border-solid border  py-2 border-opacity-20  pl-2  rounded-lg border-black-variant bg-[#FBFBFB]"
                    type="text"
                    placeholder="+92 4040 40404"
                  />
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <div className="form-group">
                  <label className="mb-2 text-sm font-mont font-normal text-[#344054]">
                    Email
                  </label>
                  <br />
                  <input
                    className="w-full border-solid border border-opacity-20 py-2  pl-2  rounded-lg border-black-variant bg-[#FBFBFB]"
                    type="text"
                    placeholder="you@company.com"
                  />
                </div>
              </Grid>
            </Grid>

            <div className="term-condition mt-4">
              <input type="checkbox" value="terms&condition" />
              <label className="pl-3 text-[#475467] text-xs font-normal font-mont">
                You agree to our friendly{" "}
                <Link className=" underline decoration-solid  " href="#">
                  Term & Conditions
                </Link>
                .
              </label>
            </div>

            <div className=" mt-14 ">
              <label className="text-[#000] border-t-4 border-[#FFA500] text-1xl font-semibold pt-4">
                Select Your Payment Method
              </label>
              <p className="text-[#475467] text-xs">
                Safe and Secure Payment processing guaranteed. view details
              </p>

              <div className="mt-2 flex justify-between px-2 w-full border-solid border border-opacity-20 py-2  pl-2  rounded-lg border-black-variant bg-[#635bff]">
                <div className="flex gap-3 items-center">
                  <input
                    value="option1"
                    checked={selectedOption === "option1"}
                    onChange={handleOptionChange}
                    name="credit_card"
                    className=""
                    id="card"
                    type="radio"
                  />
                  <label className="text-white font-bold text-base">Stripe</label>
                </div>
               
              </div>
              <div className="mt-3 w-full border-solid border border-opacity-20 py-2  pl-2  rounded-lg border-black-variant bg-[#FBFBFB]">
                <div className="flex gap-3 items-center">
                  <input
                    value="option2"
                    checked={selectedOption === "option2"}
                    onChange={handleOptionChange}
                    id="paypal"
                    name="paypal_p"
                    type="radio"
                  />
                  <label>
                    <svg
                      width="84"
                      height="22"
                      viewBox="0 0 84 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M64.7761 5.64355H60.2738C60.009 5.64355 59.7441 5.91229 59.6117 6.18103L57.7578 18.0055C57.7578 18.2742 57.8902 18.4086 58.1551 18.4086H60.5387C60.8035 18.4086 60.9359 18.2742 60.9359 18.0055L61.4656 14.6462C61.4656 14.3775 61.7304 14.1088 62.1277 14.1088H63.5843C66.63 14.1088 68.3515 12.6307 68.7488 9.67461C69.0136 8.46529 68.7488 7.39035 68.2191 6.7185C67.4246 6.04666 66.2328 5.64355 64.7761 5.64355ZM65.3058 10.0777C65.041 11.6901 63.8492 11.6901 62.6574 11.6901H61.8629L62.3926 8.59966C62.3926 8.4653 62.525 8.33093 62.7898 8.33093H63.0547C63.8492 8.33093 64.6437 8.33093 65.041 8.8684C65.3058 9.00277 65.3058 9.40588 65.3058 10.0777Z"
                        fill="#139AD6"
                      />
                      <path
                        d="M32.3328 5.64355H27.8305C27.5656 5.64355 27.3008 5.91229 27.1683 6.18103L25.3145 18.0055C25.3145 18.2742 25.4469 18.4086 25.7117 18.4086H27.8305C28.0953 18.4086 28.3601 18.1398 28.4926 17.8711L29.0222 14.6462C29.0222 14.3775 29.2871 14.1088 29.6844 14.1088H31.141C34.1867 14.1088 35.9081 12.6307 36.3054 9.67461C36.5703 8.46529 36.3054 7.39035 35.7757 6.7185C34.9812 6.04666 33.9218 5.64355 32.3328 5.64355ZM32.8625 10.0777C32.5976 11.6901 31.4058 11.6901 30.214 11.6901H29.5519L30.0816 8.59966C30.0816 8.4653 30.214 8.33093 30.4789 8.33093H30.7437C31.5382 8.33093 32.3328 8.33093 32.73 8.8684C32.8625 9.00277 32.9949 9.40588 32.8625 10.0777ZM45.9722 9.94335H43.8534C43.721 9.94335 43.4562 10.0777 43.4562 10.2121L43.3237 10.8839L43.1913 10.6152C42.6616 9.94335 41.7347 9.67461 40.6753 9.67461C38.2917 9.67461 36.173 11.5558 35.7757 14.1088C35.5109 15.4525 35.9081 16.6618 36.5703 17.468C37.2324 18.2742 38.1593 18.5429 39.3511 18.5429C41.3374 18.5429 42.3968 17.3336 42.3968 17.3336L42.2644 18.0055C42.2644 18.2742 42.3968 18.4086 42.6616 18.4086H44.6479C44.9128 18.4086 45.1776 18.1398 45.3101 17.8711L46.5018 10.3465C46.3694 10.2121 46.1046 9.94335 45.9722 9.94335ZM42.9265 14.2431C42.6616 15.4525 41.7347 16.393 40.4105 16.393C39.7484 16.393 39.2187 16.1243 38.9538 15.8556C38.689 15.4525 38.5566 14.915 38.5566 14.2431C38.689 13.0338 39.7484 12.0932 40.9402 12.0932C41.6023 12.0932 41.9995 12.362 42.3968 12.6307C42.794 13.0338 42.9265 13.7057 42.9265 14.2431Z"
                        fill="#263B80"
                      />
                      <path
                        d="M78.2833 9.94354H76.1646C76.0321 9.94354 75.7673 10.0779 75.7673 10.2123L75.6349 10.8841L75.5024 10.6154C74.9728 9.94354 74.0458 9.6748 72.9864 9.6748C70.6029 9.6748 68.4841 11.556 68.0869 14.109C67.822 15.4527 68.2193 16.662 68.8814 17.4682C69.5435 18.2744 70.4704 18.5431 71.6622 18.5431C73.6486 18.5431 74.7079 17.3338 74.7079 17.3338L74.5755 18.0057C74.5755 18.2744 74.7079 18.4088 74.9728 18.4088H76.9591C77.2239 18.4088 77.4888 18.14 77.6212 17.8713L78.813 10.3466C78.6806 10.2123 78.5481 9.94354 78.2833 9.94354ZM75.2376 14.2433C74.9728 15.4527 74.0458 16.3932 72.7216 16.3932C72.0595 16.3932 71.5298 16.1245 71.265 15.8558C71.0001 15.4527 70.8677 14.9152 70.8677 14.2433C71.0001 13.034 72.0595 12.0934 73.2513 12.0934C73.9134 12.0934 74.3107 12.3622 74.7079 12.6309C75.2376 13.034 75.37 13.7059 75.2376 14.2433Z"
                        fill="#139AD6"
                      />
                      <path
                        d="M57.4933 9.94336H55.2421C54.9773 9.94336 54.8449 10.0777 54.7125 10.2121L51.7992 14.7806L50.475 10.4808C50.3426 10.2121 50.2101 10.0777 49.8129 10.0777H47.6941C47.4293 10.0777 47.2969 10.3465 47.2969 10.6152L49.6805 17.7367L47.4293 20.9616C47.2969 21.2303 47.4293 21.6334 47.6941 21.6334H49.8129C50.0777 21.6334 50.2101 21.4991 50.3426 21.3647L57.6257 10.7496C58.023 10.3465 57.7581 9.94336 57.4933 9.94336Z"
                        fill="#263B80"
                      />
                      <path
                        d="M80.7992 6.04704L78.9453 18.1402C78.9453 18.4089 79.0777 18.5433 79.3426 18.5433H81.1965C81.4613 18.5433 81.7262 18.2746 81.8586 18.0058L83.7125 6.1814C83.7125 5.91267 83.5801 5.7783 83.3152 5.7783H81.1965C81.064 5.64393 80.9316 5.7783 80.7992 6.04704Z"
                        fill="#139AD6"
                      />
                      <path
                        d="M15.5155 1.61242C14.5886 0.537473 12.8671 0 10.4835 0H3.86248C3.46522 0 3.06795 0.403104 2.93553 0.806209L0.287109 18.4085C0.287109 18.8116 0.551952 19.0803 0.816794 19.0803H4.92185L5.98122 12.4963V12.765C6.11364 12.3619 6.51091 11.9588 6.90817 11.9588H8.89449C12.7347 11.9588 15.648 10.3464 16.5749 5.91222V5.50911C16.4425 5.50911 16.4425 5.50911 16.5749 5.50911C16.7073 3.76232 16.4425 2.68737 15.5155 1.61242Z"
                        fill="#263B80"
                      />
                      <path
                        d="M16.4413 5.50879V5.9119C15.5144 10.4804 12.6011 11.9585 8.76092 11.9585H6.7746C6.37733 11.9585 5.98007 12.3616 5.84765 12.7647L4.52344 20.9612C4.52344 21.2299 4.65586 21.4986 5.05312 21.4986H8.49607C8.89334 21.4986 9.2906 21.2299 9.2906 20.8268V20.6924L9.95271 16.527V16.2583C9.95271 15.8552 10.35 15.5864 10.7472 15.5864H11.2769C14.5874 15.5864 17.2359 14.2427 17.898 10.2117C18.1628 8.59927 18.0304 7.12121 17.2359 6.18063C17.1034 5.91189 16.8386 5.64316 16.4413 5.50879Z"
                        fill="#139AD6"
                      />
                      <path
                        d="M15.5167 5.10623C15.3843 5.10623 15.2519 4.97186 15.1195 4.97186C14.9871 4.97186 14.8546 4.97186 14.7222 4.83749C14.1925 4.70312 13.6628 4.70312 13.0007 4.70312H7.83632C7.7039 4.70312 7.57148 4.70312 7.43905 4.83749C7.17421 4.97186 7.04179 5.2406 7.04179 5.50933L5.98242 12.4965V12.7652C6.11484 12.3621 6.51211 11.959 6.90937 11.959H8.89569C12.7359 11.959 15.6492 10.3466 16.5761 5.91244C16.5761 5.77807 16.5761 5.6437 16.7085 5.50933C16.4437 5.37497 16.3113 5.2406 16.0464 5.2406C15.6492 5.10623 15.6492 5.10623 15.5167 5.10623Z"
                        fill="#232C65"
                      />
                    </svg>
                  </label>
                </div>
              </div>
              <div className="mt-3 w-full border-solid border border-opacity-20 py-2  pl-2  rounded-lg border-black-variant">
                <div className="flex gap-3 items-center">
                  <input
                    name="pay_later"
                    value="option3"
                    id="pay-later"
                    type="radio"
                    checked={selectedOption === "option3"}
                    onChange={handleOptionChange}
                  />
                  <label
                    htmlFor="pay-later"
                    className=" italic font-semibold text-sm"
                  >
                    Pay Later
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="font-mont mt-4 pt-10 bg-[#FBFBFB] rounded-lg p-6">
            <div className="total flex justify-between">
              <p className="text-[#000] font-semibold text-2xl font-mont">
                Total
              </p>
              <p className="text-[#FFA500] font-semibold text-2xl font-mont">
                ${totalprice}
              </p>
            </div>
            <p className=" text-[#323232] text-base font-medium font-mont pt-3 ">
              By proceeding to payment, you agree to our Terms &
              conditions - Privacy policy
            </p>
            <button className="bg-[#FFA500] text-white font-semibold font-mont  text-xl px-4 py-2 rounded-md w-full mt-4">
              Card
            </button>
          </div>
        </Grid>

        {/* Order Review */}
        <Grid item md={5}>
          <div className="font-mont mt-4 pt-10  shadow-[#FBFBFB]-500  bg-[#FBFBFB] rounded-lg p-6">
            <label className="text-[#000] border-t-4 border-[#FFA500] text-2xl font-semibold pt-4 ">
              Order Review
            </label>
            <div className="w-full my-4">
              <div className="flex justify-between py-6">
                <div className="reviews flex items-center gap-4">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.99935 26.7831H11.4797C11.9335 26.7831 12.3845 26.8371 12.8244 26.945L16.5019 27.8387C17.2998 28.0331 18.1311 28.052 18.9373 27.8954L23.0033 27.1043C24.0774 26.8951 25.0655 26.3808 25.8398 25.6275L28.7165 22.8291C29.5381 22.0313 29.5381 20.7368 28.7165 19.9376C27.9769 19.2181 26.8057 19.1371 25.9689 19.7473L22.6161 22.1933C22.136 22.5443 21.5518 22.7333 20.9509 22.7333H17.7133L19.7741 22.7332C20.9356 22.7332 21.8765 21.818 21.8765 20.6881V20.279C21.8765 19.3409 21.2201 18.5228 20.2848 18.296L17.1041 17.5225C16.5865 17.397 16.0564 17.3335 15.5235 17.3335C14.2371 17.3335 11.9085 18.3986 11.9085 18.3986L7.99935 20.0334M2.66602 19.4669L2.66602 27.2002C2.66602 27.9469 2.66602 28.3203 2.81134 28.6055C2.93917 28.8564 3.14315 29.0604 3.39403 29.1882C3.67924 29.3335 4.05261 29.3335 4.79935 29.3335H5.86601C6.61275 29.3335 6.98612 29.3335 7.27134 29.1882C7.52222 29.0604 7.72619 28.8564 7.85402 28.6055C7.99935 28.3203 7.99935 27.9469 7.99935 27.2002V19.4669C7.99935 18.7201 7.99935 18.3467 7.85402 18.0615C7.72619 17.8107 7.52222 17.6067 7.27134 17.4788C6.98612 17.3335 6.61275 17.3335 5.86602 17.3335H4.79935C4.05261 17.3335 3.67924 17.3335 3.39403 17.4788C3.14315 17.6067 2.93917 17.8106 2.81134 18.0615C2.66602 18.3467 2.66602 18.7201 2.66602 19.4669ZM22.9212 4.78986C22.1254 3.12472 20.2908 2.24257 18.5066 3.09402C16.7224 3.94547 15.9623 5.96469 16.7093 7.73729C17.171 8.8328 18.4937 10.9602 19.4368 12.4256C19.7853 12.967 19.9595 13.2377 20.214 13.3961C20.4323 13.5319 20.7056 13.6052 20.9625 13.5967C21.2621 13.5868 21.5484 13.4394 22.1209 13.1448C23.6703 12.3473 25.8795 11.1663 26.8271 10.4484C28.3603 9.28674 28.7401 7.15162 27.5922 5.52851C26.4443 3.90539 24.4429 3.74568 22.9212 4.78986Z"
                      stroke="black"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="text-md font-medium">03 Experiences</p>
                </div>
                <div className="viewDetail text-[#FFB733] text-md font-medium border-b-2 border-[#FFA500]">
                  View Details
                </div>
              </div>
              <Divider />
              <div className="py-4">
                <p className="text-md font-medium text-[#323232]">
                  Apply Promo Code
                </p>
                <p className="text-sm mt-2 font-normal text-red-600">{discountErrorMessage}</p>
                <div className="apply_form w-full flex  gap-2 py-2">
                  <input
                   disabled={disable === 1?true:false || disable === 3?true:false}
                    className="bg-[#FBFBFB]  text-xs border-solid border-opacity-20 border py-2 w-full  pl-2  rounded-lg border-black-variant"
                    type="text"
                    value={discount.code}
                    onChange={hendleDiscountCodeChange}
                    placeholder="Enter Code"
                  />
                  <button   disabled={disable === 1?true:false || disable === 3?true:false} onClick={handleApplyDiscount} className="text-sm border-opacity-20  border-solid py-2 px-6 border rounded-lg border-black-variant">
                    Apply
                  </button>
                </div>
              </div>
              <Divider />
              <div className="py-4">
                <p className="text-md font-medium text-[#323232]">
                  Apply Referral Code
                </p>
                <p className="text-sm mt-2 font-normal text-red-600">{referralErrorMessage}</p>
                <div className="apply_form w-full flex gap-2 py-2">
                  <input
                   disabled={disable === 2?true:false || disable === 3?true:false}
                   onChange={hendlereferralCodeChange}
                    className="bg-[#FBFBFB] text-xs border-solid border-opacity-20 border py-2 w-full  pl-2  rounded-lg border-black-variant"
                    type="text"
                    value={referral.code}
                    name="code"
                    placeholder="Enter Code"
                  />
                  <button onClick={handleApplyReferral}  disabled={disable === 2?true:false || disable === 3?true:false} className="text-sm border-opacity-20 border-solid py-2 px-6 border rounded-lg border-black-variant">
                    Apply
                  </button>
                </div>
              </div>
              <Divider />
              <div className="py-4">
                <div className="total-pricing w-full justify-between flex gap-2 py-2">
                  <p className="text-2xl font-medium text-[#000]">Total</p>
                  <p className="text-2xl font-medium text-[#000]">
                    {" "}
                    ${totalprice}
                  </p>
                </div>
                <p className="text-[#323232] font-medium text-sm">
                  By proceeding to payment, you agree to our Terms &
                  conditions - Privacy policy
                </p>
                <button
                  onClick={handlePaymentMethod}
                  className="bg-[#FFA500] text-white font-semibold font-mont  text-xl px-4 py-2 rounded-md w-full mt-4"
                  disabled={totalprice != 0 ? false : true}
                >
                  Pay Now
                </button>


              </div>
            </div>
          </div>
          <div className="font-mont mt-4 pt-8 border rounded-2xl p-6">
            <div className="border-t-4 border-[#FFA500] w-24 mb-4" />
            <label className="text-[#000] text-2xl font-semibold md:font-medium pt-4">
              Frequent Asked Question
            </label>
            <div className=" w-full my-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`${
                    activeIndex === index
                      ? "bg-white border-white shadow-lg "
                      : "bg-[#FBFBFB] border-gray-200"
                  } rounded-md mb-4 `}
                >
                  <button
                    className="w-full  flex justify-between items-center p-4 focus:outline-none"
                    onClick={() => toggleAccordion(index)}
                  >
                    <span className="font-medium">{faq.question}</span>
                    <div
                      className={`p-2 rounded-lg h-max w-max ${
                        activeIndex === index ? "bg-[#FFA500]" : "bg-[#FFF8EC]"
                      } `}
                    >
                      <svg
                        className={`fill-black   ${
                          activeIndex === index
                            ? "bg-[#FFA500] fill-white"
                            : "bg-[#FFF8EC]"
                        } `}
                        width="16"
                        height="16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          y="7"
                          width="16"
                          height="2"
                          rx="1"
                          className={`transform origin-center transition duration-200 ease-out ${
                            activeIndex === index && "!rotate-180"
                          }`}
                        />
                        <rect
                          y="7"
                          width="16"
                          height="2"
                          rx="1"
                          className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                            activeIndex === index && "!rotate-180"
                          }`}
                        />
                      </svg>
                    </div>
                  </button>
                  {activeIndex === index && (
                    <div
                      className={`transform px-4 pt-0 pb-6 grid transition-all duration-500 ease-in-out ${
                        activeIndex === index
                          ? " grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0 "
                      }`}
                    >
                      <p className="text-[#6F6C90] text-xs ">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Grid>
        {/* Order Review */}
      </Grid>
    </div>
  );
};

export default CartPage;
