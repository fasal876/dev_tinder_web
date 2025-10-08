import { useDispatch } from "react-redux";
import { updateStatus } from "../utility/updateStatus";
import { useState } from "react";

const UserCardSecondory = ({ user, showButton, _id }) => {
  const dispatch = useDispatch();
  const { leaving, setLeaving } = useState(false);
  return (
    <div
      className={`my-2 bg-white flex  outline-white  rounded-lg shadow-lg ring-1 ring-black/5 ${
        leaving ? "animate-transition-leave" : ""
      }`}
    >
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
      {showButton && (
        <div className="flex-1 flex items-center text-white ">
          <button
            className="mx-2 bg-black/80 py-3 px-3 rounded-lg button hover:ring-1 hover:ring-offset-2 hover:ring-black"
            onClick={() => {
              updateStatus(_id, "accepted", dispatch);
              setLeaving(true);
            }}
          >
            Accept
          </button>
          <button
            className="mx-2 bg-gray-500/80 py-3 px-3 rounded-lg button hover:ring-1 hover:ring-offset-2 hover:ring-black"
            onClick={() => {
              updateStatus(_id, "rejected", dispatch);
              setLeaving(true);
            }}
          >
            Reject
          </button>
        </div>
      )}
    </div>
  );
};

export default UserCardSecondory;
