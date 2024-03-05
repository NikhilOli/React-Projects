import React from 'react'
import PriceCard from './PriceCard'

const Pricing = () => {
    return (
        <div name='pricing' className='w-full h-fit text-white bg-gray-900'>
            <div className='flex flex-col items-center justify-center max-w-screen-xl mx-auto h-full py-12'>
                <div className='px-4 py-12'>
                    <h2 className='text-5xl font-bold text-center'>Pricing</h2>
                    <p className='text-xl py-8 text-gray-500 text-center'></p>
                </div>
                <div className='grid md:grid-cols-2'>
                    <PriceCard
                        priceCategory="hobby"
                        dollar="55"
                        features={[
                            {
                                id: 1,
                                title: "Feature One",
                            },
                            {
                                id: 2,
                                title: "Feature Two",
                            },
                            {
                                id: 3,
                                title: "Feature Three",
                            },
                        ]}
                    />
                    <PriceCard
                        priceCategory="growth"
                        dollar="69"
                        features={[
                            {
                                id: 1,
                                title: "* Feature One",
                            },
                            {
                                id: 2,
                                title: "+ Feature Two",
                            },
                            {
                                id: 3,
                                title: "Feature Three",
                            },
                        ]}
                    />
                </div>
            </div>
        </div>
    )
}

export default Pricing