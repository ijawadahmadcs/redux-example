"use client";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme, toggleNotifications } from "@/redux/slices/settingSlice";

export default function SettingsPage() {
  const dispatch = useDispatch();
  const { theme, notificationsEnabled } = useSelector(
    (state) => state.settings
  );

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Settings</h1>

      {/* Theme Toggle */}
      <div className="flex items-center justify-between p-4 bg-white shadow rounded">
        <span className="text-lg">Theme</span>
        <button
          onClick={() => dispatch(toggleTheme())}
          className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
        >
          {theme === "light" ? "Dark" : "Light"}
        </button>
      </div>

      {/* Notifications Toggle */}
      <div className="flex items-center justify-between p-4 bg-white shadow rounded">
        <span className="text-lg">Notifications</span>
        <button
          onClick={() => dispatch(toggleNotifications())}
          className={`px-4 py-2 rounded ${
            notificationsEnabled
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-gray-400"
          } text-white`}
        >
          {notificationsEnabled ? "Enabled" : "Disabled"}
        </button>
      </div>
    </div>
  );
}
