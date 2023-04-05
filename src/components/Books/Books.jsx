import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllBook from '../AllBook/AllBook';

const Books = () => {
    const booksData = useLoaderData();
    // console.log(booksData.books);
    return (
        <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
            <div className='grid gap-6 mb-8 lg:grid-cols-4 md:grid-cols-2'>
                {
                    booksData.books.map(book => <AllBook
                        book={book}
                        key={book.isbn13}
                    ></AllBook>)
                }
            </div>
        </div>
    );
};

export default Books;