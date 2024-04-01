import React from 'react'
import gift from '../../public/assets/gift.png'
import ad from '../../public/assets/ad.png'
import { Users } from '../dummyData'
const Rightbar = () => {
    return (
        <div className='basis-[4]'>
            <div className='pt-5 pr-5'>
                <div className='flex items-center'>
                    <img className='w-10 h-10 mr-[10px]' src={gift} alt="" />
                    <span className='font-light text-[15px]'><span className='font-semibold'>Santosh Lamichhane</span> and <span className='font-semibold'>4 others friends</span> have birthday today.</span>
                </div>
                <img className='w-full rounded-md my-[30px]' src={ad} alt="" />
                <h4 className='mb-5'>Online Friends</h4>
                <ul>
                    {Users.map((user) => (
                        <li key={user.id} className='flex items-center mb-[15px]'>
                            <div className='relative mr-[10px]'>
                                <img className='h-10 w-10 object-cover rounded-full' src={user.profilePicture} alt="" />
                                <span className='bg-green-400 rounded-full w-3 h-3 absolute -top-[2px] right-0 border-2 border-white'></span>
                            </div>
                            <span className='font-medium'>{user.username}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Rightbar