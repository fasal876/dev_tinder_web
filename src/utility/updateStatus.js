import { BASEURL } from "../constants/constants";
import { filterRequests } from "./requestSlice";

export const updateStatus = async (_id, status, dispatch) => {
  try {
    const response = await fetch(
      BASEURL + "/request/review/" + status + "/" + _id,
      {
        method: "POST",
        credentials: "include",
      }
    );
    await response.json();
    dispatch(filterRequests(_id));
  } catch (err) {
    console.log(err);
  }
};
