import React from 'react'
import { LiaStarSolid } from "react-icons/lia";
import { add } from '../store/cartSlice';
import { useDispatch } from 'react-redux';



const FoodCart = ({ id, rating, price, img, name, desc, category }) => {
    const dispatch = useDispatch();
    return (
        <div key={id} className='w-[250px] bg-[#f5f5f5] h-full flex flex-col p-5 rounded-lg lg:max-h-[30vw] overflow-hidden'>
            <img className='h-[130px] w-auto hover:scale-105 transition-all duration-500 ease-in-out cursor-grab' src={img} alt="" />
            <div className='flex justify-between mt-1'>
                <h3 className='font-bold'>{name}</h3>
                <span className='text-emerald-600 font-bold'>${price}</span>
            </div>
            <p className='text-sm m-1' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto....</p>
            <div>
                <div className='flex justify-between items-center'>
                    <div className='flex  justify-center items-center font-bold'>
                        <LiaStarSolid color='#fccb06' />
                        <span>{rating}</span>
                    </div>
                    <button onClick={() => dispatch(add({ id, rating, price, img, name, desc, category }))} className='bg-green px-2 py-1 rounded-md text-sm text-white font-bold'>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default FoodCart