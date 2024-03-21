import React from 'react'
import { MdClose } from "react-icons/md";


const Cart = () => {
    return (
        <>
            <div className='w-full lg:w-[20vw] h-full p-5 bg-white fixed top-0 right-0'>
                <div className='flex justify-between items-center'>
                    <h2 className='text-3xl lg:text-xl font-bold'>My Order</h2>
                    <MdClose className='cursor-pointer border-2 rounded-md border-wood hover:bg-green hover:text-white hover:border-none text-3xl lg:text-xl' />
                </div>

                <div className='absolute bottom-0'>
                    <h1 className='font-semibold '>Items:</h1>
                    <h1 className='font-semibold '>Total Amount:</h1>
                    <hr className='w-[90vw] lg:w-[18vw] my-2' />
                    <button className='w-[90vw] lg:w-[18vw] mb-5 font-bold px-3 text-white py-2 rounded-lg bg-wood'>Checkout</button>
                </div>
            </div>
        </>
    )
}

export default Cart