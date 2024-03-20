import React from 'react'
import FoodCart from './FoodCart'
import FoodData from './FoodData'

const FoodItems = () => {
    return (
        <div className='flex gap-10 flex-wrap justify-center'>
            {
                FoodData.map((food) => {
                    return    <FoodCart key={food.id} name={food.name} img={food.img} desc={food.desc} price={food.price} rating={food.rating} />
                })
            }
            <FoodCart />
        </div>
    )
}

export default FoodItems