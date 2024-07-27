'use client'
import BookingVoucher from "@/src/components/client/cart-page/booking-voucher";
import CartPage from "@/src/components/client/cart-page/cart-page.component";
import Client_Hero from "@/src/components/client/hero-section/hero.component";
import { AddToCard } from "@/src/utils/images/images";
// import { DATE_TIME_VALIDATION_PROP_NAMES } from "@mui/x-date-pickers/internals/utils/validation/extractValidationProps";
import React, { useEffect, useState } from "react";

const Client_TourDetail = () => {
  const [BookingVoucherStatus, setBookingVoucherStatus] = useState(false);
  const [BookingData , setBookingData ] = useState({})
   useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const dataParam = JSON.parse(urlParams.get("data"));
    if (dataParam) {
      setBookingVoucherStatus(true);
      setBookingData(dataParam);
      // console.log('bOOKING voucher IS DISPLAY',dataParam)
    }else{
      setBookingVoucherStatus(false)
    }
   
  },[])
  const handleToogleVoucher = ()=>{
    console.log('working')
    setBookingVoucherStatus(!BookingVoucherStatus)
  }
  return (
    <div className="relative m-0 p-0  overflow-x-hidden ">
      {BookingVoucherStatus?<BookingVoucher  data={BookingData}/>:""}
      <Client_Hero
        bgImage={AddToCard.src}
        title={"Explore The World"}
        subTitleWidth="w-4/6"
        child={""}
        subTitle={
          "Embark on a journey to unforgettable destinations, where breathtaking landscapes meet"
        }
        smallText={true}
      />
      <CartPage  setBookingData={setBookingData} />
    </div>
  );
};

export default Client_TourDetail;
