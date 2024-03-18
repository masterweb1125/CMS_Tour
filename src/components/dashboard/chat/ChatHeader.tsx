import Image from "next/image";
import React from "react";

function ChatHeader({ selectedUser }: { selectedUser: any }) {
  return (
    <div className={`flex overflow-hidden gap-4 items-center select-none`}>
      <Image className="w-10" src={selectedUser?.img} alt="" />
      <div className="flex flex-col">
        <div className="font-semibold text-md">{selectedUser?.name}</div>
        <div className="text-[#303030] text-[10px] font-normal">
          Online - Last seen, 2.02pm
        </div>
      </div>
    </div>
  );
}

export default ChatHeader;
