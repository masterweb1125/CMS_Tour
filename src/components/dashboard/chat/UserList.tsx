import { GetConversaion } from "@/src/redux/service/AdminApi";
import { socket } from "@/src/redux/service/socket";
import { Grid } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { LiaCheckDoubleSolid } from "react-icons/lia";

function UserList({
  index,
  getChat,
  selectedUser,
  item,
  list,
  admin,
  userLoggedIn,
}) {
  const [conversation, setConversation] = useState(null);
  function formatDateTime(dateString) {
    const inputDate = new Date(dateString);
    const currentDate = new Date();

    function formatDateTime(dateString) {
      const inputDate = new Date(dateString);
      const currentDate = new Date();

      // Check if the input date is today
      const isToday =
        inputDate.getDate() === currentDate.getDate() &&
        inputDate.getMonth() === currentDate.getMonth() &&
        inputDate.getFullYear() === currentDate.getFullYear();

      if (isToday) {
        // Get hours in 12-hour format
        let hours = inputDate.getHours();
        const minutes = String(inputDate.getMinutes()).padStart(2, "0");
        const seconds = String(inputDate.getSeconds()).padStart(2, "0");
        const ampm = hours >= 12 ? "pm" : "am";

        // Convert hours from 24-hour format to 12-hour format
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'

        // Format hours to be two digits
        const formattedHours = String(hours).padStart(2, "0");

        return `${formattedHours}:${minutes}:${seconds} ${ampm}`;
      } else {
        // Return date in dd/mm/yyyy format if the date is not today
        const day = String(inputDate.getDate()).padStart(2, "0");
        const month = String(inputDate.getMonth() + 1).padStart(2, "0"); // Months are 0-based
        const year = inputDate.getFullYear();
        return `${day}/${month}/${year}`;
      }
    }

    const isToday =
      inputDate.getDate() === currentDate.getDate() &&
      inputDate.getMonth() === currentDate.getMonth() &&
      inputDate.getFullYear() === currentDate.getFullYear();

    if (isToday) {
      // Return time in hh:mm:ss format if the date is today
      const hours = String(inputDate.getHours()).padStart(2, "0");
      const minutes = String(inputDate.getMinutes()).padStart(2, "0");
      const seconds = String(inputDate.getSeconds()).padStart(2, "0");
      const ampm = hours >= 12 ? "pm" : "am";
      return `${hours}:${minutes}:${ampm}`;
    } else {
      // Return date in dd/mm/yyyy format if the date is not today
      const day = String(inputDate.getDate()).padStart(2, "0");
      const month = String(inputDate.getMonth() + 1).padStart(2, "0"); // Months are 0-based
      const year = inputDate.getFullYear();
      return `${day}/${month}/${year}`;
    }
  }

  const fetchConversation = async () => {
    if (item._id && userLoggedIn) {
      const conversationRes = await GetConversaion(item._id, userLoggedIn._id);
      if (conversationRes?.frontStatus) {
        setConversation(conversationRes.data);
      }
    }
  };
  function truncateString(str, num) {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + "...";
  }
  useEffect(() => {
    fetchConversation();

    // Emit the conversation event to initiate the real-time connection
    socket.emit("conversation", {
      sender: userLoggedIn._id,
      recipient: item._id,
    });

    // Listen for the 'update' event from the server and fetch the updated conversation
    const handleUpdate = () => {
      fetchConversation();
      setTimeout(() => {
        fetchConversation();
      }, 700);
    };
    socket.on("update", handleUpdate);

    // Cleanup function to remove the event listener
    // return () => {
    //   socket.off('update', handleUpdate);
    // };
  }, [item._id, userLoggedIn]);

  return (
    <Grid
      item
      xs={12}
      key={item?._id}
      className={`px-3 flex py-2 items-center cursor-pointer h-[70px] hover:bg-[#ffa500] hover:text-white hover:rounded-xl
          transition-all group ${
            item?._id === selectedUser?._id
              ? "bg-[#ffa500] text-white rounded-xl p-2"
              : ""
          }
    `}
      onClick={() => getChat(item)}
    >
      <div className={`flex overflow-hidden gap-4 items-center select-none`}>
        <Image
          className="w-12 rounded-full"
          width={100}
          height={100}
          src={item?.profile_image}
          alt={item?.name}
        />
        <div className="flex flex-col w-36">
          <div className="font-semibold text-nowrap text-sm">
            {item?.name} {admin ? "(Admin)" : ""}
          </div>
          <div
            className={`text-xs font-normal tracking-widest group-hover:text-white flex gap-1 items-center  ${
              item?._id === selectedUser?._id ? "text-white" : "text-[#303030]"
            }`}
          >
            {conversation && conversation.senderId === userLoggedIn ? (
              ""
            ) : (
              <LiaCheckDoubleSolid fontSize={15} />
            )}
            <p className="text-nowrap">
              {conversation && truncateString(conversation?.lastmsg, 8)}
            </p>
          </div>
        </div>
        <div className="flex  h-[30px] justify-end text-sx font-normal tracking-widest text-[9px]  w-28">
          {/* <div className="text-xs text-start justify-start font-normal tracking-widest text-[9px]"> */}
          {conversation && formatDateTime(conversation.updatedAt)}
          {/* </div> */}
          {/* <div className="text-end">offline</div> */}
        </div>
      </div>
    </Grid>
  );
}

export default UserList;
