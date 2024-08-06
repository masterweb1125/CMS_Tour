import Image from "next/image";
import React, { useEffect, useState } from "react";

function ChatHeader({
  selectedUser,
  onlineUsers,
}: {
  selectedUser: any;
  onlineUsers: any;
}) {

  const [status, setStatus] = useState("");

  useEffect(() => {
    if (!selectedUser || !onlineUsers) return;
    
    const userOnline = onlineUsers.find((item) => item._id === selectedUser._id);
  
    if (userOnline) {
      if (userOnline[0].isOnline) {
        setStatus(userOnline.isOnline);
        console.log(userOnline)
      } else {
        if (userOnline.lastSeen) {
          setStatus('last seen ' + userOnline.lastSeen);
        } else {
          setStatus('offline');
        }
      }
    } else {
      setStatus('offline');
    }
  }, [selectedUser, onlineUsers]);
  
  
  return (
    <div className={`flex overflow-hidden gap-4 items-center select-none`}>
      <Image
        className="w-10"
        width={100}
        height={100}
        src={selectedUser?.profile_image}
        alt={selectedUser?.name}
      />
      <div className="flex flex-col">
        <div className="font-semibold text-md">{selectedUser?.name}</div>
        <div className="text-[#303030] text-[10px] font-normal">{status}</div>
      </div>
    </div>
  );
}

export default ChatHeader;
