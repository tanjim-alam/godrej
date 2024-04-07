import React from 'react'
import { NavLink } from 'react-router-dom'

function MobileMenu() {
    return (
        <div className=' bg-white text-black min-h-[100vh] w-[100%]'>
            <div className=''>
                <ul className=' flex flex-col justify-between items-center gap-5'>
                    <li><NavLink>Home</NavLink></li>
                    <li><NavLink>Overview</NavLink></li>
                    <li><NavLink>Price</NavLink></li>
                    <li><NavLink>Amenties</NavLink></li>
                    <li><NavLink>Master & Floor Plans</NavLink></li>
                    <li><NavLink>Gallery</NavLink></li>
                    <li><NavLink>Location</NavLink></li>
                    <li className=' bg-red-500 p-2 rounded-3xl'><NavLink>+91 6360141698</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default MobileMenu