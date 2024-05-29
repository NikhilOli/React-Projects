import React from 'react';

const About = () => {
    return (
        <div name='about' className='text-white h-screen w-full bg-gradient-to-b from bg-gray-800 to-black'>
            <div className='flex flex-col max-w-screen-lg p-4 mx-auto justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl border-b-4 font-bold inline  border-gray-500'>About</p>
                </div>
                <p className='text-xl mt-20'>
                    I'm a driven and dedicated Web Developer with expertise in frontend technologies such as HTML, CSS, JavaScript, and ReactJS, as well as backend proficiency in Node.js and Express.js. My journey began with a love for technology and design, leading me to specialize in crafting captivating digital experiences. With a keen eye for detail and a commitment to excellence, I strive to create user-friendly and visually stunning applications that leave a lasting impression.
                </p>
                <br />
                <p className='text-xl'>
                    My approach to development is rooted in continuous learning and adaptability. I thrive in collaborative environments where I can leverage my skills to solve complex problems and bring innovative ideas to life. Whether it's building intuitive user interfaces or optimizing backend performance, I am dedicated to delivering high-quality solutions that exceed expectations.
                </p>
            </div>
        </div>
    )
}

export default About;
