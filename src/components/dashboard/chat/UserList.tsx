import { GetConversaion, SortedMessages } from "@/src/redux/service/AdminApi";
import { socket } from "@/src/redux/service/socket";
import { Grid } from "@mui/material";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { LiaCheckDoubleSolid } from "react-icons/lia";
import { useSelector } from "react-redux";
import debounce from 'lodash/debounce';

function UserList({ index, getChat, selectedUser, item, list, admin }) {
  const [conversation, setConversation] = useState(null);
  const [msg, setMsg] = useState([]);
  const userLoggedIn = useSelector((state) => state?.User?.UserInfo);

  const fetchMessages = useCallback(async () => {
    if (item && userLoggedIn) {
      try {
        const sendermsg = await SortedMessages(item._id, userLoggedIn._id);
        if (sendermsg.messages) {
          const sortedMessages = sendermsg.messages.sort(
            (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
          );
          setMsg(sortedMessages);
        }
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    }
  }, [item, userLoggedIn]);

  const fetchConversation = useCallback(async () => {
    if (item._id && userLoggedIn) {
      try {
        const conversationRes = await GetConversaion(item._id, userLoggedIn._id);
        if (conversationRes?.frontStatus) {
          setConversation(conversationRes.data);
        }
      } catch (error) {
        console.error('Error fetching conversation:', error);
      }
    }
  }, [item._id, userLoggedIn]);

  const handleUpdate = useCallback(debounce(() => {
    fetchMessages();
    fetchConversation();
  }, 700), [fetchMessages, fetchConversation]);

  useEffect(() => {
    fetchMessages();
    fetchConversation();
    socket.emit("conversation", {
      sender: userLoggedIn._id,
      recipient: item._id,
    });

    socket.on("update", handleUpdate);

    // Cleanup function to remove the socket listener
    return () => {
      socket.off("update", handleUpdate);
    };
  }, [item._id, userLoggedIn, handleUpdate]);

  function formatDateTime(dateString) {
    const inputDate = new Date(dateString);
    const currentDate = new Date();
    const isToday =
      inputDate.getDate() === currentDate.getDate() &&
      inputDate.getMonth() === currentDate.getMonth() &&
      inputDate.getFullYear() === currentDate.getFullYear();

    if (isToday) {
      let hours = inputDate.getHours();
      const minutes = String(inputDate.getMinutes()).padStart(2, "0");
      const ampm = hours >= 12 ? "pm" : "am";

      hours = hours % 12;
      hours = hours ? hours : 12;

      return `${String(hours).padStart(2, "0")}:${minutes} ${ampm}`;
    } else {
      const day = String(inputDate.getDate()).padStart(2, "0");
      const month = String(inputDate.getMonth() + 1).padStart(2, "0");
      const year = inputDate.getFullYear();
      return `${day}/${month}/${year}`;
    }
  }

  function truncateString(str, num) {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + "...";
  }

  return (
    <Grid
      item
      xs={12}
      key={item?._id}
      className={`px-3 flex py-2 items-center cursor-pointer h-[70px] relative hover:bg-[#CDC7C7] border-b-2 border-[#CDC7C7]
        transition-all group ${
          item?._id === selectedUser?._id ? "bg-[#CDC7C7] p-2" : ""
        }
    `}
      onClick={() => getChat(item)}
    >
      <div className="flex overflow-hidden gap-4 items-center select-none">
        <Image
          className="w-12 rounded-full"
          width={100}
          height={100}
          src={item?.profile_image}
          alt={item?.name}
        />
        <div className="flex flex-col gap-1 w-36">
          <div className="font-semibold text-nowrap text-sm">
            {item?.name} {admin ? "(Admin)" : ""}
          </div>
          <div className="text-xs font-normal tracking-widest flex gap-1 items-center">
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
        <div className="flex h-[40px] justify-end text-sx font-normal relative tracking-widest text-[9px] w-28">
          {conversation && formatDateTime(conversation.updatedAt)}
          {msg.filter((item) => item.sender !== userLoggedIn._id && item.status !== 3).length !== 0 && (
            <p className="bg-[#F24E1E] absolute bottom-[-3px] text-[8px] right-0 text-white font-bold p-[0.625rem]  rounded-full w-5 h-5 flex items-center justify-center">
              {msg.filter((item) => item.sender !== userLoggedIn._id && item.status !== 3).length}
            </p>
          )}
        </div>
      </div>
    </Grid>
  );
}

export default UserList;
