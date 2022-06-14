import React from "react";
import Navbar from "../../components/navbar/Navbar";

export default function Projects() {
  return (
    <div>
      <Navbar />

      <div className="border-2 border-red-500 flex justify-center flex-row space-x-4  flex-wrap p-4 items-center h-screen">
        <div className="w-fit border-2 border-blue-500 p-10 text-justify">
          <h1>Project</h1>
        </div>
        <div className="w-fit border-2 border-blue-500 p-10 text-justify">
          <h1>Project</h1>
        </div>
        <div className="w-fit border-2 border-blue-500 p-10 text-justify">
          <h1>Project</h1>
        </div>
        <div className="w-fit border-2 border-blue-500 p-10 text-justify">
          <h1>Project</h1>
        </div>
      </div>
    </div>
  );
}
