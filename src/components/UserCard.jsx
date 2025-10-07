import React from "react";

const UserCard = ({ user }) => {
  const { firstName, lastName, about, photoURL, gender, age } = user;

  return (
    <div className=" w-80 bg-[#f8f8f8] rounded-md mx-auto  transition-all outline-0 outline-solid  hover:outline-2 hover:outline-offset-2 shadow-md">
      <img
        src={photoURL}
        alt="Shoes"
        className="brightness-[80%]  rounded-none rounded-ss-md rounded-se-md object-cover overflow-hidden"
      />
      <div className="px-5 py-3 ">
        <h2 className="font-medium text-2xl">{firstName}</h2>
        <p className="text-lg my-2 ">{about}</p>
        {gender && <span>{gender}</span>}
        {age && <span className="mx-2">{age}</span>}
        <div className="flex justify-end text-white py-5">
          <button className="mx-2 bg-gray-500/80 py-3 px-3 rounded-lg">
            Interested
          </button>
          <button className="mx-2 bg-black/80 py-3 px-3 rounded-lg">
            Ignored
          </button>
        </div>{" "}
      </div>
    </div>
  );
};

export default UserCard;
