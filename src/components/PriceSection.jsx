import React from 'react'
import PriceCard from './PriceCard'

function PriceSection({ handleOpenModel }) {

    const priceCardArray = new Array(5).fill(null);
    const priceCardData = [
        {
            id: 1,
            label: "2 BHK Compact",
            price: "99 Lacs*",
            size: "811 - 923 Sq.ft."
        },
        {
            id: 2,
            label: "2 BHK Regular",
            price: "1.25 Cr* Onwards",
            size: "1194-1250 Sq.ft."
        },
        {
            id: 3,
            label: "3 BHK + 2T",
            price: "1.6 Cr* Onwards",
            size: "1464-1496 Sq.ft."
        },
        {
            id: 4,
            label: "3 BHK",
            price: "₹ 1.9 Cr* Onwards*",
            size: "1709-1863 Sq.ft."
        },

    ]
    return (
        <div className=' w-full bg-slate-100 py-10 px-4 lg:px-0'>
            <div className=' lg:w-[80%] w-[100%] m-auto pt-11'>
                <div>
                    <p className='text-red-500 font-medium text-center'>PRICE SECTION</p>
                    <h2 className=' text-center text-3xl font-medium mt-2'>Unlock the Door to Affordable Luxury</h2>
                </div>
                <div className=' lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 md:ml-5 flex flex-col mt-10 gap-y-6 justify-center items-center m-auto'>
                    {priceCardData.map((item, i) => (
                        <PriceCard label={item.label} price={item.price} size={item.size} openFormModel={handleOpenModel} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PriceSection