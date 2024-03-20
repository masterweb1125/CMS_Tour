import { CardTourImage2 } from "@/src/utils/images/images";
import { Grid } from "@mui/material";
import Image from "next/image";

const columns = ["Tour", "Tour Name", "Earnings", "Action"];

function DataGrid({ title }: { title: string }) {
  return (
    <div className="border rounded-lg mb-3">
      <Grid container mb={3} spacing={3} px={3} mt={1}>
        <Grid item xs={12} md={12}>
          <h1 className="text-xl font-semibold">{title}</h1>
        </Grid>

        {/* <Grid item xs={12} md={3}>
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
        </Grid> */}

        <Grid item xs={12}>
          <div className="relative overflow-x-auto border rounded-md">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  {columns.map((item, index) => (
                    <th scope="col" key={index} className="px-6 py-3  text-black">
                      {item}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4 font-medium">
                    <Image src={CardTourImage2} alt="" className="w-10" />
                  </td>
                  <td className="px-6 py-4 font-medium">Maldive To Lahore</td>
                  <td className="px-6 py-4 font-medium">$9028K</td>
                  <td className="px-6 py-4 font-medium">view</td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4 font-medium">
                    <Image src={CardTourImage2} alt="" className="w-10" />
                  </td>
                  <td className="px-6 py-4 font-medium">Maldive To Lahore</td>
                  <td className="px-6 py-4 font-medium">$9028K</td>
                  <td className="px-6 py-4 font-medium">view</td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4 font-medium">
                    <Image src={CardTourImage2} alt="" className="w-10" />
                  </td>
                  <td className="px-6 py-4 font-medium">Maldive To Lahore</td>
                  <td className="px-6 py-4 font-medium">$9028K</td>
                  <td className="px-6 py-4 font-medium">view</td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4 font-medium">
                    <Image src={CardTourImage2} alt="" className="w-10" />
                  </td>
                  <td className="px-6 py-4 font-medium">Maldive To Lahore</td>
                  <td className="px-6 py-4 font-medium">$9028K</td>
                  <td className="px-6 py-4 font-medium">view</td>
                </tr>
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

export default DataGrid;
