import React from 'react'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import Rightbar from '../components/Rightbar'

const Home = () => {
  return (
    <div className='flex w-full '>
      <Sidebar />
      <Feed />
      <Rightbar />
    </div>
  )
}

export default Home