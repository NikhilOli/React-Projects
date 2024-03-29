import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { SiTailwindcss, SiFramer, SiJavascript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

const Technologies = () => {
    return (
        <div className='border-b border-neutral-800 pb-24'>
            <h2 className='text-center text-4xl my-20'>Technologies</h2>
            <div className='flex flex-wrap justify-center items-center gap-4'>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className='text-7xl text-cyan-400 ' />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiTailwindcss className='text-7xl text-sky-400 ' />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiFramer className='text-7xl text-white ' />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiJavascript className='text-7xl text-yellow-400 ' />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaNodeJs className='text-7xl text-green-400 ' />
                </div>
            </div>
        </div>
    )
}

export default Technologies