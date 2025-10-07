import React, { useEffect } from "react";
import NavBar from "./Nav";
import { Outlet, useNavigate } from "react-router";
import { BASEURL } from "../constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utility/userSlice";
const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate("/login");
  const user = useSelector((store) => store.user);
  useEffect(() => {
    if (!user) getUser();
  }, []);
  const getUser = async () => {
    try {
      const result = await fetch(BASEURL + "/profile/view", {
        credentials: "include",
      });
      if (!result.ok) {
        const err = new Error(result.status);
        err.status = result.status;
        throw err;
      }
      const user = await result.json();
      dispatch(addUser(user?.data));
    } catch (err) {
      if (err.status === 401) {
        return navigate("/login");
      }
    }
  };
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default Body;
