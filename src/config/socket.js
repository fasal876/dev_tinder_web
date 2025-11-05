import { io } from "socket.io-client";
import { BASEURL } from "../constants/constants";

const initializeSocket = () => io(BASEURL);

export default initializeSocket;
