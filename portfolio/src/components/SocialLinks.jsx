import React from 'react'
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";



const SocialLinks = () => {
    const links = [{
        id: 101,
        child: (
            <>LinkedIn <FaLinkedin size={30} /></>
        ),
        href: 'https://linkedin.com',
        style: 'rounded-tr-md'
    },
    {
        id: 102,
        child: (
            <>Github <FaGithub size={30} /></>
        ),
        href: 'https://github.com/NikhilOli107',

    },
    {
        id: 103,
        child: (
            <>Instagram <FaInstagram size={30} /></>
        ),
        href: 'https://instagram.com',
    },
    {
        id: 104,
        child: (
            <>Resume <BsFillPersonLinesFill size={30} /></>
        ),
        href: 'https://drive.google.com/drive/folders/1BqJvZAfvzSgP0ZVa60ToB6UHtCR2b4x9?usp=sharing',
        style: 'rounded-br-md'
    }
    ]
    return (
        <div className='hidden lg:flex left-0 top-[35%] flex-col fixed'>
            <ul>
                {links.map(({ id, child, style, href }) => (

                    <li key={id} className={'w-40 h-14 px-4 flex justify-between items-center ml-[-100px] bg-gray-500 hover:ml-[-10px] hover:rounded-md duration-300' + " " + style}>
                        <a className='text-white flex justify-between items-center w-full' href={href} target='_blank' rel="noreferrer">
                            {child}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SocialLinks