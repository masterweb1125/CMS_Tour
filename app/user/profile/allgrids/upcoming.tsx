import { KababMenu } from "@/src/components/dashboard/dashboardComponents/CardItems";
import { CartTourImage, GroupAvatarImage } from "@/src/utils/images/images";
import { Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/Link";

const columns = [
  "Tour image",
  "ID",
  "Tour Name",
  "Travelers",
  "Travel Date",
  "Payment Status",
  "Download",
  "Action",
];

const StatusTag: any = {
  1: <span className="text-[#0038FF]">Confirm</span>,
  2: <span className="text-[#1AC167]">Pending</span>,
  3: <span className="text-[#FF6161]">Decline</span>,
};

export default function UpcomingBooking() {
  return (
    <div className="">
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
                {[1, 2, 3, 2, 3, 1, 2, 3, 2, 3, 1, 2, 3].map((v, index) => (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <td className="px-6 py-4 font-medium">
                      <Image src={CartTourImage} alt="" className="w-10" />
                    </td>
                    <td className="px-6 py-4 font-medium">232323</td>
                    <td className="px-6 py-4 font-medium">Maldive To Lahore</td>
                    <td className="px-6 py-4 font-medium flex gap-1 pt-7">
                      <Image src={GroupAvatarImage} alt="" className="w-10" />
                      <span className="font-semibold">+12</span>
                    </td>
                    <td className="px-6 py-4 font-medium">10-2-2024</td>
                    <td className="px-6 py-4 font-medium">{StatusTag[v]}</td>
                    <td className="px-6 py-4 font-medium">
                      <Link href="" className={"text-[#FFB733] underline "}>
                        Download
                      </Link>
                    </td>
                    <td className="px-6 py-4 font-medium">
                      <KababMenu />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
