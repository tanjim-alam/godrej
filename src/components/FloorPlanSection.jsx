import React from 'react'
import FloorPlanCard from './FloorPlanCard'

function FloorPlanSection() {
    const floorplanData = [
        {
            id: 1,
            floorType: "2 BHK",
            image: "https://godrejsbangalore.com/godrej-bengal-lamps/img/floor-plans/floorplan-min-1.jpg"
        },
        {
            id: 2,
            floorType: "3 BHK",
            image: "https://godrejsbangalore.com/godrej-bengal-lamps/img/floor-plans/floorplan-min-1.jpg"
        },
        {
            id: 3,
            floorType: "3.5 BHK",
            image: "https://godrejsbangalore.com/godrej-bengal-lamps/img/floor-plans/floorplan-min-1.jpg"
        },
    ]
    return (
        <div className=' w-full bg-slate-100 py-10'>
            <div className=' w-[80%] m-auto'>
                <div>
                    <p className='text-red-500 font-medium text-center'>FLOOR PLANS</p>
                    <h2 className=' text-center text-3xl font-medium mt-2'>Your Vision, Our Floor Plans</h2>
                </div>
                <div className=' mt-10 grid grid-cols-3 gap-5'>
                    {floorplanData.map((data, i) => (
                        <FloorPlanCard key={i} floorType={data.floorType} floorImage={data.image} />
                    ))}
                </div>
                {/* <FloorPlanCard /> */}
            </div>
        </div>
    )
}

export default FloorPlanSection