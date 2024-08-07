import { Grid } from "@mui/material";
import React from "react";
import SearchInput from "./SearchInput";
import { KababMenu } from "./CardItems";
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

function DataGrid({ title, analytics }: { title: string }) {
  return (
    <div className="shadow-4xl rounded-lg">
      <Grid container mb={3} spacing={3} px={3}>
        <Grid item xs={12} md={9}>
          <h1 className="text-2xl font-semibold">{title}</h1>
        </Grid>

        <Grid item xs={12} md={3}>
          <div className="flex justify-between gap-3">
            <SearchInput />
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
          <div className="relative overflow-x-auto border rounded-md mb-3">
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
                {analytics &&
                analytics.recentBookings &&
                analytics.recentBookings.length !== 0 ? (
                  analytics.recentBookings
                    .filter((item) => item._id)
                    .map((item) => (
                      <RecentBookingCard key={item._id} {...item} />
                    ))
                ) : (
                  <tr>
                    <td
                      colSpan="100%"
                      className="flex text-sm items-start p-4 w-full"
                    >
                      Recent Booking not found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default DataGrid;
