import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { SiTailwindcss, SiFramer, SiJavascript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { motion } from 'framer-motion'

const Technologies = () => {
    const iconVariations = (delay) => ({
        initial: { y: 0 },
        animate: { y: [-10, 10], transition: { duration: 2, ease: "linear", repeat: Infinity, repeatType: "reverse", delay: delay } }
    })
    return (
        <div className='border-b border-neutral-800 pb-24'>
            <motion.h2
                whileInView={{ y: 0, opacity: 1 }}
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 1.5 }} className='text-center text-4xl my-20'>Technologies</motion.h2>
            <motion.div
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ x: -100, opacity: 0 }}
                transition={{ duration: 1.5 }} className='flex flex-wrap justify-center items-center gap-4'>
                <motion.div
                    variants={iconVariations(1)}
                    initial="initial"
                    animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className='text-7xl text-cyan-400 ' />
                </motion.div>
                <motion.div
                    variants={iconVariations(2)}
                    initial="initial"
                    animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiTailwindcss className='text-7xl text-sky-400 ' />
                </motion.div>
                <motion.div
                    variants={iconVariations(3)}
                    initial="initial"
                    animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiFramer className='text-7xl text-white ' />
                </motion.div>
                <motion.div
                    variants={iconVariations(4)}
                    initial="initial"
                    animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiJavascript className='text-7xl text-yellow-400 ' />
                </motion.div>
                <motion.div
                    variants={iconVariations(5)}
                    initial="initial"
                    animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaNodeJs className='text-7xl text-green-400 ' />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Technologies