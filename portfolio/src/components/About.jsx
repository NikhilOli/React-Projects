import React from 'react'

const About = () => {
    return (
        <div name='about' className='text-white h-screen w-full bg-gradient-to-b from bg-gray-800 to-black'>
            <div className='flex flex-col max-w-screen-lg p-4 mx-auto justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl border-b-4 font-bold inline  border-gray-500'>About</p>
                </div>

                <p className='text-xl mt-20'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel obcaecati minima, dolorem ducimus sed porro temporibus enim deleniti ipsam quas earum tempora architecto aliquid aperiam quia voluptatum, laborum delectus quis! Commodi voluptas accusantium beatae laborum quo atque tempore. Laborum, officia officiis natus omnis quo praesentium quos tenetur alias. Distinctio, fugit?
                </p>
                <br />
                <p className='text-xl'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus autem tenetur vel, ea aut ut dolor repudiandae perspiciatis quo aliquid dolorem enim ipsum molestiae, totam numquam assumenda. Eius fugit et sapiente voluptates illum ratione! Exercitationem explicabo deserunt fuga reprehenderit eius at asperiores cupiditate nostrum illum dolores, dolorem magni inventore quos?
                </p>
            </div>
        </div>
    )
}

export default About