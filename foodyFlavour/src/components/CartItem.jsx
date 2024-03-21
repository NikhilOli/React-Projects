import React from 'react';
import { MdDelete } from "react-icons/md";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";


const CartItem = () => {
    return (
        <div className='flex items-center py-2 justify-between'>
            <div className='flex'>
                <img className='w-[50px] h-[50px] mr-4' src="https://img.freepik.com/free-photo/seafood-pizza_74190-5944.jpg?w=996&t=1693062328" alt="Margherita Pizza" />
                <div>
                    <h3>Margherita Pizza</h3>
                    <span>$130</span>
                </div>
            </div>
            <div className='flex items-center justify-end flex-col gap-1  '>
                <div className='ml-auto'>
                    <MdDelete />
                </div>
                <div className='flex items-center gap-1 juscen'>
                    <AiOutlinePlus className='cursor-pointer border-2 rounded-md border-wood hover:bg-green hover:text-white hover:border-none p-1 text-xl transition-all ease-linear  ' />
                    <span>1</span>
                    <AiOutlineMinus className='cursor-pointer border-2 rounded-md border-wood hover:bg-green hover:text-white hover:border-none p-1 text-xl transition-all ease-linear  ' />
                </div>
            </div>
        </div>
    );
};

export default CartItem;
