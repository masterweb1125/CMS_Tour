"use client";
import ChatHeader from "@/src/components/dashboard/chat/ChatHeader";
import ChatMessage from "@/src/components/dashboard/chat/ChatMessage";
import UserList from "@/src/components/dashboard/chat/UserList";
import SearchInput from "@/src/components/dashboard/dashboardComponents/SearchInput";
import { GetAdmins, sendMessage, SortedMessages } from "@/src/redux/service/AdminApi";
import { socket } from "@/src/redux/service/socket";
import { AgentAvatarOne, AgentAvatarTwo } from "@/src/utils/images/images";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const list = [
  {
    id: 1,
    img: AgentAvatarOne,
    name: "Anil",
    message: "April fool’s day",
    date: "Today, 9.52pm",
    status: "1",
  },
  {
    id: 2,
    img: AgentAvatarTwo,
    name: "Chuuthiya",
    message: "Bhaag",
    date: "Today, 9.52pm",
    status: "1",
  },
  {
    id: 3,
    img: AgentAvatarOne,
    name: "Mary ma’am",
    message: "You have to report it",
    date: "Today, 9.52pm",
    status: "1",
  },
  {
    id: 4,
    img: AgentAvatarTwo,
    name: "Bill Gates",
    message: "Nevermind bro",
    date: "Yesterday, 9.52pm",
    status: "1",
  },
  {
    id: 5,
    img: AgentAvatarOne,
    name: "Anil",
    message: "April fool’s day",
    date: "Today, 9.52pm",
    status: "1",
  },
  {
    id: 6,
    img: AgentAvatarTwo,
    name: "Chuuthiya",
    message: "Bhaag",
    date: "Today, 9.52pm",
    status: "1",
  },
  {
    id: 7,
    img: AgentAvatarOne,
    name: "Mary ma’am",
    message: "You have to report it",
    date: "Today, 9.52pm",
    status: "1",
  },
  {
    id: 8,
    img: AgentAvatarTwo,
    name: "Bill Gates",
    message: "Nevermind bro",
    date: "Yesterday, 9.52pm",
    status: "1",
  },
  {
    id: 9,
    img: AgentAvatarOne,
    name: "Anil",
    message: "April fool’s day",
    date: "Today, 9.52pm",
    status: "1",
  },
  {
    id: 10,
    img: AgentAvatarTwo,
    name: "Chuuthiya",
    message: "Bhaag",
    date: "Today, 9.52pm",
    status: "1",
  },
  {
    id: 11,
    img: AgentAvatarOne,
    name: "Mary ma’am",
    message: "You have to report it",
    date: "Today, 9.52pm",
    status: "1",
  },
  {
    id: 12,
    img: AgentAvatarTwo,
    name: "Bill Gates",
    message: "Nevermind bro",
    date: "Yesterday, 9.52pm",
    status: "1",
  },
];

const chats = [
  {
    recevie: "1",
    sender: "",
    message: "Hello",
  },
  {
    recevie: "",
    sender: "",
    message: "Hi",
  },
  {
    recevie: "1",
    sender: "",
    message: "How are you doing",
  },
  {
    recevie: "",
    sender: "",
    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever ",
  },
  {
    recevie: "1",
    sender: "",
    message: "Hello",
  },
  {
    recevie: "",
    sender: "",
    message: "Hi",
  },
  {
    recevie: "1",
    sender: "",
    message: "How are you doing",
  },
  {
    recevie: "",
    sender: "",
    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever ",
  },
];

