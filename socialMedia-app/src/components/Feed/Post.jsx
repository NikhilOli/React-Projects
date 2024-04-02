import React, { useState } from 'react'
import { SlOptions } from "react-icons/sl";
import { FaHeart, FaRegHeart, FaRegComment, FaRegBookmark } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { Users } from '../../dummyData'

const Post = ({ like, desc, photo, comment, postId, date }) => {
    const [likeCount, setLikeCount] = useState(like);
    const [isLike, setIsLike] = useState(false);

    const handleLike = () => {
        if (!isLike) {
            setLikeCount(likeCount + 1);
        } else {
            setLikeCount(likeCount - 1);
        }
        setIsLike(!isLike);
    }
    return (
        <div className='rounded-md w-full my-7'>
            <div className='p-[10px]'>
                <div className="posttop flex items-center justify-between">
                    <div className="postTopLeft flex items-center cursor-pointer">
                        <img className='w-8 h-8 rounded-full object-cover' src={Users.filter(user => user.id === postId)[0].profilePicture} alt="" />
                        <span className='font-semibold mx-3'>{Users.filter(user => user.id === postId)[0].username}</span>
                        <span className='text-sm text-gray-400'>{date}</span>
                    </div>
                    <div className="postTopRight cursor-pointer">
                        <SlOptions />
                    </div>
                </div>
                <div className="postcenter my-5" >
                    <img className='mt-5 w-full rounded object-contain max-h-[500px]' src={photo} alt="" />
                </div>
                <div className="postBottom">
                    <div className="likes flex justify-between my-2">
                        <div className='flex gap-3 cursor-pointer'>
                            <FaHeart onClick={handleLike} size={24} className={isLike ? 'text-red-400' : 'bg-transparent'} />
                            <FaRegComment size={24} />
                            <FiSend size={24} />
                        </div>
                        <FaRegBookmark size={24} className='cursor-pointer' />
                    </div>
                    <div className="texts my-1 text-sm">
                        <span className='my-3 tracking-wide'>{likeCount} likes</span>
                        <p className='text-gray-300 my-2'>
                            <span className='text-white mr-2 tracking-wide'>{Users.filter(user => user.id === postId)[0].username}</span>
                            {desc}
                        </p>
                        <span className="comments text-neutral-400 cursor-pointer">View all {comment} comments</span>
                        <div className='flex justify-between text-neutral-400'>
                            <input className='bg-transparent  rounded-full py-1 px-[1.5px] focus:outline-none w-[80%] h-8' placeholder='Add a comment...' />
                            <MdOutlineEmojiEmotions size={15} className='cursor-pointer' />
                        </div>
                    </div>
                </div>
            </div>
            <hr className=' h-[0.5px] border-t-[0.5px] border-neutral-700' />
        </div>
    )
}

export default Post