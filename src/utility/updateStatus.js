import { BASEURL } from "../constants/constants";

export const updateStatus = async (URI, _id, status, dispatch, filter) => {
  try {
    const response = await fetch(
      BASEURL + "/request" + URI + status + "/" + _id,
      {
        method: "POST",
        credentials: "include",
      }
    );
    const json = await response.json();
    setTimeout(() => {
      dispatch(filter(_id));
    }, 500);
    return json;
  } catch (err) {
    console.log(err);
  }
};
