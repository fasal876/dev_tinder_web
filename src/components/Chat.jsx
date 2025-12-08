import React, { useEffect, useRef, useState } from "react";
import SendIcon from "./SendIcon";
import { Link, useParams } from "react-router";
import createSocketConneciton from "../config/socket";
import { useSelector } from "react-redux";
import ChatBubbleRight from "./ChatBubbleRight";
import ChatBubbleLeft from "./ChatBubbleLeft";
import { BASEURL } from "../constants/constants";
const Chat = () => {
  const [messages, setMessage] = useState([]);
  const [textInput, setTextInput] = useState("");
  const { toUserId } = useParams();
  const chatContainer = useRef(null);
  const user = useSelector((store) => store?.user);
  const fetchMessages = async () => {
    try {
      const result = await fetch(BASEURL + "/chat/" + toUserId, {
        credentials: "include",
      });

      if (!result.ok) {
        const err = new Error();
        err.status = result.statusText;
        throw err;
      }
      const chats = await result.json();

      const data = chats.message.map((chat) => {
        const { senderId, text } = chat;
        return {
          sender: senderId._id,
          photoURL: senderId.photoURL,
          text,
          timeStamp: new Date(chat.createdAt),
        };
      });
      setMessage(data);
    } catch (err) {
      console.log(err.statusText);
    }
  };
  useEffect(() => {
    fetchMessages();
  }, []);

  useEffect(() => {
    if (user) {
      const socket = createSocketConneciton();
      socket.emit("joinChat", { fromUserId: user._id, toUserId });
      socket.on("recievedMessage", ({ sender, photoURL, text, timeStamp }) => {
        setMessage((prev) => [...prev, { sender, photoURL, text, timeStamp }]);
      });
      fetchMessages();
      return () => socket.disconnect();
    }
  }, [user, toUserId]);
  useEffect(() => {
    if (chatContainer.current) {
      chatContainer.current.scrollTo({
        top: chatContainer.current.scrollHeight,
        behaviour: "smooth",
      });
    }
  }, [messages]);
  const sendMessage = () => {
    const socket = createSocketConneciton();
    socket.emit("sendMessage", {
      firstName: user.firstName,
      fromUserId: user._id,
      toUserId,
      text: textInput,
    });
    setTextInput("");
  };
  const getTimeAgo = (timeStamp) => {
    const recieved = new Date(timeStamp).getTime();
    const now = new Date().getTime();
    return Math.floor((now - recieved) / (1000 * 60 * 60 * 24));
  };
  return (
    <div className="bg-[#f2f2f2]  my-0">
      <div className="w-10/12 h-[85vh] sm:w-1/2   bg-white rounded-lg shadow-xl sm:h-[80vh] mx-auto my-5  relative px-5 flex flex-col">
        <h1 className="  text-center text-4xl border-b-2 py-3 border-b-gray-300">
          Chat
        </h1>
        <div
          className=" flex-1  py-2 overflow-auto no-scrollbar"
          ref={chatContainer}
        >
          {messages.map((message, i) =>
            message.sender === user._id ? (
              <ChatBubbleRight
                key={i}
                firstName={message.firstName}
                text={message.text}
                timeStamp={getTimeAgo(message.timeStamp)}
                photoURL={message.photoURL}
              />
            ) : (
              <ChatBubbleLeft
                key={i}
                firstName={message.firstName}
                text={message.text}
                timeStamp={getTimeAgo(message.timeStamp)}
                photoURL={message.photoURL}
              />
            )
          )}
        </div>
        <div className=" z-10 bg-white focus-within:border-black bottom-1 py-2 my-1 border border-gray-300 rounded-lg flex mb-2 px-5">
          <input
            className="flex-1 min-w-0  outline-none resize-none "
            value={textInput}
            onChange={(e) => {
              setTextInput(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" && messages.length !== 0) sendMessage();
            }}
          />

          <button
            className="text-black shrink-0 py-2 px-3  rounded-4xl  shadow-gray-300 shadow-sm"
            onClick={sendMessage}
          >
            <SendIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
