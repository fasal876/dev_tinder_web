import { useEffect } from "react";
import { BASEURL } from "../constants/constants";
import { useDispatch, useSelector } from "react-redux";
const useAddToStore = (url, action, slice) => {
  const dispatch = useDispatch();
  const reducer = useSelector((store) => store[slice]);
  const fetchConnections = async () => {
    try {
      console.log(BASEURL);
      const result = await fetch(BASEURL + url, {
        method: "GET",
        credentials: "include",
      });
      if (!result.ok) {
        const err = new Error("error");
        err.status = result.status;
        err.message = result.statusText;
        throw err;
      }
      const json = await result.json();
      dispatch(action(json.data));
    } catch (err) {
      console.log(err.status + "\n" + err.message);
    }
  };
  useEffect(() => {
    if (!reducer || reducer.length === 0) {
      fetchConnections();
    }
  }, []);
  return reducer;
};
export default useAddToStore;
