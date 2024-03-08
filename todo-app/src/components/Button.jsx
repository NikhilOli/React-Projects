import React from 'react'

const Button = ({title, onClick}) => {
    return (
        <button onClick={onClick} className='bg-[#f9f9f9]  text-sm font-medium py-[2px] rounded px-[10px] border border-[#dfe3e6] cursor-pointer'>{title}</button>
    )
}

export default Button