function Chats() {
  const userLoggedIn = useSelector((state) => state?.User?.UserInfo);
  const [onlineUser,setonlineUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [admin, setadmin] = useState([]);
  const [senderChat, setSenderChat] = useState([]);
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [changeScreen, setChangeScreen] = useState(false);
  const theme = useTheme();
  const smallScreen: any = useMediaQuery(theme.breakpoints.down("md"));
  const [currentUserStatus,setcurrentUserStatus]=useState(false)
  const getChat = (data) => {
    try {
      if (smallScreen) {
        setChangeScreen(true);
      }
      setLoading(true);
      // let user = list.find((v) => v.id === _id);
      setSelectedUser(data);
    } catch (e: any) {
      console.log(e.message);
    }
  };

  const fetch = async () => {
    const res = await GetAdmins();
    if (res.status) {
      setadmin(res.data);
    }
  };
  useEffect(() => {
    fetch();
    if (!smallScreen) setChangeScreen(false);
    if (smallScreen && selectedUser) setChangeScreen(true);
  }, [smallScreen, selectedUser]);

  const backScreen = () => {
    try {
      setSelectedUser(null);
      setChangeScreen(false);
    } catch (e: any) {
      console.log(e.message);
    }
  };
  const fetchMessages = useCallback(async () => {
    if (selectedUser && userLoggedIn) {
      const sendermsg = await SortedMessages(
        selectedUser?._id,
        userLoggedIn._id
      );
      // Sort messages by createdAt in ascending order
      const sortedMessages = sendermsg.messages.sort(
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
      );
      setSenderChat(sortedMessages);
    }
  }, [selectedUser, userLoggedIn]);


 const hendleUpdateMessages = async ()=>{
      fetchMessages()
      setTimeout(() => {
        fetchMessages()
      }, 700);
    }
  useEffect(() => {
    fetchMessages();
    socket.on('update',hendleUpdateMessages);
  }, [selectedUser]);


  const handleSendMessage = async ({lastmsg})=>{
      if (selectedUser === null){
        return toast.error('user not selected')
      }
  
      const res = await sendMessage({ sender:userLoggedIn._id,recipient:selectedUser._id, lastmsgstatus:4, lastmsg:lastmsg, lastmsgside:userLoggedIn._id,recipient:selectedUser._id})
      // console.log(res)
      if(!res?.status){
        toast.error('some thing want wrong');
      }
   
  }
  useEffect(()=>{
    
    socket.emit('userStatus',userLoggedIn)
  },[])

useEffect(()=>{

  socket.on('status',(user)=>{
    setonlineUser(user);
    console.log(user)
  })
})

  return (
    <div>
      <Toaster/>
      <Grid
        container
        className="border border-[#D0D5DD] flex flex-col rounded-lg h-[96vh]"
      >
        <Grid item xs={12} md={3.2} className="border-r-2 " >
          {changeScreen ? (
            <div className="py-3 px-3">
              <BackBtn onClick={backScreen} />
              <br />
              <ChatHeader onlineUsers= {onlineUser} selectedUser={selectedUser} />
              <ChatMessage userLoggedIn={userLoggedIn} handleSendMessage={handleSendMessage} setSenderChat={setSenderChat} senderChat={senderChat} selectedUser={selectedUser}  chats={chats} />
            </div>
          ) : (
            <Grid  className="overflow-y-scroll px-2 scroll-smooth h-full style-4">
              <Grid className="">
                <div className="flex justify-between  gap-4 p-4">
                  <h2 className="font-semibold text-lg pt-2">People</h2>
                  <SearchInput className="w-32" />
                </div>
              </Grid>

              {admin.map((item, index) => (
                <UserList
                  key={index}
                  item={item}
                  admin={true}
                  index={index}
                  getChat={getChat}
                  selectedUser={selectedUser}
                  list={admin}
                  userLoggedIn={userLoggedIn}
                />
              ))}
            </Grid>
          )}
        </Grid>
        <Grid item xs={12} md={8.8} className="hidden md:block">
          <div
            className={`px-5 pt-4 ${
              !selectedUser && "flex items-center justify-center w-full h-full"
            }`}
          >
            {!selectedUser && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={400}
                height={400}
                data-name="Layer 1"
                viewBox="0 0 255 250"
              >
                <g style={{ isolation: "isolate" }}>
                  <polygon
                    fill="#FFA500"
                    points="104.94 216.38 113.11 222.19 115.74 204.36 107.57 198.55 104.94 216.38"
                  />
                  <path
                    fill="#FFA500"
                    d="M140.71,101.28a8.19,8.19,0,0,1,.82-.13c.33,0,.66-.06,1-.07l.66,0a9.41,9.41,0,0,1,1.05.13l.21,0a8.46,8.46,0,0,1,1,.26l.07,0a9.1,9.1,0,0,1,1.25.51l0,0a8.79,8.79,0,0,1,1.18.71L139.81,97a10,10,0,0,0-1.18-.71l0,0a9.1,9.1,0,0,0-1.25-.51l0,0h0a8.46,8.46,0,0,0-1-.26l-.22,0a9,9,0,0,0-1-.13H135l-.61,0c-.32,0-.65,0-1,.07h-.07q-.37,0-.75.12h0q-.35.08-.69.18l-.07,0a7.6,7.6,0,0,0-1,.36L34.25,137.23c-.14.05-.27.12-.41.18s-.56.29-.83.46l-.1.06a6.34,6.34,0,0,0-.6.41l-.28.22-.34.29c-.23.2-.44.41-.65.62l-.27.29a10.63,10.63,0,0,0-.77,1s0,0,0,.06a9.62,9.62,0,0,0-.59,1c-.06.12-.11.25-.17.37-.12.27-.22.55-.32.83s-.09.28-.13.43a7.89,7.89,0,0,0-.21.87c0,.13-.05.26-.07.4a9.37,9.37,0,0,0-.11,1.3l-.55,72.37a9.26,9.26,0,0,0,3.89,7.68l8.18,5.81a9.24,9.24,0,0,1-3.9-7.68l.55-72.37a9.37,9.37,0,0,1,.11-1.3c0-.14,0-.27.07-.4a8.67,8.67,0,0,1,.21-.88c0-.14.08-.28.13-.42.1-.29.21-.56.32-.83.06-.12.11-.25.17-.37a9.15,9.15,0,0,1,.6-1l0-.05a9.38,9.38,0,0,1,.78-1l.26-.28c.21-.21.42-.42.65-.62l.34-.29c.29-.22.58-.44.88-.63l.1-.07a11.17,11.17,0,0,1,1.24-.64l96.47-41.18c.34-.14.67-.25,1-.36l.76-.2Z"
                  />
                  <path
                    fill="#FFA500"
                    d="M142.51,101.08a9.27,9.27,0,0,1,9.37,9.4l-.55,72.37a9.71,9.71,0,0,1-5.9,8.83l-32.32,30.51,2.63-17.83L49,232.86a9.29,9.29,0,0,1-13-8.62l.55-72.37A9.72,9.72,0,0,1,42.42,143l96.47-41.18A9.69,9.69,0,0,1,142.51,101.08Z"
                  />
                  <path
                    fill="#000"
                    d="M45.24,234.64a10.36,10.36,0,0,1-7.25-3,10.25,10.25,0,0,1-3-7.4l.55-72.37a10.7,10.7,0,0,1,6.5-9.75l96.47-41.17a10.38,10.38,0,0,1,4-.86h0a10.39,10.39,0,0,1,7.37,3,10.25,10.25,0,0,1,3,7.4l-.55,72.36a10.7,10.7,0,0,1-6.34,9.68L113.8,222.92a1,1,0,0,1-1.68-.87L114.49,206l-65.13,27.8a10.38,10.38,0,0,1-4,.85Zm97.29-132.56a8.58,8.58,0,0,0-3.25.69L42.82,144a8.69,8.69,0,0,0-5.29,7.93L37,224.24a8.23,8.23,0,0,0,2.42,6,8.13,8.13,0,0,0,5.93,2.42,8.38,8.38,0,0,0,3.24-.69l66.77-28.5a1,1,0,0,1,1,.13,1,1,0,0,1,.38.93l-2.21,15L144.75,191a.84.84,0,0,1,.29-.2,8.69,8.69,0,0,0,5.29-7.92l.55-72.37a8.28,8.28,0,0,0-8.35-8.39Z"
                  />
                  <path
                    fill="#000"
                    d="M63.13,180.62c0,3.7,2.6,5.2,5.8,3.35a12.81,12.81,0,0,0,5.8-10.05c0-3.7-2.59-5.21-5.8-3.35A12.84,12.84,0,0,0,63.13,180.62Z"
                  />
                  <path
                    fill="#000"
                    d="M88.13,171.79c0,3.7,2.59,5.2,5.8,3.35a12.84,12.84,0,0,0,5.8-10c0-3.7-2.6-5.2-5.8-3.35A12.81,12.81,0,0,0,88.13,171.79Z"
                  />
                  <path
                    fill="#000"
                    d="M113.12,163c0,3.71,2.6,5.21,5.81,3.36a12.84,12.84,0,0,0,5.8-10c0-3.71-2.6-5.21-5.8-3.35A12.82,12.82,0,0,0,113.12,163Z"
                  />
                </g>
                <g style={{ isolation: "isolate" }}>
                  <polygon
                    fill="#FFA500"
                    points="179.25 136.48 187.42 142.28 190.05 124.45 181.88 118.64 179.25 136.48"
                  />
                  <path
                    fill="#FFA500"
                    d="M215,21.37a7.58,7.58,0,0,1,.81-.13c.33,0,.66-.06,1-.07l.65,0a9.12,9.12,0,0,1,1.05.13l.22,0a8.8,8.8,0,0,1,1,.26l.08,0a9.51,9.51,0,0,1,1.24.51l0,0a10.85,10.85,0,0,1,1.18.71l-8.18-5.81a9.84,9.84,0,0,0-1.17-.71l0,0a9.51,9.51,0,0,0-1.24-.51l0,0h0c-.33-.1-.67-.19-1-.26l-.21,0c-.35-.06-.69-.1-1.05-.13h-.05c-.2,0-.4,0-.6,0a8.22,8.22,0,0,0-1,.06h-.07l-.75.12,0,0a5.78,5.78,0,0,0-.69.17l-.08,0a10.18,10.18,0,0,0-1,.36L108.57,57.32l-.42.18c-.28.14-.56.29-.83.46l-.1.06c-.2.13-.41.27-.6.41a3,3,0,0,0-.27.23c-.12.09-.24.18-.35.28s-.44.41-.64.63a3.57,3.57,0,0,0-.27.28,10.73,10.73,0,0,0-.78,1l0,.06a8.94,8.94,0,0,0-.6,1.05c-.06.12-.11.24-.16.36-.12.27-.23.55-.33.83s-.09.28-.13.43-.15.58-.2.87c0,.14-.06.27-.08.4a11.21,11.21,0,0,0-.11,1.3l-.55,72.37a9.25,9.25,0,0,0,3.9,7.68l8.17,5.81a9.23,9.23,0,0,1-3.89-7.68L110.84,72a11.21,11.21,0,0,1,.11-1.3c0-.14,0-.27.08-.4a7.88,7.88,0,0,1,.2-.87c0-.15.09-.29.13-.43s.21-.56.33-.83c0-.12.1-.25.16-.37a10.93,10.93,0,0,1,.6-1.05l0,0a10.73,10.73,0,0,1,.78-1c.08-.1.18-.19.27-.29s.42-.42.64-.62l.35-.29a9.34,9.34,0,0,1,.88-.63l.09-.06a9.24,9.24,0,0,1,1.25-.65L213.2,22a10.27,10.27,0,0,1,1-.37l.77-.2Z"
                  />
                  <path
                    fill="#FFA500"
                    d="M216.83,21.17a9.28,9.28,0,0,1,9.36,9.4l-.55,72.37a9.72,9.72,0,0,1-5.89,8.83l-32.33,30.51,2.63-17.83L123.28,153a9.52,9.52,0,0,1-3.62.78,9.27,9.27,0,0,1-9.36-9.4L110.84,72a9.73,9.73,0,0,1,5.9-8.84L213.2,22A9.53,9.53,0,0,1,216.83,21.17Z"
                  />
                  <path
                    fill="#000"
                    d="M119.56,154.73a10.32,10.32,0,0,1-7.26-3,10.2,10.2,0,0,1-3-7.4L109.84,72a10.71,10.71,0,0,1,6.5-9.75L212.81,21a10.58,10.58,0,0,1,4-.86h0a10.28,10.28,0,0,1,10.37,10.41L226.64,103a10.69,10.69,0,0,1-6.33,9.67L188.11,143a1,1,0,0,1-1.68-.87l2.37-16.07-65.13,27.8a10.57,10.57,0,0,1-4,.86ZM216.84,22.17a8.58,8.58,0,0,0-3.24.7L117.13,64A8.69,8.69,0,0,0,111.84,72l-.54,72.36a8.26,8.26,0,0,0,8.34,8.4,8.59,8.59,0,0,0,3.25-.7l66.77-28.5a1,1,0,0,1,1,.13,1,1,0,0,1,.38.93l-2.21,15,30.23-28.53a1,1,0,0,1,.29-.19,8.72,8.72,0,0,0,5.29-7.93l.55-72.37a8.26,8.26,0,0,0-8.35-8.39Z"
                  />
                  <path
                    fill="#000"
                    d="M141.6,99.62c0,3.71,2.6,5.21,5.8,3.36a12.81,12.81,0,0,0,5.8-10c0-3.71-2.59-5.21-5.8-3.35A12.83,12.83,0,0,0,141.6,99.62Z"
                  />
                  <path
                    fill="#000"
                    d="M166.6,90.8c0,3.7,2.59,5.2,5.8,3.35a12.84,12.84,0,0,0,5.8-10.05c0-3.7-2.6-5.2-5.8-3.35A12.81,12.81,0,0,0,166.6,90.8Z"
                  />
                  <path
                    fill="#000"
                    d="M191.59,82c0,3.7,2.6,5.21,5.81,3.36a12.85,12.85,0,0,0,5.8-10.06c0-3.7-2.6-5.2-5.8-3.35A12.83,12.83,0,0,0,191.59,82Z"
                  />
                </g>
                <path
                  fill="#ffacac"
                  d="M199.61,118.77l-4.63.77c1.36-3.75-.57-4.26-.57-4.26l1.93-3.24Z"
                />
                <path
                  fill="#ffacac"
                  d="M182.45,111.45c1.58,2.06,6.18,5.15,11.4,8.2,2.38,1.39,1.08,5.67-2.06,5.16s-12.11-11.2-12.11-11.2A2.47,2.47,0,0,1,182.45,111.45Z"
                />
                <path
                  fill="#ffacac"
                  d="M176.45,105.36c1.51.85,1.38-.33,1.94-.39a7.48,7.48,0,0,1,3.13,1.51c.37.49-.29,3.08,1.17,5.35.27.41-2.76,2.06-2.76,2.06a34.07,34.07,0,0,1-3.85-3.48c-.6-.88-2.28-1.29-1.75-1.56s1.89.21,2.63.51.57-1-.31-2.27-3.91-2.66-3.49-3.23C173.43,103.49,175.25,104.67,176.45,105.36Z"
                />
                <path
                  fill="#ffacac"
                  d="M207.93,165.75s-3.05,7.68-.61,13.14c4,8.86,2.6,27.93,2.93,30.17s-3.69,4.64-4.68.17-5.69-24.17-7.77-28.89-1.27-13.55-1.27-13.55Z"
                />
                <path
                  fill="#ffacac"
                  d="M199.3,171.76c-1.9,3.91-3.89,15.49-2.9,22.71s-1.12,21.71-1.17,24-4.21,3.93-4.43-.67-2.39-22.89-3.64-27.95.89-20.47.89-20.47S201.2,167.84,199.3,171.76Z"
                />
                <path
                  fill="#002e47"
                  d="M188.11,223.83c2.72-1.64,2.4-6.49,2.4-6.49a13.36,13.36,0,0,0,5.13-.53c0,1.47,1.68,4,1.89,6.22.18,2-1.47,3.15-1.47,4.88h-1.44l.73-4c-2.36,0-5.37,4.1-8.31,4.06s-3.95-1-4.19-1.94S185.4,225.47,188.11,223.83Z"
                />
                <path
                  fill="#002e47"
                  d="M202.82,215.93c2.71-1.65,2.39-6.49,2.39-6.49a13.19,13.19,0,0,0,5.13-.54c0,1.48,1.68,4,1.88,6.22.19,2-1.46,3.15-1.46,4.88h-1.44l.73-4c-2.36,0-5.37,4.09-8.31,4.06s-4-1-4.19-2S200.1,217.57,202.82,215.93Z"
                />
                <path
                  fill="#FFA500"
                  d="M205.62,139.71a32.24,32.24,0,0,0,3.22,7.17c2.33,4,4.52,9.79,3.72,14.28s.91,22,2.53,31c0,0-8,1.56-11,3.69-10.6,7.47-22.08.49-22.08.49,0-19.17,8-44,9.63-55Z"
                />
                <path
                  fill="#002e47"
                  d="M189.2,129.18A62.13,62.13,0,0,0,191,122.8c.75-2.82,5.4-4.59,9.79-3.86,4.81.8,5.61,7.68,5.63,12,0,4-.42,8.57,1.9,15.06-5.09,4.55-13.43,6.74-18.68,3.93.64-4.38,2.8-11.75,1.84-15.06C191.34,134.34,187.86,132.61,189.2,129.18Z"
                />
                <path
                  fill="#ffacac"
                  d="M191.34,106.73a8.45,8.45,0,0,1,0-2.08c.52-4.35,6.7-.32,8.83,3.21s-6.61,9.81-8.41,6.72c-2.11-3.64-1.12-6.4-1-6.55C191.23,107.44,191.45,107.23,191.34,106.73Z"
                />
                <path
                  fill="#00537a"
                  d="M197.56,99.55c4.71,1.23,6.24-1.55,8.74,4,2.06,4.55,5.65.23,7.78,5.5s-1.13,5.43,2.85,8.69-.21,8.16-1.31,10.9-3.08,4.11-.67,8.07c0,0-9.84-.13-9.06-6.66s-5.44-3.4-4.89-8c.44-3.7-4.3-2.17-4.17-4.51s-4.28-3.36-1.32-7.57c1.76-2.49-5-4.06-4.67-6.77C191.06,101.36,192.85,98.33,197.56,99.55Z"
                />
                <path
                  fill="#ffacac"
                  d="M196.19,108.22a3,3,0,0,1-.44,2.62c-.48.7-.91.46-.83.1s-.41-1.29-.16-2.48C194.83,108.12,195.85,107.45,196.19,108.22Z"
                />
                <path
                  fill="#ffacac"
                  d="M189.6,126.9c2.05-5.32,4.52-6.8,5.79-6.44,3.25,1,4,4.64,1.83,8.88-2.08,4-5.52,9.7-10.53,13.1-2,1.34-2.92-4.53-2.22-5.78A64.43,64.43,0,0,0,189.6,126.9Z"
                />
                <path
                  fill="#ffacac"
                  d="M162.06,131.65c1.52.29,3.65,1.43,3.32.71s-.73-1.69-.49-2.24.32.93,1.24,1.48a18.21,18.21,0,0,1,2.81,3.21s-1,2.86-1.44,2.7-1.89-.28-3-.46-3.65.66-3.82.17-1.31-2.54-1.27-3.1,2.31-1.83.67-1.27-3.19,0-2.61-.17C158.4,132.36,160.54,131.36,162.06,131.65Z"
                />
                <path
                  fill="#ffacac"
                  d="M168.31,134.13c2.36,1.06,13.7,2,16.51,2.53,1.28.23,4.41,5,1.41,6s-19.31-5.28-19.31-5.28A2.52,2.52,0,0,1,168.31,134.13Z"
                />
              </svg>
            )}
            {selectedUser && (
              <React.Fragment>
                <ChatHeader onlineUsers= {onlineUser} selectedUser={selectedUser} />
                <ChatMessage userLoggedIn={userLoggedIn} handleSendMessage={handleSendMessage} setSenderChat={setSenderChat} senderChat={senderChat} selectedUser={selectedUser}  chats={chats} />
              </React.Fragment>
            )}
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Chats;

const BackBtn = ({ ...other }) => (
  <svg
    width="79"
    height="24"
    viewBox="0 0 79 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...other}
  >
    <path
      d="M19 12L5 12M5 12L12 19M5 12L12 5"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M33.4382 19V5.90909H38.2322C39.1612 5.90909 39.9304 6.0625 40.5398 6.36932C41.1491 6.67187 41.6051 7.0831 41.9077 7.60298C42.2102 8.11861 42.3615 8.70028 42.3615 9.34801C42.3615 9.89347 42.2614 10.3537 42.0611 10.7287C41.8608 11.0994 41.5923 11.3977 41.2557 11.6236C40.9233 11.8452 40.5568 12.0071 40.1562 12.1094V12.2372C40.5909 12.2585 41.0149 12.3991 41.4283 12.6591C41.8459 12.9148 42.1911 13.2791 42.4638 13.7521C42.7365 14.2251 42.8729 14.8004 42.8729 15.478C42.8729 16.147 42.7152 16.7479 42.3999 17.2805C42.0888 17.8089 41.6072 18.2287 40.9553 18.5398C40.3033 18.8466 39.4702 19 38.456 19H33.4382ZM35.4134 17.3061H38.2642C39.2102 17.3061 39.8878 17.1229 40.2969 16.7564C40.706 16.3899 40.9105 15.9318 40.9105 15.3821C40.9105 14.9687 40.8061 14.5895 40.5973 14.2443C40.3885 13.8991 40.0902 13.6243 39.7024 13.4197C39.3189 13.2152 38.8629 13.1129 38.3345 13.1129H35.4134V17.3061ZM35.4134 11.5724H38.0597C38.5028 11.5724 38.9013 11.4872 39.255 11.3168C39.6129 11.1463 39.8963 10.9077 40.1051 10.6009C40.3182 10.2898 40.4247 9.9233 40.4247 9.50142C40.4247 8.96023 40.2351 8.50639 39.8558 8.13991C39.4766 7.77344 38.8949 7.5902 38.1108 7.5902H35.4134V11.5724ZM47.9194 19.2173C47.2972 19.2173 46.7347 19.1023 46.2319 18.8722C45.729 18.6378 45.3306 18.299 45.0366 17.8558C44.7468 17.4126 44.6019 16.8693 44.6019 16.2259C44.6019 15.6719 44.7085 15.2159 44.9215 14.858C45.1346 14.5 45.4222 14.2166 45.7844 14.0078C46.1467 13.799 46.5515 13.6413 46.9989 13.5348C47.4464 13.4283 47.9023 13.3473 48.3668 13.2919C48.9549 13.2237 49.4322 13.1683 49.7987 13.1257C50.1651 13.0788 50.4315 13.0043 50.5977 12.902C50.7638 12.7997 50.8469 12.6335 50.8469 12.4034V12.3587C50.8469 11.8004 50.6893 11.3679 50.3739 11.0611C50.0629 10.7543 49.5984 10.6009 48.9805 10.6009C48.337 10.6009 47.8299 10.7436 47.4592 11.0291C47.0927 11.3104 46.8391 11.6236 46.6985 11.9688L44.9023 11.5597C45.1154 10.9631 45.4265 10.4815 45.8356 10.1151C46.2489 9.74432 46.7241 9.47585 47.261 9.30966C47.7979 9.1392 48.3626 9.05398 48.9549 9.05398C49.3469 9.05398 49.7624 9.10085 50.2013 9.1946C50.6445 9.28409 51.0579 9.45028 51.4414 9.69318C51.8292 9.93608 52.1467 10.2834 52.3938 10.7351C52.641 11.1825 52.7646 11.7642 52.7646 12.4801V19H50.8981V17.6577H50.8214C50.6978 17.9048 50.5124 18.1477 50.2653 18.3864C50.0181 18.625 49.7006 18.8232 49.3129 18.9808C48.9251 19.1385 48.4606 19.2173 47.9194 19.2173ZM48.3349 17.6832C48.8633 17.6832 49.315 17.5788 49.69 17.37C50.0692 17.1612 50.3569 16.8885 50.5529 16.5518C50.7532 16.2109 50.8533 15.8466 50.8533 15.4588V14.1932C50.7852 14.2614 50.6531 14.3253 50.457 14.3849C50.2653 14.4403 50.0458 14.4893 49.7987 14.532C49.5515 14.5703 49.3107 14.6065 49.0763 14.6406C48.842 14.6705 48.646 14.696 48.4883 14.7173C48.1175 14.7642 47.7788 14.843 47.4719 14.9538C47.1694 15.0646 46.9265 15.2244 46.7433 15.4332C46.5643 15.6378 46.4748 15.9105 46.4748 16.2514C46.4748 16.7244 46.6495 17.0824 46.9989 17.3253C47.3484 17.5639 47.7937 17.6832 48.3349 17.6832ZM59.4458 19.1982C58.4956 19.1982 57.6774 18.983 56.9913 18.5526C56.3095 18.1179 55.7853 17.5192 55.4189 16.7564C55.0524 15.9936 54.8691 15.12 54.8691 14.1357C54.8691 13.1385 55.0566 12.2585 55.4316 11.4957C55.8066 10.7287 56.335 10.13 57.0169 9.69957C57.6987 9.26918 58.502 9.05398 59.4267 9.05398C60.1724 9.05398 60.8372 9.19247 61.421 9.46946C62.0048 9.74219 62.4757 10.1257 62.8336 10.62C63.1958 11.1143 63.411 11.6918 63.4792 12.3523H61.6191C61.5169 11.892 61.2825 11.4957 60.916 11.1634C60.5538 10.831 60.068 10.6648 59.4586 10.6648C58.926 10.6648 58.4593 10.8054 58.0588 11.0866C57.6625 11.3636 57.3535 11.7599 57.1319 12.2756C56.9103 12.7869 56.7995 13.392 56.7995 14.0909C56.7995 14.8068 56.9082 15.4247 57.1255 15.9446C57.3429 16.4645 57.6497 16.8672 58.046 17.1527C58.4466 17.4382 58.9174 17.581 59.4586 17.581C59.8208 17.581 60.149 17.5149 60.443 17.3828C60.7413 17.2464 60.9906 17.0526 61.1909 16.8011C61.3954 16.5497 61.5382 16.2472 61.6191 15.8935H63.4792C63.411 16.5284 63.2044 17.0952 62.8592 17.5938C62.514 18.0923 62.0517 18.4844 61.4721 18.7699C60.8968 19.0554 60.2214 19.1982 59.4458 19.1982ZM67.2809 15.6697L67.2681 13.3366H67.6005L71.5124 9.18182H73.8008L69.3391 13.9119H69.0387L67.2809 15.6697ZM65.5231 19V5.90909H67.4343V19H65.5231ZM71.7234 19L68.2077 14.3338L69.5245 12.9979L74.0692 19H71.7234Z"
      fill="black"
    />
  </svg>
);
