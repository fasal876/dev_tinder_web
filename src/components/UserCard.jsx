import { useDispatch } from "react-redux";
import { filterFeed } from "../utility/feedSlice";
import { updateStatus } from "../utility/updateStatus";
import { useRef, useState } from "react";
const UserCard = ({ user, showButton }) => {
  const { _id, firstName, lastName, about, photoURL, gender, age } = user;
  const dispatch = useDispatch();
  const [isInterested, setIsInterested] = useState(false);
  const [translate, setTransate] = useState("");
  const [rotate, setRotate] = useState("");
  const handleClick = async (URI, status, translate, rotate) => {
    await updateStatus(URI, _id, status, dispatch, filterFeed);
    setIsInterested(true);
    setTransate(translate);
    setRotate(rotate);
  };
  return (
    <div
      className={`
w-full h-full bg-[#f8f8f8] rounded-md mx-auto  transition-transform ease-in outline-0 outline-solid   shadow-md relative ${
        isInterested ? translate : ""
      } ${isInterested ? rotate : ""} `}
    >
      <img
        src={photoURL}
        alt="Shoes"
        className="brightness-[80%] h-full rounded-none rounded-ss-md rounded-se-md object-cover overflow-hidden"
      />
      <div className="px-5 w-full py-3 absolute bottom-0 text-white bg-gradient-to-t from-black to-black/0   ">
        <h2 className="font-medium text-2xl">{firstName}</h2>
        <p className="text-lg my-2 ">{about}</p>
        {gender && <span>{gender}</span>}
        {age && <span className="mx-2">{age}</span>}
        {showButton && (
          <div className="flex justify-end text-white py-5">
            <button
              className="mx-2 bg-gray-500/80 py-3 px-3 rounded-lg button hover:ring-1 hover:ring-offset-2 hover:ring-black"
              onClick={() => {
                //updateStatus("/send/", _id, "interested", dispatch, filterFeed);
                handleClick(
                  "/send/",
                  "ignored",
                  "-translate-x-[105%]",
                  "-rotate-45"
                );
              }}
            >
              Ignored
            </button>
            <button
              className="mx-2 bg-black/80 py-3 px-3 rounded-lg hover:ring-1 hover:ring-offset-2 hover:ring-black "
              onClick={() => {
                // updateStatus("/send/", _id, "ignored", dispatch, filterFeed);
                handleClick(
                  "/send/",
                  "interested",
                  "translate-x-[105%]",
                  "rotate-45"
                );
              }}
            >
              Interested
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserCard;
