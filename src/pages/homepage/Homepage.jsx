import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidecontactbar from "../../components/sidecontactbar/Sidecontactbar";
// import Typewriter from "typewriter-effect";

export default function Homepage() {
  return (
    <>
      <Navbar></Navbar>

      <Sidecontactbar />

      <section className="flex justify-center p-20 mt-10">
        <div className=" mt-10 p-8 text-center text-lg uppercase md:text-3xl text-white">
          <h2 className="h-tag">Hello World,</h2>
          <p>My name is Gustavo and I love to code!!!</p>
        </div>
      </section>
    </>
  );
}
