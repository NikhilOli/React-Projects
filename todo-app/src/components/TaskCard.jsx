import React from 'react'
import deleteIcon from '../assets/delete.png';
import Button from './Button';


const TaskCard = () => {
    return (
        <article className='border w-full min-h-[100px] border-[#dcdcdc] rounded-lg p-4 my-4'>
            <p className='text-[20px] font-semibold mb-4'>Test text</p>
            <div className='flex justify-between items-center'>
                <div className='flex gap-2'>
                    <Button title='HTML' />
                    <Button title='CSS' />
                </div>
                <div className='w-[35px] h-[35px] rounded-full flex items-center justify-center cursor-pointer transition-all ease-in-out hover:bg-[#ebebeb]'>
                    <img className='w-5 opacity-50  duration-200 ease-in-out hover:opacity-80' src={deleteIcon} alt="" />
                </div>
            </div>
        </article>
    )
}

export default TaskCard