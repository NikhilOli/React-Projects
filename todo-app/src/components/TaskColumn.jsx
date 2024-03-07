import React from 'react'

const TaskColumn = ({heading, icon}) => {
    return (
        <section className='w-1/3'>
            <h2 className='flex items-center gap-2 font-bold'>  <img className='w-[30px]' src={icon} alt="" />{heading}</h2>
        </section>
    )
}

export default TaskColumn