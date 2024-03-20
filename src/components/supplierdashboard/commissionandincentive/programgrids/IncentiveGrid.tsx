import { Grid } from "@mui/material";
import React from "react";
import { KababMenu } from "../../dashboardComponents/CardItems";

const columns = [
  "Tour Name",
  "Person",
  "Guide",
  "Timing",
  "Price",
  "Status",
  "Action",
];

function IncentiveGrid() {
  return (
    <Grid container>
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
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4 font-medium"> Paris To England Two</td>
                <td className="px-6 py-4 font-medium">04</td>
                <td className="px-6 py-4 font-medium">English</td>
                <td className="px-6 py-4 font-medium">10:00 AM</td>
                <td className="px-6 py-4 font-medium">$8984</td>
                <td className="px-6 py-4 font-medium">Approved</td>
                <td className="px-6 py-4">
                  <KababMenu />
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4 font-medium"> Paris To England</td>
                <td className="px-6 py-4 font-medium">04</td>
                <td className="px-6 py-4 font-medium">English</td>
                <td className="px-6 py-4 font-medium">10:00 AM</td>
                <td className="px-6 py-4 font-medium">$8984</td>
                <td className="px-6 py-4 font-medium">Approved</td>
                <td className="px-6 py-4">
                  <KababMenu />
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4 font-medium"> Paris To England</td>
                <td className="px-6 py-4 font-medium">04</td>
                <td className="px-6 py-4 font-medium">English</td>
                <td className="px-6 py-4 font-medium">10:00 AM</td>
                <td className="px-6 py-4 font-medium">$8984</td>
                <td className="px-6 py-4 font-medium">Approved</td>
                <td className="px-6 py-4">
                  <KababMenu />
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4 font-medium"> Paris To England</td>
                <td className="px-6 py-4 font-medium">04</td>
                <td className="px-6 py-4 font-medium">English</td>
                <td className="px-6 py-4 font-medium">10:00 AM</td>
                <td className="px-6 py-4 font-medium">$8984</td>
                <td className="px-6 py-4 font-medium">Approved</td>
                <td className="px-6 py-4">
                  <KababMenu />
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4 font-medium"> Paris To England</td>
                <td className="px-6 py-4 font-medium">04</td>
                <td className="px-6 py-4 font-medium">English</td>
                <td className="px-6 py-4 font-medium">10:00 AM</td>
                <td className="px-6 py-4 font-medium">$8984</td>
                <td className="px-6 py-4 font-medium">Approved</td>
                <td className="px-6 py-4">
                  <KababMenu />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="text-end py-4 text-[#353535] font-semibold cursor-pointer select-none">
          View All
        </div>
      </Grid>
    </Grid>
  );
}

export default IncentiveGrid;

