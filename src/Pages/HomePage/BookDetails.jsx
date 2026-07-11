import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    // console.log(params)
    const {id}=useParams();
    // console.log(id);
    const books=useLoaderData();
    // console.log(books)
    const [storedBooks,setStoredBooks]=useState([])
    const handleMarkAsRead=(expectedBooks)=>{
        const isExistBook=storedBooks.find(book=>book.bookId===expectedBooks.bookId);
        if(isExistBook){
            alert("The Book is Already Existed");
            return;
        }
        else{
            setStoredBooks([...storedBooks,expectedBooks])
        }

    }


    const expectedBooks=books.find(book=>book.bookId==id);
    // console.log(expectedBooks);
    
    const {yearOfPublishing,publisher,tags,category,rating,totalPages,review,image,author,bookName,bookId}=expectedBooks;
    return (
      <div className="grid md:grid-cols-2 card lg:card-side bg-base-100 shadow-sm container mx-auto mt-13  mb-8 gap-3">
  <figure className='bg-gray-100 '>
    <img
      src={image}
      alt={bookName} className='h-[400px]  rounded-2xl p-10 ' />
  </figure>
  <div className="card-body ">
    <h2 className="card-title text-3xl font-semibold">{bookName}</h2>
    <p className='text-2xl  '>By : {author}</p>
    <p className=' border-y'>{category}</p>
<p>Review:{review}</p>
<div className="flex items-center gap-6">
        {
        tags.map((tag,ind)=>{
            return <div key={ind} className="badge bg-green-100 text-green-400 font-semibold">{tag}</div>
        })
    }
    </div>
    <div className="  border-t space-y-1">
        <div className="flex justify-between items-center p-2 font-semibold">
            <span>Number of pages:</span><span>{totalPages}</span>
        </div>
        <div className="flex justify-between items-center p-2 font-semibold">
            <span>Publisher:</span><span>{publisher}</span>
        </div>
        <div className="flex justify-between items-center p-2 font-semibold">
            <span>Publish times:</span><span>{yearOfPublishing}</span>
        </div>
        
      <div className="flex  items-center gap-4">
        <button onClick={()=>handleMarkAsRead(expectedBooks)} className="btn  ">Marks to Read</button>
        <button className="btn btn-primary  ">Add to Wishlist</button>
      </div>
    </div>
  </div>
</div>
    );
};

export default BookDetails;