
"use client"
import React, { useState, useEffect, useRef, useCallback } from "react";
import { useSelector } from "react-redux";
import { SortedMessages } from "@/src/redux/service/AdminApi";
import { socket } from '../../../redux/service/socket.js';
import { FaLink } from "react-icons/fa";

function ChatMessage({ handleSendMessage, selectedUser }) {
  const [msg, setMsg] = useState("");
  const [senderChat, setSenderChat] = useState([]);
  const userLoggedIn = useSelector((state) => state?.User?.UserInfo);
  const chatContainerRef = useRef(null);

  const fetchMessages = useCallback(async () => {
    if (selectedUser && userLoggedIn) {
      const sendermsg = await SortedMessages(selectedUser._id, userLoggedIn._id);
      // Sort messages by createdAt in ascending order
      const sortedMessages = sendermsg.messages.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
      setSenderChat(sortedMessages);
    }
  }, [selectedUser, userLoggedIn]);

  useEffect(() => {
    fetchMessages();
  }, [fetchMessages]);

  
  useEffect(() => {
    const handleNewMessage = (newMessage) => {
      if (
        (newMessage.sender === userLoggedIn._id && newMessage.recipient === selectedUser._id) ||
        (newMessage.sender === selectedUser._id && newMessage.recipient === userLoggedIn._id)
      ) {
        setSenderChat((prevChats) => {
          // Add the new message and then sort
          const updatedChats = [...prevChats, newMessage];
          return updatedChats.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        });
        // Scroll to the bottom when a new message is received
        if (chatContainerRef.current) {
          chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
      }
    };

    socket.on('new message', handleNewMessage);

    // return () => {
      //   socket.off('new message', handleNewMessage);
    // };
  }, [userLoggedIn._id, selectedUser._id]);

  const handleSubmit = () => { 
    if (msg.trim()) {
      const messageData = {
        sender: userLoggedIn._id,
        recipient: selectedUser._id,
        content: msg,
        lastmsg: msg,
        createdAt: new Date().toISOString() // Add createdAt timestamp
      };
      handleSendMessage(messageData);
      socket.emit('send message', messageData);
      setSenderChat((prevChats) => {
        const updatedChats = [...prevChats, messageData];
        return updatedChats.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
      });
      setMsg(""); 
      if (chatContainerRef.current) {
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevents a newline from being added
      handleSubmit();
    }
  };
  
 
  return (
    <div className="relative ">
      <div id="style-4" ref={chatContainerRef} className="mt-10 px-4 scroll-smooth h-[450px] overflow-y-scroll" style={{ paddingBottom: '50px' }}>
        {senderChat.length !== 0 && senderChat.map(({ sender, content, createdAt }, index) => (
          <div
            key={index}
            className={`flex ${sender === selectedUser?._id ? "" : "flex-col items-end justify-end"} mb-4`}
          >
            <div
              className={`border w-52 px-5 py-2 rounded-xl relative text-sm font-medium ${sender === selectedUser?._id ? "bg-[#E7E7E7]" : "bg-[#ffa500] text-white"}`}
            > 
            <div id={sender === selectedUser._id ?"triangle-topright":"triangle-topleft"} className={`absolute  ${sender === selectedUser._id?'left-[-11px] top-[-1px]':"right-[-11px] top-[0px]"}`}>

            </div>
              {content}
            </div>
            {sender !== selectedUser?._id && (
              <div className="text-[11px] mt-1 flex gap-2 pr-4 items-center">
                <div>{new Date(createdAt).toLocaleTimeString()}</div>
                <div className="w-2 h-2 rounded-xl bg-[#ffa500]" />
              </div>
            )}
          </div>
        ))}
      </div>
      <br />
      <br />
      <div className="flex justify-between items-center py-2 gap-5 bg-white w-100 pr-4 cursor-pointer absolute bottom-0 w-full ">
        <input
          onChange={(e) => setMsg(e.target.value)}
          value={msg}
          onKeyDown={handleKeyDown}
          type="text"
          className="w-100 border-[#E7E7E7] p-3 border rounded-lg flex-1 focus:outline-none text-sm"
          placeholder="Type your message here..."
        />
        <button className="bg-[#ffa500] text-[1rem] h-[100%] p-3 rounded-lg text-white fill-white">
        <FaLink />
        </button>
        <button
        disabled={msg == "" ?true:false}
          onClick={handleSubmit}
          className="bg-[#ffa500] disabled:bg-[#979797] h-[100%] p-2 rounded-lg"
        >
          <SendSvg />
        </button>
      </div>
    </div>
  );
}

export default ChatMessage;

const ItemsSvg = () => (
  <svg
    width="21"
    height="27"
    viewBox="0 0 21 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.0677 4.09835C13.5997 3.25078 11.8551 3.02109 10.2177 3.45983C8.5803 3.89857 7.18426 4.96978 6.33669 6.43782L2.50175 13.0801C2.33224 13.3737 2.05303 13.588 1.72555 13.6757C1.39807 13.7635 1.04915 13.7175 0.755545 13.548C0.461937 13.3785 0.247694 13.0993 0.159947 12.7718C0.0721991 12.4443 0.118135 12.0954 0.28765 11.8018L4.12259 5.15951C4.71013 4.14185 5.49237 3.24988 6.42463 2.53453C7.3569 1.81918 8.42093 1.29446 9.55598 0.990321C10.691 0.686185 11.8749 0.608592 13.0399 0.761972C14.205 0.915352 15.3284 1.2967 16.346 1.88425C17.3637 2.47179 18.2557 3.25403 18.971 4.18629C19.6864 5.11856 20.2111 6.18259 20.5152 7.31764C20.8194 8.4527 20.897 9.63654 20.7436 10.8016C20.5902 11.9666 20.2088 13.09 19.6213 14.1077L14.508 22.9641C13.6605 24.4321 12.2644 25.5034 10.6271 25.9421C8.98967 26.3808 7.24505 26.1512 5.77701 25.3036C4.30897 24.456 3.23776 23.06 2.79902 21.4226C2.36029 19.7852 2.58997 18.0406 3.43754 16.5725L8.55079 7.71614C9.05933 6.83531 9.89696 6.19258 10.8794 5.92934C11.8618 5.6661 12.9086 5.80391 13.7894 6.31245C14.6702 6.821 15.313 7.65862 15.5762 8.64105C15.8394 9.62348 15.7016 10.6702 15.1931 11.5511L10.0798 20.4075C9.91033 20.7011 9.63112 20.9153 9.30365 21.0031C8.97617 21.0908 8.62725 21.0449 8.33364 20.8754C8.04003 20.7059 7.82579 20.4267 7.73804 20.0992C7.65029 19.7717 7.69623 19.4228 7.86574 19.1292L12.979 10.2728C13.1485 9.97915 13.1944 9.63023 13.1067 9.30275C13.0189 8.97528 12.8047 8.69607 12.5111 8.52655C12.2175 8.35704 11.8686 8.3111 11.5411 8.39885C11.2136 8.4866 10.9344 8.70084 10.7649 8.99445L5.65164 17.8509C5.1431 18.7317 5.00529 19.7784 5.26853 20.7609C5.53177 21.7433 6.1745 22.5809 7.05533 23.0895C7.93615 23.598 8.98292 23.7358 9.96535 23.4726C10.9478 23.2093 11.7854 22.5666 12.2939 21.6858L17.4072 12.8294C18.2548 11.3613 18.4845 9.61673 18.0457 7.97935C17.607 6.34196 16.5358 4.94592 15.0677 4.09835Z"
      fill="#737373"
    />
  </svg>
);

const SendSvg = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.90225 2.4602C6.36657 2.243 6.90437 2.31495 7.30811 2.64958L20.5684 13.0633C20.9268 13.3543 21.1117 13.8126 21.0538 14.2726C20.9959 14.7326 20.704 15.125 20.2764 15.2833L15.2764 17.164C15.0757 17.2362 14.8566 17.2064 14.6811 17.0849L11.2101 14.6224C10.8782 14.3994 10.4203 14.495 10.2104 14.8223L8.1039 18.0002C7.8701 18.3605 7.44612 18.5327 7.02918 18.4386C6.61224 18.3444 6.29352 18.0055 6.21809 17.5714L4.34732 6.15055C4.26169 5.64297 4.43806 5.12664 4.81869 4.79559L5.90225 2.4602ZM7.21735 6.28245L8.49169 13.3911L10.0396 11.0451L7.21735 6.28245ZM14.4264 15.1286L18.1955 13.7397L8.78449 5.40763L14.4264 15.1286Z"
      fill="white"
    />
  </svg>
);
