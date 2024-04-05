import React from 'react';
import { MdOutlineHomeWork } from "react-icons/md";

function HighLightSection() {
    return (
        <div className=' w-full bg-white'>
            <div className=' w-[80%] flex justify-center items-center m-auto my-10 border-t border-black pt-20'>
                <div className=' w-1/2'>
                    <img className=' w-full h-[400px] rounded-md shadow-xl' src="https://godrejsbangalore.com/godrej-bengal-lamps/img/highlights1.jpg" alt="" />
                </div>
                <div className=' w-1/2 pl-20'>
                    <p className=' text-red-500 font-medium'>HIGHLIGHTS</p>
                    <h2 className=' text-3xl font-medium mt-2'>Discover the Finest Features and Finishes</h2>
                    <div className='flex  flex-col gap-4 mt-4'>
                        <div className=' flex items-center gap-3'>
                            <span className=' text-2xl text-red-500'><MdOutlineHomeWork /></span>
                            <p>85% Of open space</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <span className=' text-2xl text-red-500'><MdOutlineHomeWork /></span>
                            <p>Land Parcel: 28.15 Acres</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <span className=' text-2xl text-red-500'><MdOutlineHomeWork /></span>
                            <p>Homes Around 1500+ Trees</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <span className=' text-2xl text-red-500'><MdOutlineHomeWork /></span>
                            <p>Rooftop Swimming Pool</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <span className=' text-2xl text-red-500'><MdOutlineHomeWork /></span>
                            <p>Only 4 units per floor</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <span className=' text-2xl text-red-500'><MdOutlineHomeWork /></span>
                            <p>Walkaway through the forest</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <span className=' text-2xl text-red-500'><MdOutlineHomeWork /></span>
                            <p>Separate Lifts for each Flat</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <span className=' text-2xl text-red-500'><MdOutlineHomeWork /></span>
                            <p>G+3 Clubhouse of 65000+ sq ft</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <span className=' text-2xl text-red-500'><MdOutlineHomeWork /></span>
                            <p>3 lakhs sqft of retail convenience</p>
                        </div>








                    </div>
                </div>
            </div>
        </div>
    )
}

export default HighLightSection