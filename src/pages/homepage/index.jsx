import React from 'react'
import Navbar from '../../components/navbar'

export default function index() {
    return (
        <>
            <Navbar></Navbar>
            <aside class="w-64 mt-20" >
                <div class="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">


                    <ul className='space-y-20 text-white'>
                        <li>Github</li>
                        <li>Li</li>
                        <li>Phone</li>
                        <li>Email</li>
                    </ul>
                </div>
            </aside>
        </>
    )
}
