import { createSlice } from "@reduxjs/toolkit";
const requestSlice = createSlice({
  name: "request",
  initialState: [],
  reducers: {
    addRequest: (state, action) => {
      return action.payload;
    },
    removeRequests: () => {
      return [];
    },
    filterRequests: (state, action) => {
      const arr = state.filter((item) => item._id !== action.payload);
      return arr;
    },
  },
});

export const { addRequest, removeRequests, filterRequests } =
  requestSlice.actions;
export default requestSlice.reducer;
