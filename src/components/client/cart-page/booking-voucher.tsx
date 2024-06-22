"use client"
import { API_DOMAIN } from "@/src/redux/service/APIs";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook, FaPinterest } from "react-icons/fa";

const PaymentStatus = ({ status = 'unknown' }) => {
  // Ensure status is a string and set to lowercase
  const normalizedStatus = typeof status === 'string' ? status.toLowerCase() : 'unknown';

  // Define styles based on the payment status
  const statusStyles = {
    paid: 'bg-green-600',
    unpaid: 'bg-red-600',
    unknown: 'bg-gray-600' // Default style for unknown status
  };

  // Determine the style class based on the status
  const statusClass = statusStyles[normalizedStatus] || statusStyles['unknown'];

  return (
    <p className={`px-[12px] py-[7px] rounded-[8px] font-normal text-[1rem] text-white ${statusClass}`}>
      {status}
    </p>
  );
};

const BookingVoucher = (data:any) => {
  const [BookingVoucher, setBookingVoucher] = useState(null)
  
  const voucherRef = useRef(null);

const hendleFetchBoking = async ()=>{
 try {
  const { user, tour, bookingDate } = data.data;
  console.log('data',data.data)
    const url = `/api/v1/booking/Voucher`;
    const res = await API_DOMAIN.post(url,data.data)
    setBookingVoucher(res.data)
    console.log('responce',res);
 } catch (error) {
  console.log(error)
 }

}


  useEffect(() => {
    hendleFetchBoking();
    // Disable background scrolling
    document.body.style.overflow = 'hidden';
    const handleScroll = () => {
      if (voucherRef.current) {
        const scrollTop = voucherRef.current.scrollTop;
        // console.log('Scroll position:', scrollTop);
        // You can add more logic here based on the scroll position
      }
    };

    const currentVoucherRef = voucherRef.current;
    if (currentVoucherRef) {
      currentVoucherRef.addEventListener('scroll', handleScroll);
    }

    return () => {
      // Re-enable background scrolling when the component is unmounted
      document.body.style.overflow = 'auto';
      if (currentVoucherRef) {
        currentVoucherRef.removeEventListener('scroll', handleScroll);
      }
    };
  },[]);
  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    return date.toLocaleDateString('en-US', options);
  }
  function formatDateToDDMMYYYY(dateString) {
    // Parse the date string to a Date object
    const date = new Date(dateString);
    
    // Get the day, month, and year from the Date object
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-indexed
    const year = date.getFullYear();
    
    // Format the date as DD/MM/YYYY
    return `${day}/${month}/${year}`;
  }
  function detectTimePeriod(timeString) {
    if(timeString){
      const [time, period] = timeString.split(' ');
      let [hours, minutes] = time.split(':').map(Number);
      // Convert to 24-hour format
      if (period === 'PM' && hours !== 12) {
        hours += 12;
      } else if (period === 'AM' && hours === 12) {
        hours = 0;
      }
      // Determine the time period
      if (hours >= 5 && hours < 12) {
        return 'Morning';
      } else if (hours >= 12 && hours < 17) {
        return 'Afternoon';
      } else if (hours >= 17 && hours < 21) {
        return 'Evening';
      } else {
        return 'Night';
      }
    }
  }
  return (
    <div className="w-[100vw] h-[100vh] fixed z-50 top-0 left-0 bg-opacity-black-color flex items-center justify-center overflow-y-auto">
      {/* Main card div started */} 
      <div ref={voucherRef} className="w-[85%]  mt-5 bg-white px-9 py-16 overflow-y-auto h-[90vh]">
        <div className="w-full h-full">
          <div className="w-full flex items-center h-[150px] justify-center relative">
            <Image
              className="absolute top-0 left-0"
              width={80}
              height={80}
              src="/images/logo_transparent1.png"
              alt="Logo"
            />
            <h2 className="text-3xl font-semibold">
              Booking Confirmation Voucher
            </h2>
          </div>
          <div>
            <div className="w-[18%] border-b border-b-gray">
              <div className="flex mb-3 font-normal items-center justify-between">
                <b>To:</b>
                <p>{BookingVoucher?.booking.pickupLocation}</p>
              </div>
              <div className="flex mb-3 font-normal items-center justify-between">
                <b>From:</b>
                <p>{BookingVoucher?.tour.location}</p>
              </div>
              <div className="flex mb-3 font-normal items-center justify-between">
                <b>Reference:</b>
                <p>4837894</p>
              </div>
            </div>
            <div className="pt-6 font-normal">
              <p>
                We're thrilled to confirm your <b>{BookingVoucher?.booking.duration}-day {BookingVoucher?.booking.pickupLocation} getaway</b> from{" "}
                <b>{BookingVoucher?.booking.bookingDate} to {formatDate(BookingVoucher?.tour.endDate)}</b>, with{" "}
                <b>reference number 182938.</b> Enjoying daily breakfast, airport
                transfers, and more. Ensure your passport is valid and keep this
                voucher handy. For assistance, contact us with the provided
                details. Have a fantastic time in the Maldives!
              </p>
            </div>
          </div>
          <div>
            <div className="w-full mt-6 font-semibold text-[1.4rem]">
              <h2>Tour Details :</h2>
            </div>
            <div className="bg-primary w-full py-3 px-6 mt-7 flex items-center justify-between">
              <p>{BookingVoucher?.booking.pickupLocation}</p>
              <p>{BookingVoucher?.booking.duration}-days</p>
              <p>{formatDateToDDMMYYYY(BookingVoucher?.booking.bookingDate)}</p>
              <p>{BookingVoucher?.booking.totalAdult + BookingVoucher?.booking.totalChild + BookingVoucher?.booking.totalInfant} person</p>
              <p>English Guide</p>
              <p>{detectTimePeriod(BookingVoucher?.booking.departTime)}</p>
              <p>{BookingVoucher?.booking.departTime}</p>
            </div>
          </div>
          {/* payment Status section started */}
          <div className="w-full flex items-center mt-5 justify-end">
            <h4 className="font-semibold mr-10">Payment Status</h4>
           {<PaymentStatus status={BookingVoucher?.booking.paymentStatus}/>}
          </div>
          {/* payment Status section ended */}
          <div>
            <div className="flex items-center justify-between mt-10">
              <h2 className="text-[1.4rem] font-semibold">Tour Itinerary :</h2>
              <button className="border-b-2 border-[#0400b2] text-[#0400b2]">
                Itinerary pdf Download
              </button>
            </div>
            <div className="mt-5">
              <p>
                We're thrilled to confirm your {BookingVoucher?.booking.duration}-day {BookingVoucher?.booking.pickupLocation} getaway from
               {BookingVoucher?.booking.bookingDate} to {BookingVoucher?.tour.endDate} with reference number 182938.
                Enjoying daily breakfast, airport transfers What to do Next!
                Destination: Maldives Reviewing the itinerary thoroughly.
                Preparing for the trip. Checking for any additional travel
                requirements. Contacting support for any questions
              </p>
            </div>
            <div className="mt-10">
              <h3 className="font-semibold text-[1.2rem]">What to do Next!</h3>
              <ul className="list-disc ml-9 py-4 text-[1rem]">
                <li>Destination: {BookingVoucher?.booking.pickupLocation}</li>
                <li>Reviewing the itinerary thoroughly.</li>
                <li>Preparing for the trip.</li>
                <li>Checking for any additional travel requirements.</li>
                <li>Contacting support for any questions</li>
              </ul>
            </div>
            <div className="mt-8">
              <h2 className="text-red-500 font-semibold text-[1.4rem]">
                Important Note :
              </h2>
              <p className="mt-2">
                Cancellation and refund policy summary with a link to full
                details Cancellation and refund policy summary with a link to
                full details
              </p>
            </div>
            {/* Contact Section Started */}
            <div className="mt-20">
              <h2 className="text-[1.4rem] font-semibold">
                Contact Information :
              </h2>
              <div className="mt-6 h-[120px] flex items-center">
                <Image
                  width={100}
                  height={100}
                  src="/images/QR/qrcode1.png"
                  alt="QR"
                />
                <div className="w-[2px] h-full mx-5 bg-black" />
                <div>
                  <p className="text-[0.8rem] font-normal">Drop a line</p>
                  <p className="text-[1rem] font-semibold">+00 -249920-3323</p>
                  <p className="text-[0.8rem] font-normal">Email Address</p>
                  <p className="text-[1rem] font-semibold">example@gmail.com</p>
                  <p className="text-[0.8rem] font-normal">Visit Office</p>
                  <p className="text-[1rem] font-semibold">
                    583 main street, NY, USA
                  </p>
                </div>
              </div>
              <div className="flex flex-col py-10 px-10 items-end w-full">
                <h2 className="text-[1.1rem] font-semibold mb-4">
                  Share with your social Media Contact!
                </h2>
                <div className="flex gap-3 text-3xl items-center">
                  <a href=""><FaFacebook /></a>
                  <a href=""><AiFillTwitterCircle /></a>
                  <a href=""><FaPinterest /></a>
                </div>
              </div>
            </div>
            {/* Contact Section ended */}
          </div>
        </div>
      </div>
      {/* Main card div ended */}
    </div>
  );
};

export default BookingVoucher;
