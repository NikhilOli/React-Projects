import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from "react-scroll";
import { motion } from 'framer-motion';

const TypographyDesign = () => {
    const container = (delay) => ({
        hidden: { x: 100, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } }
    });

    return (
        <motion.div
            className="typography-design text-center text-white"
            variants={container(0)}
            initial="hidden"
            animate="visible"
        >
            <motion.h1
                className="text-4xl md:text-6xl font-bold mb-4"
                variants={container(0)}
                initial="hidden"
                animate="visible"
            >
                <span className="text-cyan-500">Nikhil Oli</span>
                <br />
                <span className="text-gray-300 text-lg md:text-xl">Web Developer</span>
            </motion.h1>
            <motion.p
                className="text-gray-400 mb-8 max-w-lg mx-auto"
                variants={container(0.5)}
                initial="hidden"
                animate="visible"
            >
                Transforming concepts into elegant and responsive web applications.
            </motion.p>
            <motion.div
                className='flex justify-center'
                variants={container(0)}
                initial="hidden"
                animate="visible"
            >
                <Link to="portfolio" smooth duration={500}>
                    <motion.button
                        className='group w-fit gap-1 my-2 cursor-pointer flex items-center text-white py-3 px-6 bg-gradient-to-r from-cyan-500 to-green-500 rounded-md'
                        variants={container(1)}
                        initial="hidden"
                        animate="visible"
                    >
                        Explore Projects
                        <span className='group-hover:rotate-90 duration-300'>
                            <FaArrowRight size={18} />
                        </span>
                    </motion.button>
                </Link>
            </motion.div>
        </motion.div>
    );
};

export default TypographyDesign;
