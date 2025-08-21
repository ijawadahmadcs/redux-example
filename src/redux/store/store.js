import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/redux/slices/authSlice";
import messagesReducer from "@/redux/slices/messageSlice";
import reportsReducer from "@/redux/slices/reportsSlice";
import settingsReducer from "@/redux/slices/settingSlice";

export const store = configureStore({
  reducer: {
    settings: settingsReducer,
    auth: authReducer,
    messages: messagesReducer,
    reports: reportsReducer,
    
  },
});

export default store;
