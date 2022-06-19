import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidecontactbar from "../../components/sidecontactbar/Sidecontactbar";
import { BiPlanet } from "react-icons/bi";

export default function Homepage() {
  return (
    <div className="home-body">
      <Navbar></Navbar>

      <Sidecontactbar />

      <section className="flex justify-center h-auto md:h-screen p-20 mt-10">
        <div className=" mt-6 p-8 text-center text-lg uppercase md:text-3xl text-white">
          <div className="flex">
            <BiPlanet className="text-white " />
          </div>
          <h2 className="h-tag">Hello World,</h2>
          <p>My name is Gustavo and I love to code!!!</p>
          <div className="flex justify-end mt-8">
            <BiPlanet className="text-white " />
          </div>
        </div>
      </section>
    </div>
  );
}
