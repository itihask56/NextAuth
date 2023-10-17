"use client"
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
 
import Link from 'next/link'
 

type Props = {}

const LoginPage = (props: Props) => {
    const router = useRouter();
    const [user,setUser]=useState({
        email:'',
        password:"",
    })
    
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
    <div className="p-10 rounded-lg shadow-xl shadow-purple-500 flex flex-col">
      <h1 className="text-xl  font-medium mb-4">Login</h1>

      <label htmlFor="" className="mb-2">
        Email
      </label>
      <input
        type="email"
        className="p-2 border-gray-300 border-[1px] rounded-lg w-[300px] mb-4 focus:outline-none focus:border-gray-600 text-black"
        id="email"
        value={user.email}
        placeholder="Your Email"
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />

      <label htmlFor="" className="mb-2">
        Password
      </label>
      <input
        type="password"
        className="p-2 border-gray-300 border-[1px] rounded-lg w-[300px] mb-4 focus:outline-none focus:border-gray-600 text-black"
        id="password"
        value={user.password}
        placeholder="Your Password"
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <button className=" p-2 border bg-purple-600 text-white rounded-lg border-gray-300 mt-2 mb-4 focus:outline-none  focus:border-gray-600">
        Login Now
      </button>
      <Link href="/signup" className="text-sm shadow-sm shadow-purple-300 mt-5 text-neutral-600 text-center rounded-lg p-2" >Don't have an account</Link>
      <Link href="/" className="text-center mt-2">Home</Link>
       
    </div>
  </div>
  )
}

export default LoginPage