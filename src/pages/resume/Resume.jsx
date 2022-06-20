import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidecontactbar from "../../components/sidecontactbar/Sidecontactbar";
import { Link } from "react-router-dom";

export default function Resume() {
  return (
    <div className="resume-bg ">
      <Navbar />
      <Sidecontactbar />
      <div className="flex h-auto justify-center">
        <Link to="/contact">
          <button
            className="fixed border-2 p-2 rounded-full  hover:underline 
          bg-red-500
          w-auto
          animate-bounce 
          hover:bg-green-600
          hover:text-white
          border-red-300
          hover:border-green-300
          bottom-60 right-0 mr-2  
        text-xs md:text-base "
          >
            Lets Talk!
          </button>
        </Link>
        <div className="flex   flex-col  space-y-2 items-center p-4">
          <button
            className=" 
          w-auto
          border-2 hover:border-white border-purple-500 p-2 rounded-full hover:text-white hover:underline
          text-xs md:text-base
          bg-purple-200 hover:bg-purple-700"
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
          <figure className="  ">
            <img
              src="https://cdn.discordapp.com/attachments/948081994720505896/987210735824298014/unknown.png"
              className="max-w-full h-auto"
              alt=""
            />
          </figure>

          <button
            className=" 
          w-auto
       
          hover:border-white 
          border-2 border-purple-500 p-2 rounded-full hover:text-white hover:underline
          text-xs md:text-base
          bg-purple-200 hover:bg-purple-700"
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
    </div>
  );
}
