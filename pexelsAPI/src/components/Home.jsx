import React from 'react';

const Home = ({ images }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-4 scrollbar-hidden">
            {images.map(({ id, src, photographer }) => {
                return (
                    <div key={id} className="relative overflow-hidden rounded-lg aspect-w-1 aspect-h-1">
                        <img
                            src={src.medium}
                            alt={photographer}
                            className="object-cover w-full h-full transition-transform duration-300 transform hover:scale-105"
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default Home;
