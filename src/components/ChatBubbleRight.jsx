import React from "react";

const ChatBubbleRight = ({ text, timeStamp, photoURL }) => {
  return (
    <div className="flex  justify-end">
      <div className="flex flex-row-reverse max-w-9/12 py-2 px-2">
        <div className="flex flex-col justify-end shrink-0">
          <img src={photoURL} className="w-14 aspect-square rounded-[50%]" />
        </div>
        <div className="mr-2">
          <time className="text-xs text-gray-500">
            {timeStamp} <span> ago</span>
          </time>
          <p className="bg-[#F2F2F2] py-3 px-3 break-words">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default ChatBubbleRight;
