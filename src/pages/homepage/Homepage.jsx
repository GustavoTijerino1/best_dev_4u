import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import { FaGithub,FaLinkedin,FaEnvelopeSquare } from "react-icons/fa";

export default function Homepage() {
    return (
        <>
            <Navbar></Navbar>
            <aside className="w-64 mt-20  "  >
                {/* <div class="overflow-y-auto py-4 px-3 bg-gray-50 rounded border-4 border-indigo-500/100"> */}


                    <ul className='space-y-20  mt-10 fixed'>

                        <li>
                            <a href="https://github.com/GustavoTijerino1" target="_blank" rel="noopener noreferrer">

                            <FaGithub className="
                            rounded-full
                            h-8 w-8 mt-1  hover:animate-ping bg-white" />
                            </a>
                            </li>
                        <li>
                            <a href="https://www.linkedin.com/in/gustavo-tijerino-203647224/" target="_blank" rel="noopener noreferrer">

                            <FaLinkedin className="
                              rounded
                            bg-white
                            h-8 w-8 
                            mt-1
                            hover:animate-spin" />
                            </a>
                            </li>
                        <li>
                            <a href="http://google.com" target="_blank" rel="noopener noreferrer">

                            <FaEnvelopeSquare className="
                            bg-white
                            rounded
                            h-8 w-8 mt-1
                            hover:motion-safe:animate-bounce" />
                            </a>
                            </li>
                    </ul>
              
                {/* </div> */}
                
            </aside>

        </>
    )
}
