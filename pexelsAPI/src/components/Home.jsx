import React from 'react';
import { FadeLoader } from 'react-spinners';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = ({ images, loader, saved, setSaved }) => {
    const savedImage = (img) => {
        let flag = true;
        if (saved !== null && saved.length > 0) {
            for (let i = 0; i < saved.length; i++) {
                if (saved[i].id === img.id) {
                    flag = false;
                    toast.warn('Image already saved!', {
                        position: "top-right",
                        autoClose: 1500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        transition: Bounce,
                    });
                    break;
                }
            }
        }
        if (flag) {
            setSaved([...saved, img]);
            toast.success('Image saved successfully!', {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        }
    }
    return (
        <>
            <ToastContainer />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mx-6" id='top'>
                {loader ? (
                    <div className="flex justify-center items-center w-[90vw] h-screen">
                        <FadeLoader color="#e5e338" />
                    </div>
                ) : (
                    images.map(({ id, src, photographer }) => (
                        <div key={id} className="relative overflow-hidden rounded-lg aspect-w-1 aspect-h-1" onClick={() => savedImage({ id, src })}>
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
                {images.length !== 0 && (
                    <a href='#top'>
                        <button className={`bg-teal-400 text-white py-2 px-4 rounded`}> Back to Top </button>
                    </a>
                )}
            </div>
        </>
    );
};

export default Home;
