"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast';
import axios from 'axios'

export default function SignupPage(){
  const router = useRouter();

    const [user,setUser]=useState({
        name:"",
        email:"",
        password:"",
       

    })

  //check wheather user has filled user details or not. if the user is not filled his details then
  //button will be disabled if yes then button will be enabled 
    const[buttonDisabled, setButtonDisabled]=useState(false)
    useEffect(()=>{
      if(user.email.length>0 && user.password.length>0 && user.name.length>0){
        setButtonDisabled(false);
      }
      else{
        setButtonDisabled(true);
      }
    },[user]);
/*----------------------------------------------------------- */
    const [loading, setLoading]=useState(false);
    const onSignup = async()=>{
      try {
        setLoading(true)
        const response = await axios.post("/api/users/signup",user)
        console.log("Signup Succsess ",response.data)
        router.push("/login")
      } catch (error:any) {
        console.log("Signup failed",error.message);
        
        toast.error(error.message);
      }
      finally{
        setLoading(false);
      }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <div className="p-10 rounded-lg shadow-xl shadow-purple-500 flex flex-col">
          <h1 className="text-xl  font-medium mb-4">{loading? "Processing":"SignUP"}</h1>
          <label htmlFor="" className="mb-2">
            Name
          </label>
          <input
            type="text"
            className="p-2 border-gray-300 border-[1px] rounded-lg w-[300px] mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="text"
            value={user.name}
            placeholder="Your Name"
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
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
          <button onClick={onSignup} className=" p-2 border bg-purple-600 text-white rounded-lg border-gray-300 mt-2 mb-4 focus:outline-none  focus:border-gray-600">
             {buttonDisabled ?"no submit":"Sbmit"}
          </button>
          <Link href="/login" className="text-sm shadow-sm shadow-purple-300 mt-5 text-neutral-600 text-center rounded-lg p-2" >Already have an account</Link>
        <Link href="/" className="text-center mt-2">Home</Link>
          
          
           
        </div>
      </div>
    )
}

