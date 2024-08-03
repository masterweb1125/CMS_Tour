import { Grid } from "@mui/material";
import Image from "next/image";
import React from "react";

function UserList({ index, getChat, selectedUser, item, list }) {
  return (
    <Grid
      item
      xs={12}
      key={item?._id}
      className={`px-3 flex items-center cursor-pointer h-[70px] hover:bg-[#ffa500] hover:text-white hover:rounded-xl
          transition-all group ${
            item?._id === selectedUser?._id
              ? "bg-[#ffa500] text-white rounded-xl p-2"
              : ""
          }
    `}
      onClick={() => getChat(item)}
    >
      <div className={`flex overflow-hidden gap-4 items-center select-none`}>
        <Image className="w-12 rounded-full" width={100} height={100} src={item?.profile_image} alt={item?.name} />
        <div className="flex flex-col w-36">
          <div className="font-semibold text-sm">{item?.name}</div>
          <div
            className={`text-xs font-light group-hover:text-white ${
              item?._id === selectedUser?._id ? "text-white" : "text-[#303030]"
            } }`}
          >
            message{" "}
            {/* {message?.length > 18 ? message.substring(0, 18) + " ..." : message} */}
          </div>
        </div>
        <div className="flex-col justify-end w-28">
          <div className="text-xs text-end font-extralight text-[9px]">
            {"date"}
          </div>
          <div className="text-end">offline</div>
        </div>
      </div>
    </Grid>
  );
}

export default UserList;
