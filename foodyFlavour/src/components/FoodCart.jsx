import React from 'react'
import FoodData from './FoodData'
import { LiaStarSolid } from "react-icons/lia";


const FoodCart = () => {
    return (
        <div className='w-[250px] bg-[#f5f5f5] h-full flex flex-col p-5 rounded-lg'>
            <img className='h-[130px] w-auto hover:scale-105 transition-all duration-500 ease-in-out cursor-grab' src="https://img.freepik.com/free-photo/seafood-pizza_74190-5944.jpg?w=996&t=st=1693062328~exp=1693062928~hmac=53fd9ad496580db41c6ca8066510cd89c6b0a0389de8bb6b875a78a1eda09cb5" alt="" />
            <div className='flex justify-between mt-1'>
                <h3 className='font-bold'>Onion Pizza</h3>
                <span className='text-emerald-600 font-bold'>$150</span>
            </div>
            <p className='text-sm m-1' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, dolorem.</p>
            <div>
                <div className='flex justify-between items-center'>
                    <div className='flex  justify-center items-center font-bold'>
                        <LiaStarSolid color='#fccb06' />
                        <span>4.5</span>
                    </div>
                    <button className='bg-green px-2 py-1 rounded-md text-sm text-white font-bold'>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default FoodCart