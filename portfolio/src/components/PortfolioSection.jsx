import React from 'react';
import imageSnap from "../assets/portfolio/imageSnap.png";
import eCommerce from "../assets/portfolio/eCommerce.png";
import reduxEcommerce from "../assets/portfolio/reduxEcommerce.png";
import onn from "../assets/portfolio/onn.png";
import weatherApp from "../assets/portfolio/weatherApp.png";
import blogweave from "../assets/portfolio/blogWeave.png";
import contactms from "../assets/portfolio/contactms.png";

const PortfolioSection = () => {

    const portfolios = [
        {
            id: 1,
            title: "Image Snap",
            src: imageSnap,
            demoLink: "https://image-snap.vercel.app/"
        },
        {
            id: 2,
            title: "Blog Weave",
            src: blogweave,
            demoLink: "https://blogweave.vercel.app/"
        },
        {
            id: 3,
            title: "Contact Management System",
            src: contactms,
            demoLink: "https://contactms-demo.vercel.app/"
        },
        {
            id: 4,
            title: "Redux E-commerce",
            src: reduxEcommerce,
            demoLink: "https://redux-ecommerce-ten.vercel.app/"
        },
        {
            id: 5,
            title: "Weather App",
            src: weatherApp,
            demoLink: "https://weatheringai.netlify.app/"
        },
        {
            id: 6,
            title: "Project ONN",
            src: onn,
            demoLink: "https://react-projects-coral.vercel.app/"
        }, 
        {
            id: 7,
            title: "E-commerce",
            src: eCommerce,
            demoLink: "https://e-commerce-five-plum.vercel.app/"
        },
    ];

    return (
        <div name='portfolio' className='text-white bg-gradient-to-b from bg-black to-gray-800 w-full md:h-[100%] '>
            <div className='max-w-screen-lg p-4 flex flex-col mx-auto justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-6'>Check out some of my work</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:p-0'>

                    {portfolios.map(({ id, title, src, demoLink }) => (

                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                            <img src={src} alt={title} className='h-44 w-full rounded-md duration-200 hover:scale-105' />
                            <p className="text-center text-lg font-semibold py-2">{title}</p>
                            <div className='flex justify-center items-center'>
                                <button className=' m-4 px-6 py-3 w-1/2 duration-200 hover:scale-105'><a href={demoLink} target='_blank' rel="noopener noreferrer">Demo</a></button>
                                <button className=' m-4 px-6 py-3 w-1/2 duration-200 hover:scale-105'>Code</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PortfolioSection;
