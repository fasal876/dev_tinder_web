import { addConnections } from "../utility/connectionSlice";
import useAddToStore from "../hooks/useAddToStore";
import UserCardSecondory from "./UserCardSecondory";
const Connection = () => {
  const connection = useAddToStore(
    "/user/connection",
    addConnections,
    "connetion"
  );
  if (connection.length === 0) {
    return <h1 className="text-center my-5">You don't have connection ye</h1>;
  }
  return (
    <div className=" py-10">
      <h1 className="text-center text-3xl py-3">Connections</h1>
      <div className="w-full md:w-1/2 mx-auto ">
        {connection.map((con) => (
          <UserCardSecondory
            key={con._id}
            _id={con._id}
            user={con}
            showButton={false}
          />
        ))}
      </div>
    </div>
  );
};

export default Connection;
