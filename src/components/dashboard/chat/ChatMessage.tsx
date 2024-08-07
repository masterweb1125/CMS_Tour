"use client";
import { socket } from "@/src/redux/service/socket";
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { FaLink } from "react-icons/fa";

function ChatMessage({
  selectedUser,
  handleSendMessage,
  setSenderChat,
  senderChat,
  userLoggedIn,
}: {
  setSenderChat: any;
  handleSendMessage: any;
  senderChat: any;
  selectedUser: any;
  userLoggedIn: any;
}) {
  const [msg, setMsg] = useState("");
  const file = useRef<HTMLInputElement>(null);
  const imagefileref = useRef<HTMLInputElement>(null);
  const [filePopup, setFilePopup] = useState(false);
  const chatboxRef = useRef(null);
  const observer = useRef<IntersectionObserver | null>(null);
function scrollToBottom() {
    if (chatboxRef.current) {
      chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
    }
  }

  useEffect(() => {
    const handleNewMessage = (newMessage) => {
      if (
        (newMessage.sender === userLoggedIn._id &&
          newMessage.recipient === selectedUser._id) ||
        (newMessage.sender === selectedUser._id &&
          newMessage.recipient === userLoggedIn._id)
      ) {
        setSenderChat((prevChats) => {
          const updatedChats = [...prevChats, newMessage];
          return updatedChats.sort(
            (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
          );
        });
      }
    };

    socket.on("new message", handleNewMessage);

    return () => {
      socket.off("new message");
    };
  }, [userLoggedIn._id, selectedUser._id]);

  useEffect(() => {
    const handleNewMessage = (newMessage) => {
      if (
        (newMessage.sender === userLoggedIn._id &&
          newMessage.recipient === selectedUser._id) ||
        (newMessage.sender === selectedUser._id &&
          newMessage.recipient === userLoggedIn._id)
      ) {
        setSenderChat((prevChats) => {
          const updatedChats = [...prevChats, newMessage];
          return updatedChats.sort(
            (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
          );
        });
        scrollToBottom()
      }
    };

    socket.on(userLoggedIn._id, handleNewMessage);
    return ()=>socket.off(userLoggedIn._id);
  }, []);

  const handleClickFileBtn = (type: number) => {
    if (type === 1) {
      imagefileref.current?.click();
      setFilePopup(false);
    } else {
      file.current?.click();
      setFilePopup(false);
    }
  };

  const handleSubmit = async () => {
    if (msg.trim()) {
      const messageData = {
        sender: userLoggedIn._id,
        recipient: selectedUser._id,
        content: msg,
        lastmsg: msg,
        createdAt: new Date().toISOString(),
      };

      await handleSendMessage(messageData);
      socket.emit("send message", messageData);
      setSenderChat((prevChats) => {
        const updatedChats = [...prevChats, messageData];
        return updatedChats.sort(
          (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
      });
      setMsg("");
      scrollToBottom()
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  useEffect(() => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const messageId = entry.target.getAttribute("data-id");
          if (messageId) {
            socket.emit("read", {
             id:messageId,
            });
          }
        }
      });
    });

    const messageElements = document.querySelectorAll(".message");
    messageElements.forEach((el) => observer.current?.observe(el));

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [senderChat]);
  
useEffect(()=>{
scrollToBottom()
},[senderChat])
  return (
    <div className="relative h-[75vh]">
      <div id="chatbox" ref={chatboxRef} className="style-4 mt-10 px-4 scroll-smooth h-[100%] overflow-y-scroll" style={{ paddingBottom: "50px" }}>
        {senderChat.length !== 0 &&
          senderChat.map(({ sender, content, createdAt, _id }, index) => (
            <div
              key={index}
              className={`message flex ${sender === selectedUser?._id ? "" : "flex-col items-end justify-end"} mb-4`}
             data-id={_id}
            >
              <div 
                id="messages"
                className={`border text-wrap max-w-[300px] px-5 py-2 rounded-xl relative text-sm font-medium ${
                  sender === selectedUser?._id ? "bg-[#E7E7E7]" : "bg-[#ffa500] text-white"
                }`}
              >
                <div
                  id={sender === selectedUser._id ? "triangle-topright" : "triangle-topleft"}
                  className={`absolute ${sender === selectedUser._id ? "left-[-11px] top-[-1px]" : "right-[-11px] top-[0px]"}`}
                ></div>
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
      <div className="flex justify-between items-center py-2 gap-5 bg-white w-100 pr-4 cursor-pointer absolute bottom-0 w-full">
        <input
          onChange={(e) => setMsg(e.target.value)}
          value={msg}
          onKeyDown={handleKeyDown}
          type="text"
          className="w-100 border-[#E7E7E7] p-3 border rounded-lg flex-1 focus:outline-none text-sm"
          placeholder="Type your message here..."
        />
        <button
          onClick={() => setFilePopup(!filePopup)}
          className="bg-[#ffa500] text-[1.3rem] relative h-[100%] p-3 rounded-lg text-white fill-white"
        >
          <div
            hidden={!filePopup}
            onMouseLeave={() => setFilePopup(false)}
            style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
            className="absolute text-sm text-[#646464] list-none top-[-95px] right-0 w-[170px] h-[90px] rounded-md bg-[#F5F5F5]"
          >
            <li
              onClick={() => handleClickFileBtn(1)}
              className="border-b border-[#b8b8b8] py-3"
            >
              Images
            </li>
            <li onClick={() => handleClickFileBtn(2)} className="py-3">
              Document
            </li>
          </div>
          <FaLink />
        </button>
        <input
          ref={file}
          type="file"
          name="file"
          hidden
          accept=".pdf,.csv,.doc,.docx,.txt,.xls,.xlsx,.ppt,.pptx"
        />
        <input
          ref={imagefileref}
          type="file"
          accept=".png,.jpeg,.jpg"
          hidden
        />
        <button
          disabled={msg.trim() === ""}
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
      fill="black"
    />
  </svg>
);

const SendSvg = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.999 16.0002L25.999 2.00023M12.1691 16.4377L15.6733 25.4483C15.982 26.2421 16.1363 26.639 16.3587 26.7549C16.5515 26.8553 16.7812 26.8555 16.9741 26.7552C17.1967 26.6396 17.3515 26.2429 17.6611 25.4495L26.4482 2.93249C26.7277 2.21625 26.8675 1.85813 26.791 1.6293C26.7247 1.43056 26.5687 1.27461 26.37 1.20822C26.1411 1.13177 25.783 1.27152 25.0668 1.55103L2.54978 10.3382C1.75635 10.6478 1.35963 10.8026 1.24402 11.0251C1.14379 11.2181 1.14393 11.4477 1.24438 11.6405C1.36025 11.8629 1.75715 12.0173 2.55094 12.326L11.5616 15.8301C11.7227 15.8928 11.8033 15.9241 11.8712 15.9725C11.9313 16.0154 11.9839 16.068 12.0268 16.1281C12.0752 16.196 12.1065 16.2765 12.1691 16.4377Z"
      stroke="white"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
