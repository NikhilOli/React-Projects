import React from 'react'
import gift from '../../public/assets/gift.png'
import ad from '../../public/assets/ad.png'
import friendPic from '../../public/assets/person/1.jpeg'
import { Users } from '../dummyData'
const Rightbar = ({ profile }) => {
    const HomeRightBar = () => {
        return (
            <>
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
            </>
        )
    }
    const ProfileRightBar = () => {
        return (
            <>
                <h4 className='text-[18px] font-medium mb-[10px]'>User Information</h4>
                <div>
                    <div className='mb-[30px]' >
                        <div className='mb-[10px]'>
                            <span className='mr-[15px] font-medium text-[#a8a2a2]'>City:</span>
                            <span className='font-light'>New York</span>
                        </div>
                        <div className='mb-[10px]'>
                            <span className='mr-[15px] font-medium text-[#a8a2a2]'>From:</span>
                            <span className='font-light'    >Barcelona</span>
                        </div>
                        <div className='mb-[10px]'>
                            <span className='mr-[15px] font-medium text-[#a8a2a2]'>Education:</span>
                            <span className='font-light'>Bachelors in BSc Software Engineering</span>
                        </div>
                    </div>
                </div>
                <h4>Usser Friends</h4>
                <div className='flex flex-wrap'>
                    {Users.map((user) => (
                        <div className='flex flex-col basis-1/3'>
                            <img className='w-[100px] h-[100px] object-cover rounded-[5px]' src={user.profilePicture} alt="" />
                            <span>{user.username}</span>
                        </div>
                    ))}
                </div>
            </>
        )
    }
    return (
        <div className='basis-[35.769%]'>
            <div className='pt-5 pr-5'>
                <ProfileRightBar />
                {/* <HomeRightBar /> */}
            </div>
        </div>
    )
}

export default Rightbar