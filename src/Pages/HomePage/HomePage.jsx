import React from 'react';
import Banner from '../../Components/Shared/Navbar/HomePage/Banner/Banner';
import AllBooks from '../../Components/Shared/Navbar/HomePage/AllBooks';

const HomePage = () => {
    return (
        <div className=''>
           <Banner></Banner>
           <AllBooks></AllBooks>
        </div>
    );
};

export default HomePage;