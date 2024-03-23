import React from 'react'
import { FadeLoader } from 'react-spinners';


const Saved = ({saved, loader}) => {
    return (
        <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mx-6" id='top'>
                {loader ? (
                    <div className="flex justify-center items-center w-[90vw] h-screen">
                        <FadeLoader color="#e5e338" />
                    </div>
                ) : (
                    saved.map(({ id, src, photographer }) => (
                        <div key={id} className="relative overflow-hidden rounded-lg aspect-w-1 aspect-h-1">
                            <img
                                src={src.medium}
                                alt={photographer}
                                className="object-cover w-full h-full transition-transform duration-300 transform hover:scale-105"
                            />
                        </div>
                    ))
                )}
            </div>
            <div className='text-center my-4'>
                {saved.length !== 0 && (
                    <a href='#top'>
                        <button className={`bg-teal-400 text-white py-2 px-4 rounded`}> Back to Top </button>
                    </a>
                )}
            </div>
        </>
    )
}

export default Saved