import UserCard from "./UserCard";
import useAddToStore from "../hooks/useAddToStore";
import { addFeed } from "../utility/feedSlice";

const Feed = () => {
  const feed = useAddToStore("/user/feed", addFeed, "feed");
  if (feed.length === 0) {
    return <h1 className="not_present_heading">No new users are present</h1>;
  }

  return (
    feed.length !== 0 && (
      <div className="w-9/12 sm:w-3/12 mx-auto my-20 sm:my-15 h-[32rem] relative transition-transform ">
        {feed.length >= 1 && (
          <div
            className="h-full   w-full absolute left-0 top-0 z-10  "
            draggable={true}
            key={feed[0]._id}
          >
            <UserCard user={feed[0]} showButton={true} />
          </div>
        )}
        {feed.length >= 2 && (
          <div
            className="h-full   w-full absolute left-0 top-0 -z-10  "
            draggable={true}
            key={feed[1]._id}
          >
            <UserCard user={feed[1]} showButton={false} />
          </div>
        )}
      </div>
    )
  );
};

export default Feed;
