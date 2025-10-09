import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "feed",
  initialState: [],
  reducers: {
    addFeed: (state, action) => {
      return action.payload;
    },
    removeFeed: () => {
      return [];
    },
    filterFeed: (state, action) => {
      return state.filter((item) => item._id !== action.payload);
    },
  },
});

export const { addFeed, removeFeed, filterFeed } = feedSlice.actions;
export default feedSlice.reducer;
