import React from "react";

const UserCardSecondory = ({ user }) => {
  return (
    <div className="my-2 bg-white flex  outline-white  rounded-lg shadow-lg ring-1 ring-black/5 ">
      <div>
        <img
          src={user.photoURL}
          className="h-40 max-h-full border-1 border-black/5 rounded-ss-lg rounded-es-lg   rounded-se-[50%] rounded-ee-[40%]   overflow-hidden shadow-sm"
        />
      </div>
      <div className="py-2 px-2 flex-2">
        <h1 className="font-medium">
          {user.firstName} <span>{user.lastName}</span>
        </h1>
        <div className="text-gray-500 my-1">
          <p className="my-1">{user.about}</p>
          {user.age && <span className="mr-3">{user.age}</span>}
          {user.gender && <span className="">{user.gender}</span>}
        </div>
      </div>
    </div>
  );
};

export default UserCardSecondory;
