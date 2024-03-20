import { Grid } from "@mui/material";
import Image from "next/image";
import React from "react";

function UserList({
  index,
  getChat,
  selectedUser,
  item,
  list,
}: {
  index: number;
  getChat: any;
  selectedUser: any;
  list: any;
  item: any;
}) {
  const { id, img, name, message, date, status } = item;
  return (
    <Grid
      item
      xs={12}
      key={index}
      className={`${
        list.length - 1 !== index && "border-b-2"
      } py-3 px-3 cursor-pointer hover:bg-[#ffa500] hover:text-white hover:rounded-xl
          transition-all group ${
      id === selectedUser?.id
        ? "bg-[#ffa500] text-white rounded-xl p-2"
        : ""
    }
    `}
      onClick={() => getChat(id)}
    >
      <div className={`flex overflow-hidden gap-4 items-center select-none`}>
        <Image className="w-10" src={img} alt="" />
        <div className="flex flex-col w-36">
          <div className="font-semibold text-sm">{name}</div>
          <div
            className={`text-xs font-light group-hover:text-white ${
              id === selectedUser?.id ? "text-white" : "text-[#303030]"
            } }`}
          >
            {message?.length > 18 ? message.substring(0, 18) + " ..." : message}
          </div>
        </div>
        <div className="flex-col justify-end w-28">
          <div className="text-xs text-end font-extralight text-[9px]">
            {date}
          </div>
          <div className="text-end">{status}</div>
        </div>
      </div>
    </Grid>
  );
}

export default UserList;
