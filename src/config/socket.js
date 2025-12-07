import { io } from "socket.io-client";
import { BASEURL } from "../constants/constants";

const initializeSocket = () =>
  window.location.hostname === "localhost"
    ? io(BASEURL)
    : io("/", { path: "/api/socket.io" });

export default initializeSocket;
