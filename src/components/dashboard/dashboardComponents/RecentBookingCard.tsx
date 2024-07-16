"use client";
import React, { useEffect, useState } from "react";
import { KababMenu } from "./CardItems";
import { GetTourById, GetUserById } from "@/src/redux/service/AdminApi";

const RecentBookingCard = ({ tour, user, status, totalPrice, departTime,totalChild,totalInfant,totalAdult}) => {
  const [tourstate, settourstate] = useState(null);
  const [userstate, setuserstate] = useState(null);
  const fetch = async () => {
    const tourData = await GetTourById(tour);
    const userData = await GetUserById(user);
    settourstate(tourData);
    setuserstate(userData);
  };

  useEffect(() => {
    fetch();
  }, []);
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <td className="px-6 py-4 font-medium">{tourstate?.name}</td>
      <td className="px-6 py-4 font-medium">{totalAdult + totalInfant + totalChild}</td>
      <td className="px-6 py-4 font-medium">English</td>
      <td className="px-6 py-4 font-medium">{departTime}</td>
      <td className="px-6 py-4 font-medium">{totalPrice}</td>
      <td className="px-6 py-4 font-medium">{status}</td>
      <td className="px-6 py-4">
        <KababMenu />
      </td>
    </tr>
  );
};

export default RecentBookingCard;
