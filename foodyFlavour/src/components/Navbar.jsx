import React from 'react'
import { Link } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
    return (
        <nav className='flex lg:flex-row items-center justify-between mx-4 cursor-pointer pt-2 h-20 mb-2'>
            {/* <h3>{new Date().toUTCString().slice(0, 16)}</h3> */}
            <h1 className='text-3xl font-bold text-blue'>FoodyCrunch</h1>
            <div className='flex justify-center items-center'>
                <input type="search" placeholder='Search here' autoComplete='off' className='border-blue border-[2px] px-2 py-1 outline-none w-[30vw] rounded-md rounded-tr-none rounded-br-none h-full border-r-0' />
                <button className=' bg-blue px-2 py-1 rounded-md rounded-tl-none rounded-bl-none h-full hover:bg-myblack'><IoSearchOutline size={25} color='white' /></button>
            </div>
            <ul className='hidden gap-5 lg:flex text-xl '>
                <Link className='duration-200 hover:text-blue' to="home" >Home</Link>
                <Link className='duration-200 hover:text-blue' to="menu">Menu</Link>
                <Link className='duration-200 hover:text-blue' to="about" >About</Link>
                <Link className='duration-200 hover:text-blue' to="contact">Contact</Link>
            </ul>
            <div className='lg:hidden'>
                <RxHamburgerMenu size={25} />
            </div>
        </nav>
    )
}

export default Navbar