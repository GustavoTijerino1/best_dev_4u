import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidecontactbar from "../../components/sidecontactbar/Sidecontactbar";
export default function About() {
  return (
    <>
      <Navbar></Navbar>

      <Sidecontactbar />

      <div className="border-2 border-red-500 flex justify-center mt-20 flex-col space-y-4 items-center p-20">
        <div className="w-fit border-2 border-blue-500 p-10 text-justify rounded-full h-60 w-60">
          <h1>ANIMATED PIC OF ME</h1>
        </div>
        <div className="w-fit border-2 border-blue-500 p-10 text-justify">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            dolores voluptatum sunt ducimus aut. Eveniet quo tenetur autem, nisi
            amet ipsum adipisci, magnam quia accusamus omnis illum cupiditate
            officiis facilis.
          </p>
        </div>
        <div className="w-fit border-2 border-blue-500 p-10 text-justify">
          <h1>COOL ANIMATION SHOWING SKILLS</h1>
        </div>
      </div>
    </>
  );
}
