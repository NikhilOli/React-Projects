import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link } from "react-scroll";


const Navbar = () => {
    const [nav, setNav] = useState(false);
    const links = [
        {
            id: 101,
            link: 'home'
        },
        {
            id: 102,
            link: 'about'
        },
        {
            id: 103,
            link: 'portfolio'
        },
        {
            id: 104,
            link: 'experience'
        },
        {
            id: 105,
            link: 'contact'
        }
    ]
    return (
        <div className="flex px-4 capitalize justify-between items-center h-20 w-full bg-black text-white fixed">
            <div>
                <h1 className=" text-5xl font-signature">Nikhil</h1>
            </div>
            <ul className="hidden md:flex gap-10 pr-4">
                {links.map(({ id, link }) => (

                    <li key={id} className="cursor-pointer font-medium text-gray-500 hover:scale-105 duration-200"><Link to={link} smooth duration={500}>{link}</Link></li>
                ))}
            </ul>

            <div onClick={() => setNav(!nav)} className=" cursor-pointer pr-4 z-10 text-white md:hidden">
                {nav ? <FaTimes color="#fff" size={30} /> : <FaBars size={30} />}
                {nav && (
                    <ul className="flex flex-col bg-gradient-to-b from-black to-gray-800 top-0 left-0 absolute w-full h-screen justify-center items-center text-gray-500 ">
                        {links.map(({ id, link }) => (

                            <li key={id} className="cursor-pointer text-4xl font-medium py-6 px-4 hover:scale-105 duration-200"><Link to={link} smooth duration={500}>{link}</Link></li>
                        ))}
                    </ul>
                )}
            </div>
        </div >
    );
};

export default Navbar;