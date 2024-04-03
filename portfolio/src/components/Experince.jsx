import React from 'react'
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import framer from "../assets/framer.png"
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import {motion} from 'framer-motion'

const Experince = () => {
    const iconVariations = (delay) => ({
        initial: { y: 0 },
        animate: { y: [-10, 10], transition: { duration: 2, ease: "linear", repeat: Infinity, repeatType: "reverse", delay: delay } }
    })
    const technologies = [
        {
            id: 1,
            src: html,
            title: "HTML",
            style: 'shadow-orange-400'
        },
        {
            id: 2,
            src: css,
            title: "CSS",
            style: 'shadow-green-400'
        },
        {
            id: 3,
            src: javascript,
            title: "JavaScript",
            style: 'shadow-yellow-400'
        },
        {
            id: 4,
            src: reactImage,
            title: "React",
            style: 'shadow-sky-400'
        },
        // {
        //     id: 5,
        //     src: nextjs,
        //     title: "NextJS",
        //     style: 'shadow-green-400'
        // },
        {
            id: 6,
            src: tailwind,
            title: "Tailwind CSS",
            style: 'shadow-cyan-400'
        },
        {
            id: 7,
            src: github,
            title: "Github",
            style: 'shadow-gray-400'
        },
        {
            id: 8,
            src: framer,
            title: "Framer-Motion",
            style: 'shadow-indigo-400'
        },
    ]
    return (
        <div name='experience' className='bg-gradient-to-b from-gray-800 to-black w-full h-full'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
                <div>
                    <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experince</p>
                    <p className='py-6'>These are the technologies I'm familiar with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                    {technologies.map(({ id, src, title, style }) => (

                        <motion.div 
                        variants={iconVariations(1)}
                    initial="initial"
                    animate="animate" key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg` + " " + style}>
                            <img src={src} className='w-20 mx-auto' alt="" />
                            <p className='mt-4'>{title}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experince