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
  "Action",
];

function SupplierReports() {
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
                {[1, 2, 3, 4, 4, 1, 2, 3, 4, 4, 1, 2, 3, 4, 4].map(
                  (_, index) => (
                    <tr
                      key={index}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <td className="px-6 py-4 font-medium">232323</td>
                      <td className="px-6 py-4 font-medium">
                        Maldive To Lahore
                      </td>
                      <td className="px-6 py-4 font-medium">
                        adult 1, child 03
                      </td>
                      <td className="px-6 py-4 font-medium">$9093</td>
                      <td className="px-6 py-4 font-medium">10:00 Am</td>
                      <td className="px-6 py-4 font-medium">Confirm</td>
                      <td className="px-6 py-4 font-medium">10-2-2024</td>
                      <td className="px-6 py-4 font-medium">Confirm</td>
                      <td className="px-6 py-4 font-medium">
                        <div className="text-[#1D1AC1] underline">Download</div>
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

export default SupplierReports;
