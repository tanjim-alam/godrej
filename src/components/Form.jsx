import React from 'react'

function Form() {
    return (
        <div>
            <form action="" className=' flex flex-col gap-5 p-4 bg-slate-500 w-[350px]'>
                <h4 className=' text-center text-xl font-medium text-white mb-2'>Bool A Site Visit</h4>
                <input type="text" placeholder='Name' className=' p-2 rounded outline-none' required />
                <input type="text" name="" id="" placeholder='Contact No.' className=' p-2 rounded outline-none' required />
                <input type="text" placeholder='Email' className=' p-2 rounded outline-none' required />
                <input type="text" name="" id="" placeholder='Message' className=' p-2 rounded outline-none' required />
                <button className=' p-2 border-2 border-white rounded text-white'>Submit</button>
            </form>
        </div>
    )
}

export default Form