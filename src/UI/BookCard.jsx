import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router';

const BookCard = ({book}) => {
    return (
   
            <Link to={`/bookDetails/${book.bookId}`} className="card bg-base-100 shadow-sm">
  <figure className='p-8 bg-gray-200'>
    <img className='rounded-xl h-[200px]'
      src={book.image}
      alt={book.bookName} />
  </figure>
  
  <div className="card-body">
    <div className="flex justify-between">
        {
        book.tags.map((tag,ind)=>{
            return <div key={ind} className="badge bg-green-100 text-green-400 font-semibold">{tag}</div>
        })
    }
    </div>
    
    <h2 className="card-title text-2xl font-bold">
      {book.bookName}
      
    </h2>
    <p className='text-l font-semibold'>By: {book.author}</p> 
     <div className=""></div>
    <div className="card-actions justify-between border-t border-dashed border-gray-300 pt-4 font-semibold text-xl items-center">
      
      <div className="">{book.category}</div>
      <div className="flex items-center gap-2">{book.rating}<FaRegStar /></div>
    </div>
  </div>
</Link>
       
    );
};

export default BookCard;