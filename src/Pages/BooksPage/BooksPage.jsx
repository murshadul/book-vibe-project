import React, { useContext } from 'react';
import { BookContext } from '../../Context/BookProvider';

const BooksPage = () => {
    const {storedBooks,wishList} =useContext(BookContext);
    // console.log(storedBooks,wishList);
    console.log(wishList);
   
    return (
        <div className='container mx-auto'>
         ReadList: {storedBooks.length}
         WishList:{wishList.length}
        </div>
    );
};

export default BooksPage;