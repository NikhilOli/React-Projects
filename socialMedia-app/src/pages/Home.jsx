import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import Feed from '../components/Feed/Feed'
import Rightbar from '../components/Rightbar'

const Home = () => {
    return (
        <div className='flex w-full'>
            <Sidebar />
            <div className='flex justify-around'>
                <Feed />
                <Rightbar />
            </div>
        </div>
    )
}

export default Home