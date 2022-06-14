import React from "react";
import Navbar from "../../components/navbar/Navbar";
export default function Resume() {
  return (
    <div>
      <Navbar />
      <div className="border-2 border-red-500 flex justify-center  flex-col space-y-2 items-center p-4">
        <div className="w-fit border-2 border-blue-500 p-10 text-justify">
          <h1>Button to Download</h1>
        </div>
        <div className="w-fit h-screen border-2 border-blue-500 p-10 text-justify">
          <h1>RESUME</h1>
        </div>
        <div className="w-fit border-2 border-blue-500 p-10 text-justify">
          <h1>Button to Download</h1>
        </div>
      </div>
    </div>
  );
}
