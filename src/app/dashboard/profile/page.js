"use client";
import { useSelector } from "react-redux";

export default function ProfilePage() {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-blue-600">Profile</h2>
      <p className="text-gray-700"><strong>Email:</strong> {user?.email}</p>
      <p className="text-gray-700"><strong>Role:</strong> User</p>
      <p className="text-gray-700"><strong>Member Since:</strong> Jan 2025</p>
    </div>
  );
}
