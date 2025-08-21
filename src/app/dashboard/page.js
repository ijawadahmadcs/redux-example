"use client";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) return null; // prevents flash before redirect

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Welcome,{" "}
          <span className="text-blue-600 dark:text-blue-400">
            {user?.email}
          </span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          This is your dashboard home. Use the sidebar to navigate.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-6 bg-blue-500 text-white rounded-2xl shadow">
          <h3 className="text-lg font-semibold">Messages</h3>
          <p className="text-3xl mt-2 font-bold">12</p>
        </div>

        <div className="p-6 bg-green-500 text-white rounded-2xl shadow">
          <h3 className="text-lg font-semibold">Reports</h3>
          <p className="text-3xl mt-2 font-bold">5</p>
        </div>

        <div className="p-6 bg-yellow-500 text-white rounded-2xl shadow">
          <h3 className="text-lg font-semibold">Settings</h3>
          <p className="text-3xl mt-2 font-bold">✓</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          Recent Activity
        </h3>
        <ul className="mt-4 space-y-3 text-gray-700 dark:text-gray-300">
          <li>📩 You received 3 new messages.</li>
          <li>📊 Report #23 was generated.</li>
          <li>⚙️ You updated your account settings.</li>
        </ul>
      </div>
    </div>
  );
}
