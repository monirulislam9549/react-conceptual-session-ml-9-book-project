import React from 'react';
import { Link } from 'react-router-dom';

const AllBook = ({ book }) => {
    console.log(book);
    const { title, image, price, subtitle } = book
    return (
        <Link to={`/book/${book.isbn13}`}>
            <div className='overflow-hidden relative transform duration-200 transition hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl'>
                <img
                    src={image}
                    alt=""
                    className='object-cover w-full h-56 md:h-64 xl:h-80'
                />
                <div className='bg-black bg-opacity-75 text-gray-300 absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-200 px-6 py-4 flex flex-col'>
                    <p>{title}</p>
                    <br />
                    <p>{subtitle.slice(0, 45)}...</p>
                    <br />
                    <p className='mt-auto'>Price: {price}</p>
                </div>
            </div>
        </Link>
    );
};

export default AllBook;