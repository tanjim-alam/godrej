import axios from 'axios';
import React, { useState } from 'react'

function ContactSection() {
    const api = "https://newsmtp-production.up.railway.app/";
    const [isError, setIsError] = useState(false)
    const [LeadData, setLeadData] = useState({
        name: "",
        email: "",
        number: "",
        projectName: "Goyal"
    });


    function handleOnChange(e) {
        setIsError(false)
        const { name, value } = e.target;
        setLeadData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    async function handleSubmit(e) {
        console.log("clicked")
        e.preventDefault()
        try {
            if (!LeadData.name || !LeadData.email || !LeadData.number) {
                setIsError(true)
                return
            }
            const res = await axios.post(api, LeadData)
            setIsError(false)
            if (res?.data?.success) {
                setLeadData({
                    name: "",
                    email: "",
                    number: ""
                })
                alert("Submitted Successfully")
            }
        } catch (error) {
            setIsError(true)
            throw error
        }
    }
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
                        <p className=' mt-3'>
                            Goyal & Co stands as one of the premier property development firms in the country, operating in key cities such as Ahmedabad, Mumbai, and Bangalore.
                            Establishing its legacy in real estate since 1971, this renowned brand has consistently crafted iconic living and workspaces. Garnering numerous accolades,
                            including honors from Realty+ and Silicon India Real Estate Awards, Goyal & Co is celebrated for its contributions to the industry.
                            With an impressive portfolio comprising over 300 projects in the last five decades, the company is distinguished for its innovative and sustainable developments.
                            Homebuyers trust the brand's commitment to quality and excellence, making it a highly reliable choice. Whether it's luxury apartments,
                            sky-villas, or expansive business parks, Goyal & Co has set benchmarks in both commercial and residential spaces, leaving an indelible mark on the real estate landscape.</p>
                    </div>
                    <div className=' lg:w-1/2 w-[100%] flex justify-center items-center'>
                        <form onSubmit={handleSubmit} action="" className=' flex flex-col gap-5 p-8 bg-slate-600 lg:w-[450px] w-[100%] rounded-md shadow-md'>
                            <h4 className=' text-center text-xl font-medium text-white mb-2'>Bool A Site Visit</h4>
                            <input type="text" placeholder='Name' className=' p-2 rounded outline-none' required name='name' value={LeadData.name} onChange={handleOnChange} />
                            <input type="text" name="number" id="" placeholder='Contact No.' className=' p-2 rounded outline-none' required value={LeadData.number} onChange={handleOnChange} />
                            <input type="text" placeholder='Email' className=' p-2 rounded outline-none' required name='email' value={LeadData.email} onChange={handleOnChange} />
                            <input type="text" name="message" id="" placeholder='Message' className=' p-2 rounded outline-none' />
                            <button className=' p-2 border-2 border-white rounded text-white'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactSection