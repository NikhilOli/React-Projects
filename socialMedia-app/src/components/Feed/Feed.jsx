import React from 'react'
import Share from './Share'
import Post from './Post'
import { Posts } from '../../dummyData'

const Feed = () => {
    return (
        <div className='basis-[50%] p-5 bg-neutral-800 '>
            <Share />
            {Posts.map(({ id, photo, desc, like, comment, date }, index) => (
                <Post key={index} photo={photo} like={like} date={date} desc={desc} comment={comment} postId={id} />
            ))}
        </div>
    )
}

export default Feed