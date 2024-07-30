"use client"
import { Box, Button, ButtonGroup, Grid } from "@mui/material";
import { KababMenu } from "@/src/components/dashboard/dashboardComponents/CardItems";
import { GetBookingWithTourData, hendleGetAllBookings } from "@/src/redux/service/AdminApi";
import { useEffect, useState } from "react";
import { CSVLink } from 'react-csv';
import { saveAs } from 'file-saver';
import { handleWebpackExternalForEdgeRuntime } from "next/dist/build/webpack/plugins/middleware-plugin";
const columns = [
  "#",
  "Tour Name",
  "Person",
  "Price",
  "Time",
  "Payment Status",
  "Travel Date",
  "Status",
  "Action",
];

function BookingReports() {
  const [bookings,setbookings] = useState([]);
const fetch = async()=>{
  const res =await GetBookingWithTourData();
  setbookings(res.data)
}
useEffect(()=>{
fetch()
},[])

const handleExportCSV = () => {
  const csvData = bookings.map((item, index) => ({
    '#': index + 1,
    'Tour Name': item.tour.name,
    'Person': `adult ${item.totalAdult},child ${item.totalChild},infant ${item.totalInfant}`,
    'Price': item.totalprice,
    'Time': item.departTime,
    'Payment Status': item.paymentStatus,
     'Travel Date':item.bookingDate,
    'Status': item.status?item.status:'pending',
  }));

  // Generate CSV file
  const headers = columns.map((column) => ({ label: column, key: column }));
  const csvReport = {
    data: csvData,
    headers: headers,
    filename: 'bookingReport.csv',
  };

  return <CSVLink {...csvReport}><button className=''>CSV Export</button></CSVLink>;
};
const handleExportCSVForSingleBooking = (data) => {
  const csvData = [1].map((item, index) => ({
    "#": index + 1,
    "Tour Name": data.tour.name,
    Person: `adult ${data.totalAdult},child ${data.totalChild},infant ${data.totalInfant}`,
    Price: data.totalPrice,
    Time: data.departTime,
    "Payment Status": data.paymentStatus,
    "Travel Date": data.bookingDate,
    Status: data.status ? data.status : "pending",
  }));

  const headers = Object.keys(csvData[0]).join(',');
  const rows = csvData.map((row) => 
    Object.values(row).map(value => `"${value}"`).join(',')
  ).join('\n');

  const csvContent = `${headers}\n${rows}`;

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  saveAs(blob, 'bookingReport.csv');
};

  return (
    <div className="rounded-lg mb-3">
      
      <div className="w-full flex items-end justify-end my-6">
      <ButtonGroup
            variant="contained"
            className="bg-[#FFA500] px-3 py-2 text-white"
            color="inherit"
          >
            {handleExportCSV()}
          </ButtonGroup>
          </div>
      <Grid container>
        <Grid item xs={12}>
          <div className="relative overflow-x-auto border rounded-md">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
              <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400 h-10">
                <tr>
                  {columns.map((item, index) => (
                    <th
                      scope="col"
                      key={index}
                      className="px-6 py-3  text-black"
                    >
                      {item}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {bookings.map(
                  (item, index) => (
                    <tr
                      key={item._id}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <td className="px-6 py-4 font-medium">{index + 1}</td>
                      <td className="px-6 py-4 font-medium">
                       {item.tour.name}
                      </td>
                      <td className="px-6 py-4 font-medium">
                        adult {item.totalAdult?item.totalAdult:0}, child {item.totalChild?item.totalChild:0},infant {item.totalInfant?item.totalInfant:0}
                      </td>
                      <td className="px-6 py-4 font-medium">${item.totalPrice}</td>
                      <td className="px-6 py-4 font-medium">{item.departTime}</td>
                      <td className="px-6 py-4 font-medium">{item.paymentStatus}</td>
                      <td className="px-6 py-4 font-medium">{item.bookingDate}</td>
                      <td className="px-6 py-4 font-medium">{item.status?item.status:'panding'}</td>
                      <td className="px-6 py-4 font-medium">
                        <div onClick={()=>handleExportCSVForSingleBooking(item)} className="text-[#1D1AC1] underline cursor-pointer">Download</div>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
          <div className="text-end pt-5 text-[#353535] font-semibold cursor-pointer select-none">
            View All
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default BookingReports;
