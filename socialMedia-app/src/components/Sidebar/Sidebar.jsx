import React from 'react'
import { MdOutlineRssFeed, MdWorkOutline, MdEvent } from "react-icons/md";
import { FaMessage, FaCirclePlay, FaUserGroup } from "react-icons/fa6";
import { IoBookmarkSharp } from "react-icons/io5";
import { FaRegQuestionCircle } from "react-icons/fa";
import { RiGraduationCapFill } from "react-icons/ri";
import friend from '../../assets/person/2.jpeg'
import './Sidebar.css'





const Sidebar = () => {
    return (
        <div className='basis-[26.923%] h-screen overflow-y-scroll ' style={{ maxHeight: 'calc(100vh - 56px)' }}>
            <div className='p-4'>
                <ul>
                    <li className='flex items-center mb-2 cursor-pointer hover:bg-[#424242] h-10 rounded-md pl-2 '>
                        <MdOutlineRssFeed size={20} className='mr-2' />
                        <span>Feed</span>
                    </li>
                    <li className='flex items-center mb-2 cursor-pointer hover:bg-[#424242] h-10 rounded-md pl-2'>
                        <FaMessage size={18} className='mr-2' />
                        <span>Chats</span>
                    </li>
                    <li className='flex items-center mb-2 cursor-pointer hover:bg-[#424242] h-10 rounded-md pl-2'>
                        <FaCirclePlay size={20} className='mr-2' />
                        <span>Videos</span>
                    </li>
                    <li className='flex items-center mb-2 cursor-pointer hover:bg-[#424242] h-10 rounded-md pl-2'>
                        <FaUserGroup size={20} className='mr-2' />
                        <span>Groups</span>
                    </li>
                    <li className='flex items-center mb-2 cursor-pointer hover:bg-[#424242] h-10 rounded-md pl-2'>
                        <IoBookmarkSharp size={20} className='mr-2' />
                        <span>Bookmarks</span>
                    </li>
                    <li className='flex items-center mb-2 cursor-pointer hover:bg-[#424242] h-10 rounded-md pl-2'>
                        <FaRegQuestionCircle size={20} className='mr-2' />
                        <span>Questions</span>
                    </li>
                    <li className='flex items-center mb-2 cursor-pointer hover:bg-[#424242] h-10 rounded-md pl-2'>
                        <MdWorkOutline size={20} className='mr-2' />
                        <span>Jobs</span>
                    </li>
                    <li className='flex items-center mb-2 cursor-pointer hover:bg-[#424242] h-10 rounded-md pl-2'>
                        <MdEvent size={20} className='mr-2' />
                        <span>Events</span>
                    </li>
                    <li className='flex items-center mb-2 cursor-pointer hover:bg-[#424242] h-10 rounded-md pl-2'>
                        <RiGraduationCapFill size={20} className='mr-2' />
                        <span>Courses</span>
                    </li>
                </ul>
                <button className='w-[150px] border-none p-[10px] rounded font-light bg-[#303030]'>Show More</button>
                <hr className='my-5' />
                <ul>
                    <li className='flex items-center mb-[15px]'>
                        <img className='w-8 h-8 rounded-full object-cover mr-[10px]' src={friend} alt="" />
                        <span>John Doe</span>
                    </li>
                    <li className='flex items-center mb-[15px]'>
                        <img className='w-8 h-8 rounded-full object-cover mr-[10px]' src={friend} alt="" />
                        <span>John Doe</span>
                    </li>
                    <li className='flex items-center mb-[15px]'>
                        <img className='w-8 h-8 rounded-full object-cover mr-[10px]' src={friend} alt="" />
                        <span>John Doe</span>
                    </li>
                    <li className='flex items-center mb-[15px]'>
                        <img className='w-8 h-8 rounded-full object-cover mr-[10px]' src={friend} alt="" />
                        <span>John Doe</span>
                    </li>
                    <li className='flex items-center mb-[15px]'>
                        <img className='w-8 h-8 rounded-full object-cover mr-[10px]' src={friend} alt="" />
                        <span>John Doe</span>
                    </li>
                    <li className='flex items-center mb-[15px]'>
                        <img className='w-8 h-8 rounded-full object-cover mr-[10px]' src={friend} alt="" />
                        <span>John Doe</span>
                    </li>
                    <li className='flex items-center mb-[15px]'>
                        <img className='w-8 h-8 rounded-full object-cover mr-[10px]' src={friend} alt="" />
                        <span>John Doe</span>
                    </li>
                    <li className='flex items-center mb-[15px]'>
                        <img className='w-8 h-8 rounded-full object-cover mr-[10px]' src={friend} alt="" />
                        <span>John Doe</span>
                    </li>
                    <li className='flex items-center mb-[15px]'>
                        <img className='w-8 h-8 rounded-full object-cover mr-[10px]' src={friend} alt="" />
                        <span>John Doe</span>
                    </li>
                    <li className='flex items-center mb-[15px]'>
                        <img className='w-8 h-8 rounded-full object-cover mr-[10px]' src={friend} alt="" />
                        <span>John Doe</span>
                    </li>
                    <li className='flex items-center mb-[15px]'>
                        <img className='w-8 h-8 rounded-full object-cover mr-[10px]' src={friend} alt="" />
                        <span>John Doe</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar