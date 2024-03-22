import React from 'react';
import { IoLogIn } from 'react-icons/io5';
import { CgProfile } from 'react-icons/cg';
import { MdDownloadForOffline } from 'react-icons/md';
import { FiSearch } from "react-icons/fi";
const Navbar = ({ setSearch }) => {
    return (
        <>
            <nav className='flex justify-between items-center bg-pink text-white p-4'>
                <h1 className='text-2xl font-bold'>ImageSnap</h1>
                <ul className='flex space-x-4'>
                    <li>Home</li>
                    <li>Explore</li>
                </ul>
                <div className='flex justify-center items-center'>
                    <input
                        onChange={(e) => setSearch(e.target.value)}
                        type='search'
                        placeholder='Search Photos'
                        className='p-2 rounded-md w-[40vw] text-black outline-aqua rounded-tr-none rounded-br-none'
                    />
                    <button className=' bg-aqua p-2 rounded-md rounded-tl-none rounded-bl-none h-full hover:bg-lime transition-all duration-500'><FiSearch size={24} color='white' /></button>

                </div>
                <div className='flex space-x-4'>
                    <CgProfile className='text-3xl cursor-pointer hover:text-black transition-all duration-500' />
                    <MdDownloadForOffline className='text-3xl cursor-pointer hover:text-black transition-all duration-500' />
                    <IoLogIn className='text-3xl cursor-pointer hover:text-black transition-all duration-500' />
                </div>
            </nav>
            <div className='flex justify-center items-center gap-10 my-2'>
                <button className={`bg-red-400 text-white py-2 px-4 rounded`} onClick={() => setSearch("Nature")}> Nature </button>
                <button className={`bg-cyan-400 text-white py-2 px-4 rounded`} onClick={() => setSearch("Travel")}> Travel </button>
                <button className={`bg-emerald-400 text-white py-2 px-4 rounded`} onClick={() => setSearch("Animals")}> Animals </button>
                <button className={`bg-orange-400 text-white py-2 px-4 rounded`} onClick={() => setSearch("Music")}> Music </button>
                <button className={`bg-zinc-400 text-white py-2 px-4 rounded`} onClick={() => setSearch("Sports")}> Sports </button>
                <button className={`bg-rose-400 text-white py-2 px-4 rounded`} onClick={() => setSearch("Food")}> Food </button>
                <button className={`bg-indigo-400 text-white py-2 px-4 rounded`} onClick={() => setSearch("Technology")}> Technology </button>
                <button className={`bg-purple-400 text-white py-2 px-4 rounded`} onClick={() => setSearch("Art")}> Art </button>
                <button className={`bg-violet-400 text-white py-2 px-4 rounded`} onClick={() => setSearch("Fashion")}> Fashion </button>
                <button className={`bg-teal-400 text-white py-2 px-4 rounded`} onClick={() => setSearch("Architecture")}> Architecture </button>
            </div>
        </>
    );
};

export default Navbar;
