import { useEffect } from "react";
import { BASEURL } from "../constants/constants";
import { useDispatch, useSelector } from "react-redux";
const useAddToStore = (url, action, slice) => {
  const dispatch = useDispatch();
  const reducer = useSelector((store) => store[slice]);
  const fetchConnections = async () => {
    try {
      const result = await fetch(BASEURL + url, {
        method: "GET",
        credentials: "include",
      });

      const json = await result.json();
      dispatch(action(json.data));
    } catch (err) {
      console.log(err);
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
