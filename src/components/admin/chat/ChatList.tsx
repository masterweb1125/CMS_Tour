import { Grid } from "@mui/material";

export default function ChatList({
  columns,
  onOpenChat,
}: {
  columns: any;
  onOpenChat: any;
}) {
  return (
    <div className="">
      <Grid container mb={3} spacing={3}>
        <Grid item xs={12}>
          <div className="relative overflow-x-auto border rounded-md">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-[#F6F7F8] dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  {columns.map((item: any, index: number) => (
                    <th scope="col" key={index} className="px-6 py-4 ">
                      {item}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].map((v, i) => (
                  <tr key={i} className="bg-white border-b text-[#888888] dark:bg-gray-800 dark:border-gray-700">
                    <td className="px-6 py-4 font-medium">{i + 1}</td>
                    <td className="px-6 py-4 font-medium">Agency</td>
                    <td className="px-6 py-4 font-medium">10-2-2024</td>
                    <td className="px-6 py-4">
                      <div onClick={onOpenChat} className="cursor-pointer select-none underline font-medium">
                        View Chat
                      </div>
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
