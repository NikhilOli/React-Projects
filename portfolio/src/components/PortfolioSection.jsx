import React from 'react'
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const PortfolioSection = () => {

    const portfolios = [
        {
            id: 1,
            src: reactWeather
        },
        {
            id: 2,
            src: arrayDestruct
        },
        {
            id: 3,
            src: reactSmooth
        },
        {
            id: 4,
            src: navbar
        },
        {
            id: 5,
            src: installNode
        },
        {
            id: 6,
            src: reactParallax
        },
    ]

    return (
        <div name='portfolio' className='text-white bg-gradient-to-b from bg-black to-gray-800 w-full md:h-screen'>
            <div className='max-w-screen-lg p-4 flex flex-col mx-auto justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-6'>Check out some of my work</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:p-0'>

                    {portfolios.map(({id,src}) => (
                        
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                            <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />

                            <div className='flex justify-center items-center'>
                                <button className=' m-4 px-6 py-3 w-1/2 duration-200 hover:scale-105'>Demo</button>
                                <button className=' m-4 px-6 py-3 w-1/2 duration-200 hover:scale-105'>Code</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PortfolioSection