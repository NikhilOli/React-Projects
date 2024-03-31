import React from 'react'
import Share from './Share'
import Post from './Post'

const Feed = () => {
    return (
        <div className='basis-[42.308%] p-5'>
            <Share />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    )
}

export default Feed