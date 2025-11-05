import { useDispatch } from "react-redux";
import { updateStatus } from "../utility/updateStatus";
import { filterRequests } from "../utility/requestSlice";
import { useState } from "react";
import { Link } from "react-router";
import SendIcon from "./SendIcon";

const UserCardSecondory = ({ user, showButton, _id }) => {
  const dispatch = useDispatch();
  const [isRemoved, setIsRemoved] = useState(false);
  const [translate, setTranslate] = useState("");
  const handleClick = async (URI, status) => {
    await updateStatus(URI, _id, status, dispatch, filterRequests);
    setIsRemoved(true);
    setTranslate("-translate-y-[20%]");
  };
  return (
    <div
      className={`my-2 bg-white flex  outline-white  rounded-lg shadow-lg ring-1  ring-black/5 transition-transform ease-in ${
        isRemoved ? translate : ""
      } `}
    >
      <div className="flex-1">
        <img
          src={user.photoURL}
          className=" h-25  sm:h-40 w-full max-h-full border-1 border-black/5 rounded-ss-lg rounded-es-lg   rounded-se-[50%] rounded-ee-[40%]   overflow-hidden shadow-sm"
        />
      </div>
      <div className="py-2 px-2 flex-2 text-sm sm:text-base">
        <h1 className=" font-medium">
          {user.firstName} <span>{user.lastName}</span>
        </h1>
        <div className="text-gray-500 my-1">
          <p className="my-1 h-20 overflow-scroll no-scrollbar">{user.about}</p>
          {user.age && <span className="mr-3">{user.age}</span>}
          {user.gender && <span className="">{user.gender}</span>}
        </div>
      </div>
      {showButton ? (
        <div className="flex-1 flex flex-col sm:flex-row justify-center items-center text-white text-sm sm:text-base">
          <button
            className="mx-2 bg-black/80 py-1 px-1 sm:py-3 sm:px-3 rounded-lg button hover:ring-1 hover:ring-offset-2 hover:ring-black"
            onClick={() => {
              updateStatus(handleClick("/review/", "accepted"));
            }}
          >
            Accept
          </button>
          <button
            className="mx-2 bg-gray-500/80 py-1 px-2 my-1 sm:py-3 sm:px-3 rounded-lg button hover:ring-1 hover:ring-offset-2 hover:ring-black"
            onClick={() => {
              updateStatus(handleClick("/review/", "accepted"));
            }}
          >
            Reject
          </button>
        </div>
      ) : (
        <div className="flex-1  flex text-white justify-center items-center ">
          <Link
            to={"/chat/" + _id}
            className="mx-2 bg-black/80 py-1 px-1 sm:py-3 sm:px-8 rounded-lg button hover:ring-1 hover:ring-offset-2 hover:ring-black"
          >
            <button className="flex items-center">
              <SendIcon />
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserCardSecondory;
