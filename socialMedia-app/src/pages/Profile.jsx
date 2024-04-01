import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import Feed from '../components/Feed/Feed'
import Rightbar from '../components/Rightbar'
import CoverImg from '../../public/assets/post/3.jpeg'
import ProfileImg from '../../public/assets/person/7.jpeg'

const Home = () => {
    return (
        <div className='flex w-full'>
            <Sidebar />

            <div className="profileRight w-full">
                <div className="profilrRightTop ">
                    <div className="profileCover h-[320px] relative ">
                        <img className='w-full h-[250px] object-cover' src={CoverImg} alt="" />
                        <img className='h-[150px] w-[150px] absolute object-cover left-0 top-[150px] right-0 m-auto rounded-full border-white border-[3px]' src={ProfileImg} alt="" />
                    </div>
                    <div className="profileInfo flex flex-col items-center justify-center">
                        <h4 className='text-2xl font-medium'>Ankeet Oli</h4>
                        <h4 className='font-light'>Hi! I am a Frontend Developer.</h4>
                    </div>
                </div>
                <div className="profileRightBottom flex ">
                    <Feed />
                    <Rightbar />
                </div>
            </div>
        </div>
    )
}

export default Home