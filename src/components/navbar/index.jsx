import { Fragment } from 'react'
import { Link } from 'react-router-dom'



export default function index() {
    return (
        <div className='bg-gray-800 shadow-2xl flex justify-between p-3 text-white'>

            <img class="h-10 w-10 rounded-full" src="{person.imageUrl}" alt="" />
            <div className='flex justify-center'>

                <h1 className="text-3xl font-bold underline  font-mono hover:animate-spin delay-75 hidden md:block">
                    Gustavo Tijerino
                </h1>
            </div>
            <div className='space-x-10  p-1 mr-5 '>

                <Link to='/' className=" hover:underline" >Homepage</Link>
                <Link to='/' className=" hover:underline" >Bio</Link>
                <Link to='/' className=" hover:underline" >Projects</Link>
            </div>

        </div>
    )
}
