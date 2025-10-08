import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import connectionReducer from "./connectionSlice";
import requestsReducer from "./requestSlice";
import feedReducer from "./feedSlice";
const appStore = configureStore({
  reducer: {
    user: userSlice,
    connetion: connectionReducer,
    request: requestsReducer,
    feed: feedReducer,
  },
});
export default appStore;
