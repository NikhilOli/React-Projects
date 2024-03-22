import React from 'react';

const Button = ({ bgcolor, title }) => {
    return (
        <button className={` -${bgcolor} text-white py-2 px-4 rounded`}>
            {title}
        </button>
    );
};

export default Button;
