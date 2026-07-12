import React, { createContext, useState } from 'react';
import { children } from 'react';
import { toast } from 'react-toastify';
export const BookContext=createContext();

const BookProvider = ({children}) => {
     const [storedBooks,setStoredBooks]=useState([]);
     const [wishList,setWishList]=useState([])
    const handleMarkAsRead=(expectedBooks)=>{
        const isExistBook=storedBooks.find(book=>book.bookId===expectedBooks.bookId);
        if(isExistBook){
            toast.error("🦄The Book is Already Existed", {
position: "top-center",
autoClose: 5000,

theme: "colored",

});
         
        }
        else{
            setStoredBooks([...storedBooks,expectedBooks])
            toast.success(`🦄${expectedBooks.bookName} is Added`, {
position: "top-center",
autoClose: 5000,

theme: "colored",

});
        }

    }
   
    const handleMarkAsWishList=(expectedBooks)=>{
 const isExistBook=storedBooks.find(book=>book.bookId===expectedBooks.bookId);
        if(isExistBook){
            toast.error(`${expectedBooks.bookName} Is Already in ReadList`);
            return;
        }

        const isExistReadList=wishList.find(book=>book.bookId===expectedBooks.bookId);
        if(isExistReadList){
            toast.error("🦄The Book is Already Existed", {
position: "top-center",
autoClose: 5000,

theme: "colored",

});
         
        }
        else{
            setWishList([...wishList,expectedBooks])
            toast.success(`🦄${expectedBooks.bookName} is Added to List`, {
position: "top-center",
autoClose: 5000,

theme: "colored",

});
        }

    }
    const data={
        handleMarkAsRead,
        storedBooks,
        setStoredBooks,
        wishList,
        setWishList,
        handleMarkAsWishList,
    }
    return <BookContext.Provider value={data}>
        {children}
    </BookContext.Provider>
    ;
};

export default BookProvider;