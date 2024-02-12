import React from "react";
import { IoIosArrowForward } from "react-icons/io";

function Dash() {
  return (
    <div className="shadow-sm my-5">
      <div className="flex ">
        <h1 className="font-bold text-2xl">Front Desk</h1>
        <div className="flex ml-6 space-x-4 pl-6">
          <div className="bg-gray-300 my-2 p-2 w-3 h-2 rounded-md"> </div>
          <h1 className="font-semibold text-2xl text-gray-500 ">Available</h1>
          <div className="bg-green-500 my-2 p-2 w-3 h-2 rounded-md"> </div>
          <h1 className="font-semibold text-2xl text-gray-500">Checked in</h1>
          <div className="bg-yellow-500 my-2 p-2 w-3 h-2 rounded-md"> </div>
          <h1 className="font-semibold text-2xl text-gray-500">Reserved</h1>
        </div>
      </div>
      <div className="flex my-2">
        <h1 className="font-semibold text-1xl text-gray-700">Lexishotel</h1>
        <div className="flex font-semibold text-1xl text-gray-500 ">
          <IoIosArrowForward className="my-1" /> <a href="/">Front Desk</a>
        </div>
      </div>
      <div className="py-2">
        <h1 className="font-bold">
          Building: <span className="text-yellow-400"> CONCREST; </span>
          Floor name: <span className="text-green-400"> THIRD FLOOR; </span>
          Total room: <span className="text-orange-500">18</span>
        </h1>
      </div>
    </div>
  );
}

export default Dash;
