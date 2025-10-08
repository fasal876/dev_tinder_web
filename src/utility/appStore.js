import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import connectionReducer from "./connectionSlice";
const appStore = configureStore({
  reducer: {
    user: userSlice,
    connetion: connectionReducer,
  },
});
export default appStore;
