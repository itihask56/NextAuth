import React from 'react'

 

const page = ({params}:any) => {
  return (
     <>
     <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1>Profile</h1>
        <p className='text-4xl '> Profile Page
        <span className="p-2 ml-2 rounded bg-purple-500 text-white">{params.id}</span>
        </p>
       

     </div>
     </>
  )
}

export default page