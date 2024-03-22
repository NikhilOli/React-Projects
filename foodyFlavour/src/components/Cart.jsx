import React, { useState } from 'react'
import { MdClose } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import CartItem from './CartItem';


const Cart = () => {
    const [activeCart, setActiveCart] = useState(true);
    return (
        <>
            <div className={`w-full lg:w-[20vw] h-full p-5 bg-white fixed top-0 right-0 z-50 ${activeCart ? 'translate-x-0' : 'translate-x-full'} transition-all duration-500 ease-in`}>
                <div className='flex justify-between items-center'>
                    <h2 className='text-3xl lg:text-xl font-bold'>My Order</h2>
                    <MdClose onClick={() => setActiveCart(!activeCart)} className='cursor-pointer border-2 rounded-md border-wood hover:bg-green hover:text-white hover:border-none text-3xl lg:text-xl' />
                </div>

                <CartItem />
                <CartItem />
                <CartItem />

                <div className='absolute bottom-0'>
                    <h1 className='font-semibold '>Items:</h1>
                    <h1 className='font-semibold '>Total Amount:</h1>
                    <hr className='w-[90vw] lg:w-[18vw] my-2' />
                    <button className='w-[90vw] lg:w-[18vw] mb-5 font-bold px-3 text-white py-2 rounded-lg bg-wood'>Checkout</button>
                </div>
            </div>
            <FaCartShopping onClick={() => setActiveCart(!activeCart)} className='bg-white rounded-full text-4xl p-2 fixed bottom-4 right-3    ' />
        </>
    )
}

export default Cart