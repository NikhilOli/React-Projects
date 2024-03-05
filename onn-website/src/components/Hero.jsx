import React from 'react'
import GreenBtn from './GreenBtn'
import hero from "../assets/hero.jpg"
const Hero = () => {
    return (
        <div name='home' className='bg-gray-900 h-screen w-full p-4 flex flex-col text-center justify-between md:text-left '>
            <div className='grid md:grid-cols-2 max-w-screen-xl m-auto px-3'>
                <div className='flex text-white flex-col justify-center md:items-start w-full px-2 py-8'>
                    <p className='text-2xl text-gray-500'>Cheapest Hosting on Planet Earth

                    </p>
                    <h2 className='pt1 pb-6 uppercase text-5xl md:text-7xl font-bold'>
                        <span className='text-lightColor'>onnn</span> web services
                    </h2>
                    <p className='text-base font-light text-gray-500'>Explore cushions he with fowl was nodded, merely suddenly thee bore nevermore. My bust sitting the ease of the will.</p>
                    <GreenBtn className='py-3 px-6 capitalize sm:w-8/12 my-8 sm:mx-auto md:mx-0' title='sign up' />
                </div>

                <div className='flex justify-center items-center'>
                    <img src={hero} alt="" className='w-3/4 rounded-2xl' />
                </div>
            </div>
        </div>
    )
}

export default Hero