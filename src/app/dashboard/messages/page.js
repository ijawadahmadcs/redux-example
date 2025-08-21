"use client";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addMessage, deleteMessage } from "@/redux/slices/messageSlice";

export default function MessagesPage() {
  const messages = useSelector((state) => state.messages.list);
  const dispatch = useDispatch();
  const [newMessage, setNewMessage] = useState("");

  const handleAddMessage = () => {
    if (newMessage.trim() !== "") {
      dispatch(addMessage(newMessage));
      setNewMessage("");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">📩 Messages</h1>

      {/* Input */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
          className="border p-2 rounded w-full"
        />
        <button
          onClick={handleAddMessage}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      {/* List */}
      <ul className="space-y-2">
        {messages.map((msg) => (
          <li
            key={msg.id}
            className="flex justify-between items-center bg-gray-100 p-2 rounded"
          >
            <span>{msg.text}</span>
            <button
              onClick={() => dispatch(deleteMessage(msg.id))}
              className="text-red-500"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
