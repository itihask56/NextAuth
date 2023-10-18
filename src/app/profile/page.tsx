"use client"
import React from "react";
import axios from "axios"
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

type Props = {};

const page = (props: Props) => {
  const router = useRouter();
  const logOut = async()=>{

    try {
      
      await axios.get("/api/users/logout")
      toast.success("Logout Successful")
      //if the user will be successfully logged out the we will pused user to login page
      router.push("/login")
      
    } catch (error:any) {
      console.log(error.message);
      toast.error(error.meassage)
    }

  }
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-4xl mb-8">Profile</h1>
        <p className="text-4xl ">
          {" "}
          Profile Page
          <span className="p-2 ml-2 rounded bg-purple-500 text-white">
            Dev.Verma
          </span>
        </p>

        <button onClick={logOut} className="mt-8 border-4 text-2xl p-4 rounded-full  border-purple-700 hover:text-purple-700 hover:border-white duration-200">Logout</button>



      </div>
    </>
  );
};

export default page;
