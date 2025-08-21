"use client";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/redux/slices/authSlice";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiHome, FiUser, FiSettings, FiMessageSquare, FiBarChart2, FiLogOut } from "react-icons/fi";

export default function DashboardLayout({ children }) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const pathname = usePathname();

  const menuItems = [
    { name: "Home", path: "/dashboard", icon: <FiHome /> },
    { name: "Profile", path: "/dashboard/profile", icon: <FiUser /> },
    { name: "Settings", path: "/dashboard/settings", icon: <FiSettings /> },
    { name: "Messages", path: "/dashboard/messages", icon: <FiMessageSquare /> },
    { name: "Reports", path: "/dashboard/reports", icon: <FiBarChart2 /> },
  ];

  return (
    <div className="min-h-screen flex bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      
      {/* Sidebar */}
      <aside className="w-64 bg-blue-600 text-white p-6 space-y-6 hidden md:block">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
        <nav className="flex flex-col space-y-3">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center gap-2 px-3 py-2 rounded 
                ${pathname === item.path ? "bg-blue-800" : "hover:bg-blue-700"}`}
            >
              {item.icon} {item.name}
            </Link>
          ))}
        </nav>
        <button
          onClick={() => dispatch(logout())}
          className="flex items-center gap-2 bg-red-500 px-4 py-2 rounded hover:bg-red-600 mt-6 w-full"
        >
          <FiLogOut /> Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        {/* Top Navbar */}
        <header className="flex justify-between items-center bg-white dark:bg-gray-800 p-4 shadow">
          <h2 className="text-xl font-semibold">Welcome, {user?.email || "Guest"} </h2>
          <button
            onClick={() => dispatch(logout())}
            className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 md:hidden"
          >
            Logout
          </button>
        </header>

        {/* Page Content */}
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
}
