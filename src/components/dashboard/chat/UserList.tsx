import { GetConversaion } from "@/src/redux/service/AdminApi";
import { socket } from "@/src/redux/service/socket";
import { Grid } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { LiaCheckDoubleSolid } from "react-icons/lia";


function UserList({ index, getChat, selectedUser, item, list, admin, userLoggedIn }) {
  const [conversation, setConversation] = useState(null);

  const fetchConversation = async () => {
    if (item._id && userLoggedIn) {
      const conversationRes = await GetConversaion(item._id, userLoggedIn._id);
      if (conversationRes?.frontStatus) {
        setConversation(conversationRes.data);
      }
    }
  };

  useEffect(() => {
    fetchConversation();

    // Emit the conversation event to initiate the real-time connection
    socket.emit('conversation', { sender: userLoggedIn._id, recipient: item._id });

    // Listen for the 'update' event from the server and fetch the updated conversation
    const handleUpdate = () => {
      fetchConversation();
      setTimeout(() => {
        fetchConversation()
      }, 700);
    };
    socket.on('update', handleUpdate);

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
          <div className="font-semibold text-sm">{item?.name} {admin ? '(Admin)' : ''}</div>
          <div
            className={`text-xs font-light group-hover:text-white flex gap-1 items-center  ${
              item?._id === selectedUser?._id ? "text-white" : "text-[#303030]"
            }`}
          >
           {conversation && conversation.senderId === userLoggedIn?'':<LiaCheckDoubleSolid fontSize={15}/>} {conversation && conversation.lastmsg}
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
