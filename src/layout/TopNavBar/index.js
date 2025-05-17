import React from 'react';
import home from "../../Assets/png/Home.png"

const Topbar = () => {
  return (
    <header className="flex justify-end items-center bg-white shadow px-6 py-4 h-20">      
      <div className="flex items-center gap-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Add Branch
        </button>
        <div
                className="size-11 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold"
                style={{ width: "44px", height: "44px" }}
              >
                A
              </div>
      </div>
    </header>
  );
};

export default Topbar;
