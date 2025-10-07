import React from "react";

const Toast = ({ message }) => {
  return (
    <div className="py-3 pl-3 pr-10 absolute left-[50%] translate-x-[-50%] top-20 z-10 bg-blue-600 rounded-lg text-white animate-opacity ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="white"
        className="size-6 inline"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
        />
      </svg>
      <span className="mx-5">{message}</span>
    </div>
  );
};

export default Toast;
