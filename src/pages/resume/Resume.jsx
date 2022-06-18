import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidecontactbar from "../../components/sidecontactbar/Sidecontactbar";
import { Link } from "react-router-dom";

export default function Resume() {
  return (
    <div className="resume-bg">
      <Navbar />
      <Sidecontactbar />
      <Link to="/contact">
        <button
          className="fixed border-2 p-2 rounded-full hover:bg-blue-600 hover:underline bottom-60 right-0 mr-2  
        text-sm md:text-base "
        >
          Lets Talk!
        </button>
      </Link>
      <div className="h-screen md:h-full flex justify-center  flex-col space-y-2 items-center p-4">
        <div className="border-2 p-2 rounded-full">
          <a
            className="hover:underline"
            rel="noreferrer"
            href="  https://docs.google.com/document/d/1tLv9REAxBM-w8b7GNel2XYWGM7Pbz-Z2jMlXjFFQlys/export?format=pdf"
            download
          >
            <button className="text-sm md:text-base">Download Resume</button>
          </a>
        </div>
        <div className=" border-2 border-blue-500 p-10 text-justify">
          <img
            src="https://cdn.discordapp.com/attachments/948081994720505896/987210735824298014/unknown.png"
            className="w-fit"
            alt=""
          />
        </div>

        <button
          className="hover:animate-pulse 
          border-2 p-2 rounded-full hover:bg-blue-600 hover:underline
          text-sm md:text-base"
        >
          <a
            className=""
            rel="noreferrer"
            href="  https://docs.google.com/document/d/1tLv9REAxBM-w8b7GNel2XYWGM7Pbz-Z2jMlXjFFQlys/export?format=pdf"
            download
          >
            Download Resume
          </a>
        </button>
      </div>
    </div>
  );
}
