import React, { useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

const BookDetails = () => {
    const navigate = useNavigation()
    if (navigate.state === 'loading') {
        return <Spinner></Spinner>
    }

    const bookData = useLoaderData();
    const [fold, setFold] = useState(true)
    // console.log(book);
    const { image, title, desc, authors, publisher, year, rating, url, price } = bookData;

    return (
        <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
            {/* Container Box */}
            <div className='flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto'>
                {/* Image Container */}
                <div className=' lg:w-1/2 h-full'>
                    <img
                        src={image}
                        alt='book cover'
                        className='object-cover w-full  lg:h-full'
                    />
                </div>
                {/* Details Container */}
                <div className='p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2'>
                    <div>
                        <p className='badge'>Brand new</p>
                    </div>
                    <h5 className='mb-3 text-3xl font-extrabold leading-none sm:text-4xl'>
                        {title}
                    </h5>
                    <p className=' text-gray-900'>Authors: {authors.substring(0, 50)}</p>
                    <p className=' text-gray-900'>Publisher: {publisher}</p>
                    <p className=' text-gray-900'>Year: {year}</p>
                    <p className='mb-5 text-gray-900'>Rating: {rating}</p>
                    {fold ? (
                        <>
                            <p className=' text-gray-500'>{desc.slice(0, 100)}.....</p>
                            <p className='cursor-pointer text-blue-600 ' onClick={() => setFold(!fold)}>Read More</p>
                        </>
                    ) : (
                        <>
                            <p className=' text-gray-500'>{desc}</p>
                            <p className='cursor-pointer text-blue-600 ' onClick={() => setFold(!fold)}>Read Less</p>
                        </>
                    )}



                    <div className='flex gap-5 mt-8 items-center'>
                        <a href={url} target='_blank' className='inline-flex items-center h-12 px-6 mb-3 font-medium text-white transition duration-200 rounded shadow-md  md:mb-0 bg-blue-400 hover:bg-blue-700'>
                            Buy Now
                        </a>
                        <p className='items-center font-extrabold text-gray-600 '>
                            Price: {price}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;