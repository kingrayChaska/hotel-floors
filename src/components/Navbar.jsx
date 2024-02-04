import React from "react";

function Navbar() {
  return (
    <div className="shadow-md">
      <div className="flex justify-between m-4 items-center">
        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 border-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </a>
        <div className="pb-1">
          <img
            className="w-16 rounded-full bg-gradient-to-r from-purple-300 to-pink-500"
            src="https://i.imgur.com/4U5tBXC.png"
            alt="profile"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
