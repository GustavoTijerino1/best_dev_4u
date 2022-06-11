import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { FaGithub, FaLinkedin, FaEnvelopeSquare } from "react-icons/fa";

export default function Homepage() {
  return (
    <>
      <Navbar></Navbar>

      <aside className="w-64 mt-20 ">
        {/* <div class="overflow-y-auto py-4 px-3 bg-gray-50 rounded border-4 border-indigo-500/100"> */}

        <ul className="space-y-20  mt-20 fixed">
          <li className="mt-8">
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
          <li>
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
            <a
              href="http://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
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

        {/* </div> */}
      </aside>

      <div className="flex justify-center p-20 ">
        <div
          className="border-2 border-rose-500
         bg-gradient-to-r from-purple-500 to-pink-500 
        rounded w-fit mt-18 p-8 text-center text-sm"
        >
          <h3>Welcome!!</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            tempore, eos adipisci, neque, quibusdam nisi fugiat ratione
            praesentium provident autem illum est! Totam sequi repellat a
            sapiente expedita reiciendis modi?
          </p>
        </div>
      </div>
    </>
  );
}
