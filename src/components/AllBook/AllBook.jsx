import React from 'react';

const AllBook = ({ book }) => {
    console.log(book);
    const { title, image, price, subtitle } = book
    return (
        <div className='overflow-hidden relative transform duration-200 transition hover:-translate-y-2'>
            <img
                src={image}
                alt=""
                className='object-cover w-full h-56 md:h-64 xl:h-80'
            />
            <div className='bg-black bg-opacity-75 text-gray-300 absolute inset-0 opacity-0 hover:opacity-100'>
                <p>{title}</p>
                <br />
                <p>{subtitle}</p>
                <br />
                <p>Price: {price}</p>
            </div>
        </div>
    );
};

export default AllBook;