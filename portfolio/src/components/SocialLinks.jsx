import React from 'react'
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { motion } from 'framer-motion'


const SocialLinks = () => {
    const container = (delay) => ({
        hidden: { x: -100, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 2.5, delay: delay } }
    });
    const links = [{
        id: 101,
        child: (
            <>LinkedIn <FaLinkedin size={30} /></>
        ),
        href: 'https://linkedin.com/in/nikhil-oli',
        style: 'rounded-tr-md'
    },
    {
        id: 102,
        child: (
            <>Github <FaGithub size={30} /></>
        ),
        href: 'https://github.com/NikhilOli',

    },
    {
        id: 103,
        child: (
            <>Instagram <FaInstagram size={30} /></>
        ),
        href: 'https://instagram.com/ankeet_oli',
    },
    {
        id: 104,
        child: (
            <>Resume <BsFillPersonLinesFill size={30} /></>
        ),
        href: 'https://drive.google.com/uc?export=download&id=1n_3CqPK1bLEGgT4NiOD0LqDxnZ66bVMp',
        style: 'rounded-br-md'
    }
    ]
    return (
        <div className=' lg:flex left-0 top-[35%] flex-col fixed'>
            <motion.ul variants={container(0)}
                initial="hidden"
                animate="visible">
                {links.map(({ id, child, style, href }) => (

                    <li key={id} className={'w-40 h-14 px-4 flex justify-between items-center ml-[-100px] bg-gray-500 hover:ml-[-10px] hover:rounded-md duration-300' + " " + style}>
                        <a className='text-white flex justify-between items-center w-full' href={href} target='_blank' rel="noreferrer">
                            {child}
                        </a>
                    </li>
                ))}
            </motion.ul>
        </div>
    )
}

export default SocialLinks