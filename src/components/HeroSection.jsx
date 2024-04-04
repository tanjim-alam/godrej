import React from 'react'
import { NavLink } from 'react-router-dom';
import Form from './Form';
import "../styles/home.css"

function HeroSection() {
    return (
        <div className=' w-full h-[100vh] heroSection' >
            <div className=' w-[80%] p-5 flex justify-between items-center m-auto text-white'>
                <div>
                    <h4>GODREJ PROPERTIES</h4>
                </div>
                <div>
                    <ul className=' flex justify-between items-center gap-5'>
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
            <div className='w-full h-[88vh] flex justify-center items-center'>
                <div className=' w-[80%] m-auto flex justify-between '>
                    <div className=' flex flex-col gap-2'>
                        <p className=' text-yellow-600'>BUDIGERE CROSS, WHITEFIELD, BANGALORE</p>
                        <h2 className=' text-4xl font-semibold text-white'>GODREJ WOODSCAPES</h2>
                        <div className=' mt-2 flex-col gap-2 flex text-white '>
                            <p className='bg-gray-800 w-fit p-1'>EOI Window Open</p>
                            <p className='bg-gray-800 w-fit p-1'>Pre-Book By Paying ₹5 Lacs</p>
                            <p className='bg-gray-800 w-fit p-1'>Phase 1 - 7 Towers</p>
                        </div>
                        <h3 className=' border-2 border-white text-white py-2 px-8 rounded-full w-fit '>3, 3.5 & 4 BHK Apartments</h3>
                        <h3 className=' border-2 border-white text-white py-2 px-8 rounded-full w-fit '>Starting Price : ₹ 1.56 Cr*</h3>
                        <button className=' bg-red-500 w-fit py-2 px-4 mt-3 text-white rounded-full'>Download Brochure</button>
                    </div>
                    <div>
                        <Form />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection