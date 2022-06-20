import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidecontactbar from "../../components/sidecontactbar/Sidecontactbar";
import { BiPlanet } from "react-icons/bi";

export default function Homepage() {
  return (
    <div className="home-bg">
      <Navbar></Navbar>

      <Sidecontactbar />

      <section className="flex justify-center h-auto md:h-screen p-20 ">
        <div className=" mt-20 md:mt-10 p-8 text-center text-lg uppercase md:text-3xl text-white">
          <BiPlanet className="text-white mb-6" />
          <div className="flex justify-center flex-col items-center space-y-2 text-white">
            <h2 className=" w-fit bg-gradient-to-br from-purple-800 to-grey-500">
              Hello World,
            </h2>
            <p className=" w-80 bg-gradient-to-br from-purple-800 to-grey-500 ">
              My name is Gustavo and I love to code!!!
            </p>
          </div>
          <div className="flex justify-end mt-8">
            <BiPlanet className="text-white " />
          </div>
        </div>
      </section>
    </div>
  );
}
