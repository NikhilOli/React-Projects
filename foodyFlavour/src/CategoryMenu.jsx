import React from 'react'

const CategoryMenu = () => {
    const menus = [{ id: 1, title: 'All' },
    { id: 2, title: 'Lunch' },
    { id: 3, title: 'Breakfast' },
    { id: 4, title: 'Dinner' },
    { id: 5, title: 'Snacks' }
    ]
    return (
        <div className='text-center lg:text-left lg:ml-5'>
            <h3 className='font-semibold text-xl'>Find the best foods</h3>
            <div className='flex gap-5 py-2 justify-center lg:justify-start'>
                {menus.map(({ id, title }) => (
                    <button key={id} className='font-bold bg-whitishGray rounded-lg px-3 py-2 cursor-pointer hover:bg-green hover:text-white'>{title}</button>
                ))}
            </div>
        </div>
    )
}

export default CategoryMenu