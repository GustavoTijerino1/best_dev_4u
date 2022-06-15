import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidecontactbar from "../../components/sidecontactbar/Sidecontactbar";

export default function Resume() {
  const resume1 = require("../../assets/img/resume1.0.png");
  const resume2 = require("../../assets/img/resume2.0.png");
  return (
    <div>
      <Navbar />
      <Sidecontactbar />
      <div className="fixed border-2 border-green-500 bottom-60 right-0 mr-10 ">
        <h1>Lets Talk!</h1>
      </div>
      <div className="border-2 border-red-500 flex justify-center  flex-col space-y-2 items-center p-4">
        <div className="w-fit border-2 border-blue-500 p-10 text-justify">
          <h1>Button to Download</h1>
        </div>
        <div className=" border-2 border-blue-500 p-10 text-justify">
          <img src={resume1} className="w-fit" alt="" />
          <img src={resume2} className="w-fit" alt="" />
        </div>
        <div className="w-fit border-2 border-blue-500 p-10 text-justify">
          <h1>Button to Download</h1>
        </div>
      </div>
    </div>
  );
}
