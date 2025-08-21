import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated:
    typeof window !== "undefined" && localStorage.getItem("user")
      ? true
      : false,
  user:
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : null,
  error: null,
};

// Demo user
const demoUser = {
  email: "admin@gmail.com",
  password: "admin123",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { email, password } = action.payload;
      if (email === demoUser.email && password === demoUser.password) {
        state.isAuthenticated = true;
        state.user = { email };
        state.error = null;
        localStorage.setItem("user", JSON.stringify({ email }));
      } else {
        state.error = "Invalid email or password!";
      }
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.error = null;
      localStorage.removeItem("user");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
