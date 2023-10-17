import React from "react";

type Props = {};

const page = (props: Props) => {
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
      </div>
    </>
  );
};

export default page;
