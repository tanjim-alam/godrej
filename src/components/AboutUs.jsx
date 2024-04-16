import React from 'react';
import aboutImg from "../assets/aboutimg.png"

function AboutUs() {
    return (
        <div className=' w-full bg-white pt-36 lg:pt-0 md:pt-0'>
            <div className=' lg:w-[80%] p-5 lg:p-0  w-[100%] flex flex-col lg:flex-row justify-center items-center m-auto mt-10'>
                <div className=' lg:w-1/2 w-full'>
                    <p className=' text-red-500 font-medium'>ABOUT US</p>
                    <h3 className=' text-3xl font-medium mt-2'>Makes your self at home and enjoy a unique experience</h3>
                    <h4 className=' mt-3 text-lg font-light'>Gunjur Palya, Bangalore</h4>
                    <p className=' mt-3 font-thin'>
                        Orchid Life by Goyal & Co Hariyana Group is a new residential high-rise apartment project nestled in the vibrant locale of Gunjur,
                        Varthur, within the burgeoning landscape of East Bangalore. This meticulously crafted project offers an array of 2 and 3 BHK apartments
                        that blend modernity with comfort, aiming to cater to the diverse needs and preferences of its prospective residents.
                        Orchid Life, an expansive residential project, is gracefully situated across 7.2 acres of lush land.
                        Comprising a total of 750 units distributed across 5 towers, this development boasts an architectural marvel with a structure encompassing 2 basements, a ground floor, and 25 floors.
                    </p>
                </div>
                <div className=' w-full h-1/2 mt-8 lg:mt-0'>
                    <img src={aboutImg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default AboutUs