import SearchInput from "@/src/components/dashboard/dashboardComponents/SearchInput";
import { AgentAvatarOne } from "@/src/utils/images/images";
import { Grid } from "@mui/material";
import Image from "next/image";
import React from "react";

const list = [
  {
    img: AgentAvatarOne,
    name: "Anil",
    message: "April fool’s day",
    date: "Today, 9.52pm",
    status: "1",
  },
  {
    img: AgentAvatarOne,
    name: "Chuuthiya",
    message: "Bhaag",
    date: "Today, 9.52pm",
    status: "1",
  },
  {
    img: AgentAvatarOne,
    name: "Mary ma’am",
    message: "You have to report it",
    date: "Today, 9.52pm",
    status: "1",
  },
  {
    img: AgentAvatarOne,
    name: "Bill Gates",
    message: "Nevermind bro",
    date: "Yesterday, 9.52pm",
    status: "1",
  },
  {
    img: AgentAvatarOne,
    name: "Anil",
    message: "April fool’s day",
    date: "Today, 9.52pm",
    status: "1",
  },
  {
    img: AgentAvatarOne,
    name: "Chuuthiya",
    message: "Bhaag",
    date: "Today, 9.52pm",
    status: "1",
  },
  {
    img: AgentAvatarOne,
    name: "Mary ma’am",
    message: "You have to report it",
    date: "Today, 9.52pm",
    status: "1",
  },
  {
    img: AgentAvatarOne,
    name: "Bill Gates",
    message: "Nevermind bro",
    date: "Yesterday, 9.52pm",
    status: "1",
  },
  {
    img: AgentAvatarOne,
    name: "Anil",
    message: "April fool’s day",
    date: "Today, 9.52pm",
    status: "1",
  },
  {
    img: AgentAvatarOne,
    name: "Chuuthiya",
    message: "Bhaag",
    date: "Today, 9.52pm",
    status: "1",
  },
  {
    img: AgentAvatarOne,
    name: "Mary ma’am",
    message: "You have to report it",
    date: "Today, 9.52pm",
    status: "1",
  },
  {
    img: AgentAvatarOne,
    name: "Bill Gates",
    message: "Nevermind bro",
    date: "Yesterday, 9.52pm",
    status: "1",
  },
];

function Chats() {
  return (
    <div>
      <Grid container className="border border-[#D0D5DD] rounded-lg mt-15">
        <Grid item xs={12} md={3.2} className="border-r-2">
          <div className="flex justify-between items-center gap-4 p-4">
            <h2 className="font-semibold text-lg pt-2">People</h2>
            <SearchInput className="w-32" />
          </div>

          <Grid container className="overflow-y-scroll scroll-auto h-[600px]">
            {list.map(({ img, name, message, date, status }, index) => (
              <Grid
                item
                xs={12}
                key={index}
                className={`${
                  list.length - 1 !== index && "border-b-2"
                } py-2 px-3 cursor-pointer`}
              >
                <div className="flex overflow-hidden gap-4 items-center">
                  <Image className="w-10" src={img} alt="" />
                  <div className="flex flex-col w-36">
                    <div className="font-semibold text-sm">{name}</div>
                    <div className="text-xs text-[#303030] font-light">
                      {message?.length > 10 ? message.substring(0, 10)+" ..." : message}
                    </div>
                  </div>
                  <div className="flex-col justify-end w-24">
                    <div className="text-xs text-end font-thin text-[9px]">
                      {date}
                    </div>
                    <div className="text-end">{status}</div>
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} md={8}></Grid>
      </Grid>
    </div>
  );
}

export default Chats;
