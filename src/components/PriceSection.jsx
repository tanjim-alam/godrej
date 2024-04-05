import React from 'react'
import PriceCard from './PriceCard'

function PriceSection() {
    const priceCardArray = new Array(5).fill(null);
    return (
        <div className=' w-full bg-slate-100 py-10'>
            <div className=' w-[80%] m-auto pt-11'>
                <div>
                    <p className='text-red-500 font-medium text-center'>PRICE SECTION</p>
                    <h2 className=' text-center text-3xl font-medium mt-2'>Unlock the Door to Affordable Luxury</h2>
                </div>
                <div className=' grid grid-cols-3 mt-10 gap-y-6 justify-center items-center m-auto'>
                    {priceCardArray.map((_, i) => (
                        <PriceCard />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PriceSection