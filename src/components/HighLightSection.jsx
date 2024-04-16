import React from 'react';
import { MdOutlineHomeWork } from "react-icons/md";
import orchodHighlghts from "../assets/orchod-highlghts1.webp"

function HighLightSection() {
    return (
        <div className=' w-full bg-white'>
            <div className=' w-[100%] flex flex-col-reverse gap-10 lg:gap-0 lg:flex-row lg:w-[80%] justify-center items-center m-auto my-10 border-t border-black pt-20'>
                <div className=' lg:w-1/2 w-[100%] p-7 lg:p-0'>
                    <img className=' w-full h-[400px] rounded-md shadow-xl' src={orchodHighlghts} alt="" />
                </div>
                <div className=' lg:w-1/2 w-[90%] md:w-[100%] m-auto lg:pl-20 pl-0'>
                    <p className=' text-red-500 font-medium'>HIGHLIGHTS</p>
                    <h2 className=' text-3xl font-medium mt-2'>Discover the Finest Features and Finishes</h2>
                    <div className='flex  flex-col gap-4 mt-4'>
                        <div className=' flex items-center gap-3'>
                            <span className=' text-2xl text-red-500'><MdOutlineHomeWork /></span>
                            <p>75% Of The Area Is Dedicated To Open Space.</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <span className=' text-2xl text-red-500'><MdOutlineHomeWork /></span>
                            <p>Expansive Landscapes Offer State-of-the-art Amenities Throughout The Project.</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <span className=' text-2xl text-red-500'><MdOutlineHomeWork /></span>
                            <p>Environmentally Conscious Design Elements Incorporated.</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <span className=' text-2xl text-red-500'><MdOutlineHomeWork /></span>
                            <p>Strategic Location Ensuring Connectivity To Key Areas.</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <span className=' text-2xl text-red-500'><MdOutlineHomeWork /></span>
                            <p>Dedicated Areas For Fitness And Wellness Activities.</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <span className=' text-2xl text-red-500'><MdOutlineHomeWork /></span>
                            <p>Emphasis On Natural Lighting And Ventilation In All Spaces.</p>
                        </div>
                        {/* <div className='flex items-center gap-3'>
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
                        </div> */}








                    </div>
                </div>
            </div>
        </div>
    )
}

export default HighLightSection