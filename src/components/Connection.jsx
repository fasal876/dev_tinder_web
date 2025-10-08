import { addConnections } from "../utility/connectionSlice";
import useAddToStore from "../hooks/useAddToStore";
import { useSelector } from "react-redux";
import UserCard from "./UserCard";
import UserCardSecondory from "./UserCardSecondory";
const Connection = () => {
  useAddToStore(addConnections);
  const connection = useSelector((store) => store.connetion);
  console.log(connection);
  if (!connection || connection.length === 0) {
    return null;
  }
  return (
    <div className=" py-10">
      <h1 className="text-center text-3xl py-3">Connections</h1>
      <div className="w-full md:w-1/2 mx-auto ">
        {connection.map((con) => (
          <UserCardSecondory user={con} />
        ))}
      </div>
    </div>
  );
};

export default Connection;
