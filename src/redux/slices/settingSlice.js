// redux/slices/settingSlice.js
import { createSlice } from "@reduxjs/toolkit";

const getInitialTheme = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("theme") || "light";
  }
  return "light";
};

const initialState = {
  theme: getInitialTheme(),
  notificationsEnabled: true,
};

const settingSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", state.theme);
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
      localStorage.setItem("theme", state.theme);
    },
    toggleNotifications: (state) => {
      state.notificationsEnabled = !state.notificationsEnabled;
    },
    setNotifications: (state, action) => {
      state.notificationsEnabled = action.payload;
    },
  },
});

export const {
  toggleTheme,
  toggleNotifications,
  setTheme,
  setNotifications,
} = settingSlice.actions;

export default settingSlice.reducer;
