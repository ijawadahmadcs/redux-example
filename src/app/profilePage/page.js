"use client";
import React from "react";
import { useSelector } from "react-redux";

export default function ProfilePage() {
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  if (!isAuthenticated) {
    return <p className="p-6 text-red-500">⚠️ Please login to see profile</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">User Profile</h1>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow">
        <p><strong>Email:</strong> {user?.email}</p>
        <p><strong>Role:</strong> Admin</p>
        <p><strong>Status:</strong> Logged In </p>
      </div>
    </div>
  );
}
