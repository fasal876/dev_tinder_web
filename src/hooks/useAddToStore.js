import { useEffect } from "react";
import { BASEURL } from "../constants/constants";
import { useDispatch } from "react-redux";
const useAddToStore = (action) => {
  const dispatch = useDispatch();
  const fetchConnections = async () => {
    try {
      const result = await fetch(BASEURL + "/user/connection", {
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
    fetchConnections();
  }, []);
};
export default useAddToStore;
