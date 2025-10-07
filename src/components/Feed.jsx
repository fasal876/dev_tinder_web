import React from "react";
import UserCard from "./UserCard";
import { useSelector } from "react-redux";

const Feed = () => {
  const user = useSelector((store) => store.user);
  return (
    user && (
      <div className=" my-10">
        <UserCard user={user} />
      </div>
    )
  );
};

export default Feed;
