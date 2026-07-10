import React from 'react';
import BannerImg from './Banner.png'
const Banner = () => {
    return (
        
            <div className="hero bg-base-200 min-h-[70vh] rounded-2xl  mt-8 container mx-auto">
  <div className="hero-content flex justify-between items-center flex-col lg:flex-row-reverse w-full">
    <img
      src={BannerImg}
      
      
    />
    <div className='space-y-5'>
      <h1 className="text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>
     
      <button className="btn btn-success mt-3 text-white font-bold">View The List</button>
    </div>
  </div>
</div>
    
    );
};

export default Banner;