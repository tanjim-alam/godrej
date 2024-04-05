import React from 'react'
import { FaLocationDot } from "react-icons/fa6";

function LocationSection() {
    return (
        <div className=' w-full bg-white'>
            <div className=' w-[80%] flex justify-center items-center m-auto my-10 pt-20'>
                <div className=' w-1/2 pl-20'>
                    <p className=' text-red-500 font-medium'>LOCATION ADVANTAGES</p>
                    <h2 className=' text-3xl font-medium mt-2'>Discover Your Perfect Place in the Perfect Location</h2>
                    <div className='flex  flex-col gap-4 mt-4'>
                        <div className=' flex items-center gap-3'>
                            <span className=' text-2xl text-red-500'><FaLocationDot /></span>
                            <p>Whitefield Metro Station - 9.2 km</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <span className=' text-2xl text-red-500'><FaLocationDot /></span>
                            <p>KR Puram Railway Station - 10 km</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <span className=' text-2xl text-red-500'><FaLocationDot /></span>
                            <p>Brigade Signature Towers - 1.2 km</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <span className=' text-2xl text-red-500'><FaLocationDot /></span>
                            <p>Bearys Global Research - 2.3 km</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <span className=' text-2xl text-red-500'><FaLocationDot /></span>
                            <p>Proposed Iblur Metro Station – 15 mins drive time*</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <span className=' text-2xl text-red-500'><FaLocationDot /></span>
                            <p>Orion Uptown Mall 1.6 km</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <span className=' text-2xl text-red-500'><FaLocationDot /></span>
                            <p>Taj Vivanta 10.8 km</p>
                        </div>
                    </div>
                </div>
                <div className=' w-1/2'>
                    <img className=' w-full h-[350px] border-8 border-slate-500 rounded-md shadow-xl' src="https://godrejsbangalore.com/godrej-bengal-lamps/img/location.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default LocationSection