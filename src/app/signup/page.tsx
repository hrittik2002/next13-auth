"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast , { Toaster } from "react-hot-toast";

const SignupPage = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading , setLoading] = useState(false);
  
  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);
  const onSignup = async () => {
    try{
      setLoading(true);
      const res = await axios.post("/api/users/signup" , user);
      if(res?.data?.status === 200){
        console.log("Signup successful" + res)
        toast.success("Successfully signed up")
        router.push("/login")
      }
      else{
        console.log(res)
        toast.error("Signup Failed")
      }
      
    }
    catch(err){
      console.log(err)
      toast.error("Signup Failed")
    }
    finally{
      setLoading(false)
    }
  };
  return (
    <>
    <Toaster
  position="top-center"
  reverseOrder={false}
/>
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Signup</h1>
      <hr />
      <div>
        <label htmlFor="username">username</label>
        <input
          className="p-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600  text-black"
          type="text"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          placeholder="username"
        />
      </div>
      <div>
        <label htmlFor="email">email</label>
        <input
          className="p-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
          type="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="email"
        />
      </div>
      <div>
        <label htmlFor="password">password</label>
        <input
          className="p-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="password"
        />
      </div>
      {buttonDisabled === false ? (
        <button onClick={onSignup}>Signup here</button>
      ) : (
        <button>No Sign Up</button>
      )}

      <Link href="/login">Visit Login</Link>
    </div>
    </>
  );
};

export default SignupPage;
