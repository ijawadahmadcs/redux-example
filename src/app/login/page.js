"use client";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "@/redux/slices/authSlice";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isAuthenticated, user, error } = useSelector((state) => state.auth);
  const router = useRouter();

  const handleLogin = () => {
    if (email && password) {
      dispatch(login({ email, password }));
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/dashboard"); 
    }
  }, [isAuthenticated, router]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {!isAuthenticated ? (
        <div className="p-6 border rounded-lg shadow-lg w-80">
          <h2 className="text-xl mb-4 text-center">Login</h2>
          <input
            type="email"
            placeholder="Email"
            className="border p-2 w-full mb-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="border p-2 w-full mb-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="text-red-500 mb-2">{error}</p>}
          <button
            onClick={handleLogin}
            className="bg-pink-500 text-white p-2 w-full rounded"
          >
            Login
          </button>
        </div>
      ) : (
        <p>Redirecting...</p>
      )}
    </div>
  );
}
