import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidecontactbar from "../../components/sidecontactbar/Sidecontactbar";

export default function Resume() {
  // const resume = require("../../assets/img/G.M.T.png");

  return (
    <div>
      <Navbar />
      <Sidecontactbar />
      <div className="fixed border-2 border-green-500 bottom-60 right-0 mr-2  ">
        <h1>Lets Talk!</h1>
      </div>
      <div className="border-2 border-red-500 flex justify-center  flex-col space-y-2 items-center p-4">
        <div className="w-fit border-2 border-blue-500 p-10 text-justify">
          <a
            className="hover:underline"
            rel="noreferrer"
            href="  https://docs.google.com/document/d/1tLv9REAxBM-w8b7GNel2XYWGM7Pbz-Z2jMlXjFFQlys/export?format=pdf"
            download
          >
            <button>Download Resume</button>
          </a>
        </div>
        <div className=" border-2 border-blue-500 p-10 text-justify">
          <img
            src="https://cdn.discordapp.com/attachments/948081994720505896/987210735824298014/unknown.png"
            className="w-fit"
            alt=""
          />
        </div>
        <div className="w-fit border-2 border-blue-500 p-10 text-justify">
          <a
            className="hover:underline"
            rel="noreferrer"
            href="  https://docs.google.com/document/d/1tLv9REAxBM-w8b7GNel2XYWGM7Pbz-Z2jMlXjFFQlys/export?format=pdf"
            download
          >
            <button>Download Resume</button>
          </a>
        </div>
      </div>
    </div>
  );
}
