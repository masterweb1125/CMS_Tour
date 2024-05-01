import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="bg-gray-400 fixed top-0 w-screen flex justify-center items-center z-50 h-screen">
      <div className="bg-white p-6  w-[30%]">
       
        <div className="text-center">
          <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
            Payment Failed!
          </h3>
         
          <div className="py-10 text-center">
            <Link
              href="book-now"
              className="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3"
            >
              GO BACK
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
