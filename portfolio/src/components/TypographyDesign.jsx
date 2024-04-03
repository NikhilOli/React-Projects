import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from "react-scroll";
import { motion } from 'framer-motion'



const TypographyDesign = () => {
    const container = (delay) => ({
        hidden: { x: 100, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } }
    });
    return (
        <div className="typography-design text-center text-white">
            <motion.h1
                variants={container(0)}
                initial="hidden"
                animate="visible" className="text-4xl md:text-6xl font-bold mb-4">
                <span className="text-cyan-500">Nikhil Oli</span>
                <br />
                <span className="text-gray-300 text-lg md:text-xl">Frontend Developer</span>
            </motion.h1>
            <motion.p
                variants={container(0.5)}
                initial="hidden"
                animate="visible" className="text-gray-400 mb-8 max-w-lg mx-auto">
                Transforming concepts into elegant and responsive web applications.
            </motion.p>
            <div
                variants={container(0)}
                initial="hidden"
                animate="visible" className='flex justify-center'>
                <Link to="portfolio" smooth duration={500}><motion.button
                    variants={container(1)}
                    initial="hidden"
                    animate="visible" className='group w-fit gap-1 my-2 cursor-pointer flex items-center text-white py-3 px-6 bg-gradient-to-r from-cyan-500 to-green-500 rounded-md'>
                    Explore Projects
                    <span className='group-hover:rotate-90 duration-300'>
                        <FaArrowRight size={18} />
                    </span>
                </motion.button></Link>
            </div>
        </div>
    );
};

export default TypographyDesign;
