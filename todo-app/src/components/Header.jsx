import React, { useState } from 'react'
import Button from './Button'

const Header = () => {
    const [task, setTask] = useState("");
    const handleTask = (e) => {
        setTask(e.target.value);
    }
    const [tag, setTag] = useState([]);
    const handleTag = (selectedTag) => {
        setTag((prevTags) => {
            if (!prevTags.includes(selectedTag)) {
                return [...prevTags, selectedTag];
            } else {
                return prevTags.filter((tag) => tag !== selectedTag);
            }
        });
    };
    const [status, setStatus] = useState("");
    const handleStatus = (e) => {
        setStatus(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // You can perform further actions with the submitted data
    };
    return (
        <header className='flex items-center justify-center border-b-[1px] border-b-[#dcdcdc] my-10 py-10'>
            <form onSubmit={handleSubmit} action="" className='w-[40%]'>
                <input onChange={handleTask} className='text-xl border rounded-md px-3 py-2 mb-4 w-full border-[#dfe3e6] bg-[#f9f9f9] text-black placeholder-[#686868] font-medium ' type="text" placeholder='Enter Your Task' />

                <div className='flex items-center justify-between'>
                    <div className='flex gap-2'>
                        <Button title="HTML" onClick={() => handleTag("HTML")} />
                        <Button title="CSS" onClick={() => handleTag("CSS")} />
                        <Button title="JavaScript" onClick={() => handleTag("JavaScript")} />
                        <Button title="React" onClick={() => handleTag("React")} />
                    </div>
                    <div className='flex items-center justify-center gap-3'>
                        <select onChange={handleStatus} className='text-[16px] font-medium border-[1px] border-[#999] rounded w-[120px] h-[40px] px-[5px]' name="" id="">
                            <option value="todo">To do</option>
                            <option value="doing">Doing</option>
                            <option value="done">Done</option>
                        </select>
                        <button className='text-[16px] rounded-md font-medium bg-[#6457f9] h-10 py-[3px] px-[13px] text-white border-none cursor-pointer'>+Add Task</button>
                    </div>
                </div>
            </form>
        </header>
    )
}

export default Header