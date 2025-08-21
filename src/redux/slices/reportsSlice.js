import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: ["Sales Report Q1", "Performance Report", "User Activity Report"],
};

const reportsSlice = createSlice({
  name: "reports",
  initialState,
  reducers: {
    addReport: (state, action) => {
      state.list.push(action.payload);
    },
    removeReport: (state, action) => {
      state.list.splice(action.payload, 1);
    },
    clearReports: (state) => {
      state.list = [];
    },
  },
});

export const { addReport, removeReport, clearReports } = reportsSlice.actions;
export default reportsSlice.reducer;
