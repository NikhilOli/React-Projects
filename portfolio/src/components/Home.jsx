import React from 'react'
import heroImage from '../assets/heroImage.jpg'
import { FaArrowRight } from 'react-icons/fa'

const Home = () => {
    return (
        <div name="home" className=' max-h-full w-full bg-gradient-to-b from-black via-black to-gray-800 md:h-screen'>
            <div className='max-w-screen-lg h-full mx-auto flex flex-col justify-center items-center px-4 md:flex-row'>
                <div className=' flex flex-col justify-center '>
                    <h2 className='sm:mt-20 text-white md:w-fit text-4xl sm:text-7xl font-bold'>
                        I'm a Frontend Developer.
                    </h2>
                    <p className='text-gray-500 py-4 max-w-md'>
                        Hello! I'm Nikhil Oli, a Frontend Developer specializing in creating user-friendly web experiences. With proficiency in HTML, CSS, JavaScript, and ReactJS, I excel in transforming concepts into elegant and responsive applications. Let's collaborate to elevate your digital presence and captivate your audience.
                    </p>
                    <div>
                        <button className='group w-fit gap-1 my-2 cursor-pointer flex items-center text-white py-3 px-6 bg-gradient-to-r from-cyan-500 to-green-500 rounded-md'>
                            Portfolio
                            <span className='group-hover:rotate-90 duration-300'>
                                <FaArrowRight size={18} />
                            </span>
                        </button>
                    </div>
                </div>
                <div>
                    <img src={heroImage} alt="myprofile" className='rounded-2xl mx-auto w-2/3 md:w-full pb-10 md:pt-20' />
                </div>
            </div>
        </div>
    )
}

export default Home