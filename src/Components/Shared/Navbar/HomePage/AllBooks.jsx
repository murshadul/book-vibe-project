import React from 'react';
import { use } from 'react';

import BookCard from '../../../../UI/BookCard';
const BooksPromise=fetch('/Data.json')
.then(res=>res.json());
const AllBooks = () => {
    const books=use(BooksPromise);
    // console.log(books,"Books");
    return (
        <div className='container mx-auto  my-14'>
            <h2 className='font-bold text-2xl text-center'>Books</h2>
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
             {
                books.map((book,ind)=>{
                    return <BookCard key={ind} book={book}></BookCard>
                })
            }
           </div>
        </div>
    );
};

export default AllBooks;