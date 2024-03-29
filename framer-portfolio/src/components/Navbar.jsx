import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa'
import logo from '../assets/kevinRushLogo.png'

const Navbar = () => {
    return (
        <nav className='flex items-center justify-between mb-20 py-6'>
            <div className='flex flex-shrink-0 items-center'>
                <img className='mx2 w-10' src={logo} alt="" />
            </div>
            <div className='m-8 flex justify-center items-center gap-4 text-2xl'>
                <FaLinkedin />
                <FaGithub />
                <FaSquareXTwitter />
                <FaInstagram />
            </div>
        </nav>
    )
}

export default Navbar