import { Grid } from "@mui/material";
import React from "react";
import SearchInput from "./SearchInput";
import { KababMenu } from "./CardItems";

const columns = [
  "Tour Name",
  "Person",
  "Guide",
  "Timing",
  "Price",
  "Status",
  "Action",
];

function DataGrid({ title }: { title: string }) {
  return (
    <div className="shadow rounded-lg">
      <Grid container mb={3} spacing={3} px={3}>
        <Grid item xs={12} md={8}>
          <h1 className="text-2xl font-semibold">{title}</h1>
        </Grid>
        <Grid item xs={12} md={3}>
          <SearchInput />
        </Grid>
        <Grid item xs={12} md={1}></Grid>

        <Grid item xs={12}>
          <div className="relative overflow-x-auto border rounded-md mb-10">
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
        </Grid>
      </Grid>
    </div>
  );
}

export default DataGrid;
