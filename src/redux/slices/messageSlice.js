import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
  name: "messages",
  initialState: {
    list: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.list.push({ id: Date.now(), text: action.payload });
    },
    deleteMessage: (state, action) => {
      state.list = state.list.filter((msg) => msg.id !== action.payload);
    },
  },
});

export const { addMessage, deleteMessage } = messageSlice.actions;
export default messageSlice.reducer;
