"use client";
import { addToCart } from '@/src/redux/features/User.Slice';
import Link from 'next/link';
import Router from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

const Page = () => {
  const dispatch = useDispatch();
  const [url,seturl] = useState(null)

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const dataParam = urlParams.get('data');

    if (dataParam) {
      const data = JSON.parse(decodeURIComponent(dataParam));
      const params = {...data,paymentStatus:'paid'};
      console.log(params)
      seturl(params);
      dispatch(addToCart({})); // Dispatch the action with the parsed data
    }
  }, [dispatch]);
  const handleGoBack = () => {
    const mainUrl = encodeURIComponent(JSON.stringify(url))
    window.location.href = `/book-now?data=${mainUrl}`
  }
  return (
    <div className="bg-gray-400 fixed top-0 w-screen flex justify-center items-center z-50 h-screen">
      <div className="bg-white p-6 w-[90%] sm:w-[35%] md:w-[45%]">
        <svg viewBox="0 0 24 24" className="text-green-600 w-16 h-16 mx-auto my-6">
          <path
            fill="currentColor"
            d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
          ></path>
        </svg>
        <div className="text-center">
          <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">Payment Done!</h3>
          <p className="text-gray-600 my-2">Thank you for completing your secure online payment.</p>
          <p>Have a great day!</p>
          <div className="py-10 text-center">
            <button className="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3" onClick={handleGoBack}>
              {/* <a > */}
                GO BACK
              {/* </a> */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
