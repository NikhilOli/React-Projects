import React from 'react'
import heroImage from '../assets/heroImage.jpg'
import { FaArrowRight } from 'react-icons/fa'
import TypographyDesign from './TypographyDesign'
import { motion } from 'framer-motion'


const Home = () => {
    const container = (delay) => ({
        hidden: { x: -100, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } }
    });
    return (
        <div name="home" className=' max-h-full w-full bg-gradient-to-b from-black via-black to-gray-800 md:h-screen'>
            <div className=' max-w-screen-lg h-full mx-auto flex flex-col justify-center items-center px-4 md:flex-row'>
                <div className=' flex flex-col justify-center '>
                    <motion.h2
                        variants={container(0)}
                        initial="hidden"
                        animate="visible" className='sm:mt-20 text-white md:w-fit text-4xl sm:text-7xl font-bold'>
                        I'm a Web Developer.
                    </motion.h2>
                    <motion.p
                        variants={container(0.5)}
                        initial="hidden"
                        animate="visible" className='text-gray-500 py-4 max-w-md'>
                Greetings! I'm Nikhil Oli, a seasoned Web Developer with expertise spanning frontend technologies including HTML, CSS, JavaScript, and ReactJS, alongside backend proficiency in Node.js and Express.js. Let's collaborate to elevate your digital presence!
                    </motion.p>
                    <div>
                        <motion.button
                            variants={container(1)}
                            initial="hidden"
                            animate="visible" className='group w-fit gap-1 my-2 cursor-pointer flex items-center text-white py-3 px-6 bg-gradient-to-r from-cyan-500 to-green-500 rounded-md'>
                            Portfolio
                            <span className='group-hover:rotate-90 duration-300'>
                                <FaArrowRight size={18} />
                            </span>
                        </motion.button>
                    </div>
                </div>
                <div className='w-1/2'>
                    <TypographyDesign />
                </div>
            </div>
        </div>
    )
}

export default Home