import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidecontactbar from "../../components/sidecontactbar/Sidecontactbar";
import Typewriter from "typewriter-effect";

export default function Homepage() {
  return (
    <>
      <Navbar></Navbar>
      {/* <Marquee
        style={{
          pauseOnHover: true,
        }}
      >
        Hello
      </Marquee>

      <marquee behavior="" direction="">
        Hello
      </marquee> */}
      <Sidecontactbar />

      <div className="flex justify-center p-20 mt-10">
        <div
          className="border-2 border-rose-500
          bg-gradient-to-r from-purple-500 to-pink-500 
          rounded w-fit mt-10 p-8 text-center text-lg uppercase md:text-3xl"
        >
          <h2>Hello World,</h2>
          <p>My name Gustavo and I love to code!!!</p>
          <Typewriter
            options={{
              strings: ["Yo mama "],

              autoStart: true,
              loop: true,
              // deleteSpeed: 50,
            }}
          />
        </div>
      </div>
    </>
  );
}
