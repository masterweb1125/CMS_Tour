import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchInput from "./SearchInput";
import { GetTourById } from "@/src/redux/service/AdminApi";
import RecentBookingCard from "./RecentBookingCard";

const columns = [
  "Tour Name",
  "Person",
  "Guide",
  "Timing",
  "Price",
  "Status",
  "Action",
];

interface Booking {
  user: object;
  tour: string; // Assuming tour is a string representing the tour ID
  booking: {
    _id: string;
    agencyId: string;
    paymentType: string;
    totalAdult: number;
    totalChild: number;
    totalInfant: number;
    pickupLocation: string;
    paymentStatus: string;
    bookingDate: string;
    departTime: string;
    duration: string;
    status: string;
    reviewStatus: string;
    totalPrice: number;
    createdAt: string;
    updatedAt: string;
  };
}

interface Analytics {
  recentBookings: Booking[];
  statistics: {
    currentMonthCount: number;
    lastMonthCount: number;
    percentageDifference: number;
    totalCommission: number;
    currentMonthProfit: number;
    lastMonthProfit: number;
    profitPercentageDifference: number;
    totalCurrentIncentives: number;
    currentMonthIncentives: number;
    lastMonthIncentives: number;
    incentivesPercentageDifference: number;
  };
}

function DataGrid({ title, analytics }: { title: string; analytics: Analytics | null }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBookings, setFilteredBookings] = useState<Booking[]>([]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filterBookings = async () => {
    if (analytics) {
      const bookings = analytics.recentBookings;
      const filtered = await Promise.all(
        bookings.map(async (booking) => {
          const tour = await GetTourById(booking.tour);
          return tour.name.toLowerCase().includes(searchQuery.toLowerCase())
            ? booking
            : null;
        })
      );
      setFilteredBookings(filtered.filter((item) => item !== null) as Booking[]);
    }
  };

  useEffect(() => {
    filterBookings();
  }, [searchQuery, analytics]);

  return (
    <div className="shadow-4xl rounded-lg">
      <Grid container mb={3} spacing={3} px={3}>
        <Grid item xs={12} md={9}>
          <h1 className="text-2xl font-semibold">{title}</h1>
        </Grid>

        <Grid item xs={12} md={3}>
          <div className="flex justify-between gap-3">
            <SearchInput value={searchQuery} onChange={handleSearchChange} />
            <svg
              width="40"
              height="34"
              viewBox="0 0 40 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="39"
                height="43"
                rx="7.5"
                stroke="#D0D5DD"
              />
              <path
                d="M15 22H25M12.5 17H27.5M17.5 27H22.5"
                stroke="#667085"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </Grid>

        <Grid item xs={12}>
          <div className="relative overflow-x-auto border rounded-md">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  {columns.map((item, index) => (
                    <th scope="col" key={index} className="px-6 py-3">
                      {item}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredBookings.length !== 0 ? (
                  filteredBookings.map((item,i) => (
                    <RecentBookingCard key={i} {...item} />
                  ))
                ) : (
                  <tr>
                    <td colSpan={columns.length} className="py-3 px-4 text-[16px]">
                      Recent Booking Not Found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="text-end py-4 text-[#353535] font-semibold cursor-pointer select-none">
            View All
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default DataGrid;
