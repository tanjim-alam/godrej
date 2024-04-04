import React from 'react';
import aboutImg from "../assets/aboutimg.png"

function AboutUs() {
    return (
        <div className=' w-full bg-white'>
            <div className=' w-[80%] flex justify-center items-center m-auto mt-10'>
                <div className=' w-1/2'>
                    <p className=' text-red-500 font-medium'>ABOUT US</p>
                    <h3 className=' text-3xl font-medium mt-2'>Makes your self at home and enjoy a unique experience</h3>
                    <h4 className=' mt-3 text-lg font-light'>Budigere Cross, Whitefield, Bangalore</h4>
                    <p className=' mt-3 font-thin'>
                        The Godrej Woodscapes house modern-looking residential units with the perfect combination of form and function that
                        will appeal to the most discerning eye. Budigere Cross, Whitefield East Bangalore is where Godrej Woodscapes is
                        located and it is like a tower that reflects the face of modern living in this busy township.
                        Its impressive design and specifications support numerous amenities and facilities that are present
                        in this high-end residential complex. This essence of modern living is captured in the spirit of contemporary
                        design and the natural tranquillity of the surroundings of the Godrej Woodscapes.
                        Located at Budigere Cross, this is a place that is near the major IT hubs of Whitefield, thus allowing residents to enjoy the two worlds;
                        which include the urban life as well as the suburban feel.
                    </p>
                </div>
                <div className=' h-1/2'>
                    <img src={aboutImg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default AboutUs