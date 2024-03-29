import React from 'react'
import aboutImg from '../assets/about.jpg'
import { ABOUT_TEXT } from '../constants'
import { motion } from 'framer-motion'

const About = () => {
    return (
        <div className='borber-b border-neutral-900 pb-4'>
            <h2 className='my-20 text-center text-4xl'>About <span className='text-neutral-500'>Me</span></h2>
            <div className="flex flex-wrap">
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }} className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <img className='rounded-2xl' src={aboutImg} alt="about" />
                    </div>
                </motion.div>
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }} className='w-full lg:w-1/2'>
                    <div className="flex justify-center lg:justify-start">
                        <p className='my-2 max-w-xl py-6'>{ABOUT_TEXT}</p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default About