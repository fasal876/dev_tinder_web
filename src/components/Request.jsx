import useAddToStore from "../hooks/useAddToStore";
import { addRequest } from "../utility/requestSlice";
import UserCardSecondory from "./UserCardSecondory";
const Request = () => {
  const requests = useAddToStore(
    "/user/request/pending",
    addRequest,
    "request"
  );

  if (requests.length === 0) {
    return <h1 className="text-center my-5">You don't have requests</h1>;
  }
  return (
    <div className="w-1/2 mx-auto">
      <h1 className="text-3xl font-medium my-5 text-center">Requests</h1>
      {requests.map((req) => (
        <UserCardSecondory
          key={req._id}
          _id={req._id}
          user={req.from}
          showButton={true}
        />
      ))}
    </div>
  );
};

export default Request;
