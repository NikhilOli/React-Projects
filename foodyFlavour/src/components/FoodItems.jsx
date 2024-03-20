import React from 'react'
import FoodCart from './FoodCart'
import FoodData from './FoodData'

const FoodItems = () => {
    return (
        <div className='flex gap-6 flex-wrap justify-center'>
            {
                FoodData.map(({ id,name, img, desc, price, rating }) => (
                    <FoodCart key={id} name={name} img={img} desc ={desc} price={price} rating={rating} />
                ))
            }
            <FoodCart />
        </div>
    )
}

export default FoodItems