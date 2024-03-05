import React from 'react'
import {MdOutlineComputer, MdOutlineSupportAgent, MdPerson} from "react-icons/md";
import GreenBtn from './GreenBtn';

const Support = () => {
    const links = [
        {
            id: 202,
            icon: <MdOutlineComputer size={30}/>,
            title: 'Technical'
        },
        {
            id: 203,
            icon: <MdOutlineSupportAgent size={30}/>,
            title: 'Sales'
        },
        {
            id: 204,
            icon: <MdPerson size={30}/>,
            title: 'General'
        },
    ]
    return (
        <div name="support" className='w-full h-fit bg-slate-300 '>

            <div className='flex flex-col items-center justify-center max-w-screen-xl mx-auto h-full px-3 py-12'>
                <div className='px-4 py-12 text-center'>
                    <h1 className='text-5xl font-bold'>Support</h1>
                    <p className='py-8 text-xl text-gray-600'>He bird repeating moment that repeating mortals rapping prophet a with.</p>
                </div>

                <div className='grid lg:grid-cols-3 gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
                    {links.map(({id,title,icon}) => (

                    <div key={id} className='bg-gray-900 text-white rounded-xl shadow-lg shadow-lightColor'>
                        <div className='p-8'>
                            <div className='flex items-center justify-center w-16 h-16 p-4 bg-lightColor text-darkColor rounded-full mt-[-4rem] '>
                                {icon}
                            </div>
                            <h3 className='font-bold text-2xl my-6'>{title}</h3>
                            <p className='text-gray-300 text-base pb-12'>
                            All than answer mien the never more louder my, smiling a door there by quaff both, from shorn but napping.
                            </p>
                        </div>
                    </div>
                    ))}
                        <div className=' flex justify-center items-center md:col-start-2'>
                        <GreenBtn title='Contact Us' className='py-3 px-6 w-1/2 my-12 md:w-full' />
                        </div>
                </div>
            </div>

        </div>
    )
}

export default Support