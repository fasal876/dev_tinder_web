import { removeUser } from "./userSlice";
import { BASEURL } from "../constants/constants";
export const handleLogout = async (dispatch, navigate) => {
  try {
    await fetch(BASEURL + "/logout", {
      method: "POST",
      credentials: "include",
    });
    dispatch(removeUser());
    return navigate("/login");
  } catch (err) {
    console.log(err);
  }
};
