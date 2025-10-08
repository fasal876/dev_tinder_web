import UserCard from "./UserCard";
import useAddToStore from "../hooks/useAddToStore";
import { addFeed } from "../utility/feedSlice";

const Feed = () => {
  const feed = useAddToStore("/user/feed", addFeed, "feed");
  if (feed.length === 0) {
    return <h1>No users are present</h1>;
  }

  return (
    feed.length !== 0 && (
      <div className=" my-10">
        <UserCard user={feed[0]} showButton={true} />
      </div>
    )
  );
};

export default Feed;
