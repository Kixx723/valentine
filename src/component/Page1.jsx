import React from "react";
import { Link } from "react-router-dom";

const Page1 = () => {
  return (
    <>
      <div className="h-[100vh] flex flex-col gap-5 justify-center items-center px-4 bg-pink-200">
        <h1 className="text-4xl font-bold text-red-600 text-center">
          Hi! April Anne Lacar, LPT <br /> Will you be my Valentine on Feb 15,
          2025? <br /> sa 15 lang sa kay sweldo haha
        </h1>
        <div className="flex gap-2">
          <button
            className="bg-pink-500 text-white px-4 py-1 rounded-2xl cursor-pointer"
            onClick={() => {
              window.alert("BAWAL MAG NO KAY LIBRE NAKO HAHAHA");
            }}
          >
            No
          </button>
          <Link to="/asa-mangaon">
            <button className="bg-pink-500 text-white px-4 py-1 rounded-2xl cursor-pointer">
              Yes
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Page1;
