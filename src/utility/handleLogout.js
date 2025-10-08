import { removeUser } from "./userSlice";
import { BASEURL } from "../constants/constants";
import { removeFeed } from "./feedSlice";
import { removeRequests } from "./requestSlice";
import { removeConnections } from "./connectionSlice";
export const handleLogout = async (dispatch, navigate) => {
  try {
    await fetch(BASEURL + "/logout", {
      method: "POST",
      credentials: "include",
    });
    dispatch(removeUser());
    dispatch(removeFeed());
    dispatch(removeRequests());
    dispatch(removeConnections());
    return navigate("/login");
  } catch (err) {
    console.log(err);
  }
};
