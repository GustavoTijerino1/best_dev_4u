import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { MenuIcon,XIcon } from '@heroicons/react/outline'
import { FaReact } from "react-icons/fa";



export default function Navbar() {
    const [menu, setMenu] = useState(false);

    // const handleOpenNavMenu = () => {
    //     setMenu(!true)
    // }

    return (
        <>
        <header className='bg-gradient-to-r from-cyan-500 to-blue-500 
    
        flex justify-between p-3 text-white
        sm:bg-white
        '>
            <div className='flex space-x-2 '>

             <FaReact className="h-10 w-10 animate-spin"/>

            <h1 className="text-3xl font-bold underline  font-mono   hidden md:block">
                Gustavo Tijerino
            </h1>
            </div>
            <img className="h-10 w-10 rounded-full md:hidden " src="{person.imageUrl}" alt="" />

            <div className='flex justify-center '>
               
{/*                 
                <img class="h-10 w-10 rounded-full hidden md:block" src="{person.imageUrl}" alt="" /> */}

                <h1 className="text-3xl  font-mono text-center  delay-75  md:hidden">
                    G.T
                </h1>

            </div>
            <div className='md:hidden relative' >
                <button  className='' onClick={() => setMenu(!menu)}>
                {menu && (<XIcon className="h-6 w-6  animate-pulse mt-1" />)}
                          {!menu && (
                           <MenuIcon className="h-6 w-6 mt-1" />)}
                    
                </button>

                            {menu ?
                                <div className='
                                absolute 
                                right-0
                                mt-2
                                bg-white 
                                rounded-lg py-2 shadow-2xl'>
            
                                    <Link to='/' className="block px-4 py-2 text-gray-800
                                    hover:bg-blue-500" >Homepage</Link>
                                    <Link to='/' className="block 
                                    px-4 py-2 text-gray-800 hover:bg-blue-500">Bio</Link>
                                    <Link to='/' className="block px-4 py-2 text-gray-800 hover:bg-blue-500">
                                        Projects</Link>
            
                                    <a  className='block px-4 py-2 text-gray-800 hover:bg-blue-500' href="/">Resume</a>
            
                                </div> : null}
            </div>



            <div className='space-x-10 p-1 mr-5  hidden md:block'>

                <Link to='/' className=" hover:underline" >Homepage</Link>
                <Link to='/' className=" hover:underline" >Bio</Link>
                <Link to='/' className=" hover:underline" >Projects</Link>
                <a href="/">Resume</a>
            </div>

        </header >
            
                                    </>
    )
}
