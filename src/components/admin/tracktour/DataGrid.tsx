import { Grid } from "@mui/material";
import { KababMenu } from "../../dashboard/dashboardComponents/CardItems";
import { hendleGetAllBookings, hendleGetAllTours, hendleGetTourLocation } from "@/src/redux/service/AdminApi";
import { useEffect, useState } from "react";

const columns = [
  "Id",
  "Tour Name",
  "Person",
  "Travel Date",
  "Status",
  "Action",
];

function DataGrid({ title }: { title: string }) {
const [AllBooking,setAllBooking] = useState([])
const [AllTours,setAllTours] = useState([]);
const [isLoading,setLoading] = useState(true);
  const fetchAllBooking = async()=>{
    const res =await hendleGetAllBookings();
    const res1 =await hendleGetAllTours();
    setAllBooking(res)
    setAllTours(res1)
  }
 useEffect(()=>{
fetchAllBooking()
if(AllBooking){
  setLoading(false)
}

},[])
if(isLoading){
  return 'Loading...'
}


  return (
    <div className="">
      <Grid container mb={3} spacing={3}>
      
        <Grid item xs={12}>
          <div className="relative overflow-x-auto border rounded-md">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-[#F6F7F8] dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  {columns.map((item, index) => (
                    <th scope="col" key={index} className="px-6 py-4 ">
                      {item}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {
                 AllBooking.length != 0 && AllBooking?.map((item,i)=>(
                    <tr key={item._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4 font-medium">{i+1}</td>
                  <td className="px-6 py-4 font-medium">{item.pickupLocation} To {hendleGetTourLocation(item.tour,AllTours)}</td>
                  <td className="px-6 py-4 font-medium">{item.totalAdult + item.totalAdult + item.totalInfant}</td>
                  <td className="px-6 py-4 font-medium">{item.bookingDate}</td>
                  <td className="px-6 py-4  font-medium">{item.status}</td>
                  <td className="px-6 py-4">
                    <div className=" text-[#353535] font-semibold cursor-pointer select-none">
                      Live Track
                    </div>
                  </td>
                </tr>
                  ))
                }
                
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
