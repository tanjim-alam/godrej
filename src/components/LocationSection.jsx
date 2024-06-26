import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import map1 from "../assets/map1.webp"

function LocationSection() {
    return (
        <div className=' w-full bg-white'>
            <div className=' lg:w-[80%] w-[100%] flex flex-col lg:flex-row justify-center items-center m-auto my-10 pt-20'>
                <div className=' lg:w-1/2 w-[100%] lg:pl-20 p-4'>
                    <p className=' text-red-500 font-medium text-center'>LOCATION ADVANTAGES</p>
                    <h2 className=' text-3xl font-medium mt-2'>Discover Your Perfect Place in the Perfect Location</h2>
                    <div className='flex  flex-col gap-4 mt-4'>
                        <div className=' flex items-center gap-3'>
                            <span className=' text-2xl text-red-500'><FaLocationDot /></span>
                            <p>Cessna Business Park</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <span className=' text-2xl text-red-500'><FaLocationDot /></span>
                            <p>Cessna Business Park</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <span className=' text-2xl text-red-500'><FaLocationDot /></span>
                            <p>Croma Sarjapura Road</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <span className=' text-2xl text-red-500'><FaLocationDot /></span>
                            <p>Bagmane Constellation Business Park</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <span className=' text-2xl text-red-500'><FaLocationDot /></span>
                            <p>The Forum Neighbourhood Mall</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <span className=' text-2xl text-red-500'><FaLocationDot /></span>
                            <p>Manipal Hospital Varthur</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <span className=' text-2xl text-red-500'><FaLocationDot /></span>
                            <p>Kadugodi Tree Park Metro Station</p>
                        </div>
                    </div>
                </div>
                <div className='lg:w-1/2 w-[100%] p-4'>
                    <img className=' w-full h-[350px] border-8 border-slate-500 rounded-md shadow-xl blur-[5px]' src={map1} alt="" />
                </div>
            </div>
        </div>
    )
}

export default LocationSection