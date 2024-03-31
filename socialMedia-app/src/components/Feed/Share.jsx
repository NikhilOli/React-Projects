import React from 'react'
import profileImg from '../../assets/person/1.jpeg'
import { MdPermMedia, MdOutlineEmojiEmotions } from "react-icons/md";
import { BiSolidTagAlt } from "react-icons/bi";
import { RiLiveFill } from "react-icons/ri";




const Share = () => {
    return (
        <div>
            <div className='bg-[#303030] w-full h-[170px] p-[10px] rounded-md'>
                <div className="sharetop flex items-center gap-2 mb-2 ">
                    <img className='h-[50px] w-[50px] rounded-full object-cover cursor-pointer' src={profileImg} alt="" />
                    <input className='bg-transparent rounded-full py-1 px-3 focus:outline-none w-[80%] h-8 ' type="text" placeholder="What's in your mind, Ankeet?" />
                </div>
                <hr className=' m-5' />
                <div className="sharebottom flex items-center justify-between my-2">
                    <div className='ml-5'>
                        <div className='flex gap-2 items-center cursor-pointer'>
                            <MdPermMedia size={25} color='limegreen' />
                            <span>Photo/Video</span>
                        </div>
                    </div>
                    <div>
                        <div className='flex gap-2 items-center cursor-pointer'>
                            <BiSolidTagAlt size={25} color='blue' />
                            <span>Tag</span>
                        </div>
                    </div>
                    <div>
                        <div className='flex gap-2 items-center cursor-pointer mr-5'>
                            <RiLiveFill size={25} color='red' />
                            <span>Live Video</span>
                        </div>
                    </div>
                    <div>
                        <div className='flex gap-2 items-center cursor-pointer mr-5'>
                            <MdOutlineEmojiEmotions size={25} color='yellow' />
                            <span>Feeling</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Share