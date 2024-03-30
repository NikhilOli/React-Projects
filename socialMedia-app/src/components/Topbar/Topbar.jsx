import React from 'react'
import { IoSearch, IoPerson, IoNotifications } from "react-icons/io5";
import { FaMessage } from "react-icons/fa6";
import profilePic from '../../assets/person/1.jpeg';


const Topbar = () => {
  return (
    <div className='w-full h-14  flex items-center top-0 sticky bg-[#212121]'>
      <div className="topleft basis-1/6">
        <h2 className='text-2xl font-extrabold ml-6 cursor-pointer'>SocialConnect</h2>
      </div>
      <div className="topcenter basis-3/6">
        <div className='flex bg-[#424242] h-8 rounded-2xl items-center px-2 gap-1'>
          <IoSearch size={20} />
          <input className='bg-transparent py-1 px-2 focus:outline-none text-sm w-[60%]' type="text" placeholder='Search here...' />
        </div >
      </div>
      <div className="topright basis-2/6 flex justify-around items-center">
        <ul className='flex gap-2'>
          <li className='cursor-pointer hover:text-neutral-400 transition-all duration-300 ease-linear'>Homepage</li>
          <li className='cursor-pointer hover:text-neutral-400 transition-all duration-300 ease-linear'>Timeline</li>
        </ul>
        <div className="icons flex gap-4">
          <div className='relative cursor-pointer hover:text-neutral-400 transition-all duration-300 ease-linear'>
            <IoPerson size={20} />
            <span className='absolute -top-[7px] -right-[47px] mr-10 bg-red-600 w-[15px] h-[15px] flex justify-center items-center rounded-full'>2</span>
          </div>
          <div className='relative cursor-pointer hover:text-neutral-400 transition-all duration-300 ease-linear'>
            <FaMessage size={20} />
            <span className='absolute -top-[7px] -right-[47px] mr-10 bg-red-600 w-[15px] h-[15px] flex justify-center items-center rounded-full'>4</span>
          </div>
          <div className='relative cursor-pointer hover:text-neutral-400 transition-all duration-300 ease-out'>
            <IoNotifications size={20} />
            <span className='absolute -top-[7px] -right-[47px] mr-10 bg-red-600 w-[15px] h-[15px] flex justify-center items-center rounded-full'>1</span>
          </div>
        </div>
        <img src={profilePic} className='h-[32px] w-[32px] rounded-full object-cover cursor-pointer' alt="" />
      </div>
    </div>
  )
}

export default Topbar