"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const SignupPage = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });
  const onSignup = async() => {

  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Signup</h1>
      <hr />
      <div>
        <label htmlFor="username">username</label>
        <input
          className="p-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
          type="text"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          placeholder="username"
        />
      </div>
      <div>
        <label htmlFor="email">email</label>
        <input
          className="p-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
          type="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="email"
        />
      </div>
      <div>
        <label htmlFor="password">password</label>
        <input
          className="p-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="password"
        />
      </div>
      <button
      onClick={onSignup}
      >Signup here</button>
      <Link href="/login">Visit Login</Link>
    </div>
  );
};

export default SignupPage;
