import React from "react";
import { Link } from "react-router-dom";

const Page2 = () => {
  return (
    <>
      <div className="h-[100vh] flex flex-col gap-5 justify-center items-center px-4 bg-pink-200">
        <h1 className="text-4xl font-bold text-red-600 text-center">
          ASA MAN TA MAG DATE AND KAON?
        </h1>
        <div className="flex gap-2">
          <button
            className="bg-pink-500 text-white px-4 py-1 rounded-2xl cursor-pointer"
            onClick={() => {
              window.alert("MALL TA KAY KAPOY SA OVAL HAHA");
            }}
          >
            OVAL
          </button>
          <Link to="/asa-na-mall">
            <button className="bg-pink-500 text-white px-4 py-1 rounded-2xl cursor-pointer">
              MALL
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Page2;
