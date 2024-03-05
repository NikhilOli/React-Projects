import React from 'react'
import { IoIosArrowDroprightCircle } from "react-icons/io";


const Services = () => {
    return (
        <div name="services" className='w-full h-fit md:h-screen bg-slate-300'>
            <div className='flex flex-col items-center justify-center max-w-screen-xl mx-auto px-3 py-12 h-full'>
                <div className='flex flex-col gap-6 justify-between items-center'>
                    <h1 className='text-5xl font-bold text-center  '>Services</h1>
                    <p className='text-gray-600 py-8 text-center text-xl '>
                        At uttered there the late be bird answer, with more burned these my something craven. Startled usby my marvelled on.
                    </p>

                    <div className='grid w-full sm:grid-cols-2' >
                        <div className='flex flex-col p-4 m-4 bg-gray-900 rounded-md text-white'>
                            <p className='flex gap-3 items-center text-xl text-lightColor font-bold'><IoIosArrowDroprightCircle /> One</p>
                            <p className='p-8'>
                                Pallid nothing made still thing nevermore burden all and, so i a suddenly wretch eagerly aidenn at, remember the only.
                            </p>
                        </div>
                        <div className='flex flex-col p-4 m-4 bg-gray-900 rounded-md text-white'>
                            <p className='flex gap-3 items-center text-xl text-lightColor font-bold'><IoIosArrowDroprightCircle /> Two</p>
                            <p className='p-8'>
                                Pallid nothing made still thing nevermore burden all and, so i a suddenly wretch eagerly aidenn at, remember the only.
                            </p>
                        </div>
                        <div className='flex flex-col p-4 m-4 bg-gray-900 rounded-md text-white'>
                            <p className='flex gap-3 items-center text-xl text-lightColor font-bold'><IoIosArrowDroprightCircle /> Three</p>
                            <p className='p-8'>
                                Pallid nothing made still thing nevermore burden all and, so i a suddenly wretch eagerly aidenn at, remember the only.
                            </p>
                        </div>
                        <div className='flex flex-col p-4 m-4 bg-gray-900 rounded-md text-white'>
                            <p className='flex gap-3 items-center text-xl text-lightColor font-bold'><IoIosArrowDroprightCircle /> Four</p>
                            <p className='p-8'>
                                Pallid nothing made still thing nevermore burden all and, so i a suddenly wretch eagerly aidenn at, remember the only.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services