import { Grid } from "@mui/material";
import { KababMenu } from "@/src/components/dashboard/dashboardComponents/CardItems";

const columns = [
  "ID",
  "Tour Name",
  "Person",
  "Price",
  "Time",
  "Payment Status",
  "Travel Date",
  "Status",
];

function RevenueReports({ data }) {
  return (
    <div className="border rounded-lg mb-3">
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
                {
                  (data !== null && 
                    data.tourBookings.length !== 0 ?
                    data.tourBookings.map((item, i) => (
                      <tr
                        key={item._id}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                      >
                        <td className="px-6 py-4 font-medium">{i+1 }</td>
                        <td className="px-6 py-4 font-medium">
                          {item.tour_name}
                        </td>
                        <td className="px-6 py-4 font-medium">
                          adult {item.totalAdult}, child {item.totalChild},infant {item.totalInfant}
                        </td>
                        <td className="px-6 py-4 font-medium">${item.totalPrice}</td>
                        <td className="px-6 py-4 font-medium">{item.departTime}</td>
                        <td className="px-6 py-4 font-medium">{item.paymentStatus}</td>
                        <td className="px-6 py-4 font-medium">{item.bookingDate}</td>
                        <td className="px-6 py-4 font-medium">{item.status}</td>
                        {/* <td className="px-6 py-4 font-medium">
                          <div className="text-[#1D1AC1] underline">
                            Download
                          </div>
                        </td> */}
                      </tr>
                    )):<div className="flex items-start p-4 text-sm justify-center w-full">Bookings not found</div>)
                }
              </tbody>
            </table>
          </div>
          {/* {data != null && data.tourBookings.length > 10 && (
            <div className="text-end pt-5 text-[#353535] font-semibold cursor-pointer select-none">
              View All
            </div>
          )} */}
        </Grid>
      </Grid>
    </div>
  );
}

export default RevenueReports;
