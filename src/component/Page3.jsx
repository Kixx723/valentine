import React from "react";
import { Link } from "react-router-dom";

const Page3 = () => {
  return (
    <>
      <div className="h-[100vh] flex flex-col gap-5 justify-center items-center px-4 bg-pink-200">
        <h1 class="text-4xl font-bold text-red-600 text-center">
          ASA NA MALL?
        </h1>
        <div className="flex gap-3">
          <Link to="/thanks">
            <img
              src="data:image/png;base64,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"
              alt="KCC"
              className="h-40 w-40 rounded-2xl cursor-pointer"
            />
          </Link>
          <Link to="/thanks">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSPOXIvgE_LR_tEIgWOxQG3OCBPxfDK6KcdUBpS2bke_ZXxQAWcE9agGYpPVy-b2WFyQg&usqp=CAU"
              alt="SM"
              className="h-40 w-40 rounded-2xl cursor-pointer"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Page3;
