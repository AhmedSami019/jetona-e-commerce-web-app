import React from 'react';

import banner from "../../assets/Perfect-Ecommerce-Sales-Banner.webp"

const Header = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-center gap-10 py-10 w-11/12 mx-auto mt-20'>
            <div className='lg:w-6/12 mx-auto space-y-5 text-center lg:text-start'>
                <h2 className='text-5xl lg:text-7xl font-bold'>It's time to Explore something new </h2>
                <p className='text-2xl text-gray-700'>we have too much collection of every type of products. From our website you get all original products. </p>
                <button className='btn btn-main'>Shop Now</button>
            </div>
            <div className='lg:w-6/12 mx-auto'><img className='rounded-xl w-full' src={banner} alt="" /></div>
        </div>
    );
};

export default Header;