import React, { useState } from 'react'
import GreenBtn from './GreenBtn'
import { FaBars, FaTimes, FaFacebook, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa"
import { Link } from "react-scroll";


const NavBar = () => {
    const [nav, setNav] = useState(false);
    const lists = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'services'
        },
        {
            id: 3,
            link: 'about'
        },
        {
            id: 4,
            link: 'support'
        },
        {
            id: 5,
            link: 'pricing'
        },
    ]
    return (
        <div className=' text-white fixed w-screen h-20 bg-gray-900'>
            <div className='h-full w-full px-3 flex items-center justify-between'>
                <div className='text-4xl font-bold'>onnn</div>

                <ul className='hidden md:flex'>
                    {lists.map(({ id, link }) => (
                        <li key={id} className='p-4 cursor-pointer capitalize hover:text-lightColor duration-200'><Link to={link} smooth duration={1000}>{link}</Link></li>
                    ))}
                </ul>
                <div className='hidden md:flex mr-4'>
                    <GreenBtn title='Sign In' className="px-9 py-3" />
                </div>

                {/* Hamburger menu icon */}
                <div className='md:hidden'>
                    <div onClick={() => setNav(!nav)} className='cursor-pointer'>
                        <FaBars size={30} />
                    </div>
                </div>
            </div>

            {/* mobile menus */}

            <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-full bg-gray-900/70 backdrop-blur' : ''}>
                <div className={nav ? 'fixed left-0 top-0 w-4/5 h-full bg-gray-900 text-white p-10 ease-in duration-500' : 'fixed top-0 left-[-100%] h-full p-10 duration-500 ease-in'}>
                    <div>
                        <div className='flex w-full items-center justify-between '>
                            <h2 onClick={() => setNav(!nav)} className='text-3xl font-bold capitalize cursor-pointer'>onnn</h2>
                            <div onClick={() => setNav(!nav)} className='p-3 cursor-pointer'><FaTimes size={30} /></div>
                        </div>
                    </div>
                    <div className='mt-14 flex flex-col h-fit gap-6'>
                        <GreenBtn className='px-9 py-3 capitalize' title='sign in' />

                        <ul className='capitalize'>
                            {lists.map(({ id, link }) => (
                                <li key={id} className='py-4 text-2xl tracking-wider cursor-pointer  '><Link onClick={() => setNav(!nav)} offset={-75} to={link} smooth duration={1000}>{link}</Link></li>

                            ))}
                        </ul>

                        <div className='grid grid-cols-2 mx-auto w-4/5 gap-10'>
                            <div className='flex items-center justify-center rounded-md shadow-md shadow-lightColor p-3 cursor-pointer'>
                                <FaFacebook size={25} />
                            </div>
                            <div className='flex items-center justify-center rounded-md shadow-md shadow-lightColor p-3 cursor-pointer'>
                                <FaLinkedin size={25} />
                            </div>
                            <div className='flex items-center justify-center rounded-md shadow-md shadow-lightColor p-3 cursor-pointer'>
                                <FaInstagram size={25} />
                            </div>
                            <div className='flex items-center justify-center rounded-md shadow-md shadow-lightColor p-3 cursor-pointer'>
                                <FaGithub size={25} />
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </div>


    )
}

export default NavBar