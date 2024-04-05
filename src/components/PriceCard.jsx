import React from 'react'

function PriceCard() {
    return (
        <div className=' bg-white w-fit flex flex-col items-center py-16 px-12 rounded-xl shadow-lg'>
            <h3 className=' border border-black  py-2 px-16 rounded-full'>3 BHK Premium</h3>
            <h3 className=' mt-4 text-xl font-medium'>₹ 1.56 Cr* Onwards</h3>
            <div className=' flex mt-4 gap-6 border-b px-6 pb-1 border-black'>
                <p>Size</p>
                <p>1700 Sq.ft.</p>
            </div>
            <button className=' bg-red-500 mt-6 text-white py-2 px-6 rounded-full'>Enquiry Now</button>
        </div>
    )
}

export default PriceCard