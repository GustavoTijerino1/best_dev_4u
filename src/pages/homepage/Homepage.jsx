import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { FaGithub, FaLinkedin, FaEnvelopeSquare } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import Marquee from "react-fast-marquee";

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
      <aside
        className="fixed inset-x-0 bottom-0  
        md:mt-20
        md:h-fit md:w-fit md:right-0 md:inset-y-0 md:left-0 
        border-4 border-indigo-500/100"
      >
        <ul
          className="md:space-y-20  md:mt-20 flex flex-row md:flex-col justify-center 
          md:space-x-0
          space-x-20 border-4 border-indigo-500/100 md:w-fit "
        >
          <li className="">
            <a
              href="https://github.com/GustavoTijerino1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                className="
                rounded-full
                h-8 w-8 mt-1  hover:animate-ping bg-white"
              />
            </a>
          </li>
          <li className="">
            <a
              href="https://www.linkedin.com/in/gustavo-tijerino-203647224/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                style={{ color: "blue" }}
                className="
                rounded
                bg-white
                h-8 w-8 
                mt-1
                hover:animate-spin"
              />
            </a>
          </li>
          <li>
            <a href="/contact" rel="noopener noreferrer">
              <FaEnvelopeSquare
                className="
                bg-white
                rounded
                h-8 w-8 mt-1
                hover:motion-safe:animate-bounce"
              />
            </a>
          </li>
        </ul>
      </aside>

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
