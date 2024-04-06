import React from 'react'
import Form from './Form'

function ContactSection() {
    return (
        <div className=' w-full bg-slate-100'>
            <div className=' lg:w-[80%] w-[100%] flex flex-col justify-center items-center m-auto mt-10 py-10 p-5 lg:p-5'>
                <div>
                    <p className=' text-red-500 font-medium text-center'>CONTACT US</p>
                    <h2 className=' text-3xl font-medium mt-2'>Discover Your Perfect Place in the Perfect Location</h2>
                </div>
                <div className=' flex flex-col gap-9 lg:gap-0 lg:flex-row mt-10'>
                    <div className='lg:w-1/2 w-[100%]'>
                        <h2 className=' text-2xl font-medium'>About Developer</h2>
                        <p className=' mt-3'>Godrej Properties brings the Godrej Group philosophy of innovation and excellence to the real estate industry.
                            The company is currently developing landmark projects in 12 cities across India. Established in 1990, Godrej Properties Limited is the first real estate company to have ISO certification.
                            With projects that span across the country, the company's upcoming development covers over 8 million square meters.</p>
                    </div>
                    <div className=' lg:w-1/2 w-[100%] flex justify-center items-center'>
                        <form action="" className=' flex flex-col gap-5 p-8 bg-slate-600 lg:w-[450px] w-[100%] rounded-md shadow-md'>
                            <h4 className=' text-center text-xl font-medium text-white mb-2'>Bool A Site Visit</h4>
                            <input type="text" placeholder='Name' className=' p-2 rounded outline-none' required />
                            <input type="text" name="" id="" placeholder='Contact No.' className=' p-2 rounded outline-none' required />
                            <input type="text" placeholder='Email' className=' p-2 rounded outline-none' required />
                            <input type="text" name="" id="" placeholder='Message' className=' p-2 rounded outline-none' required />
                            <button className=' p-2 border-2 border-white rounded text-white'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactSection