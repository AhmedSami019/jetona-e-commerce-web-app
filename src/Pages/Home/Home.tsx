import React from 'react';
import Header from '../../Components/Header/Header';
import Products from '../../Components/Products/Products';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <main className='w-11/12 mx-auto'>
                <Products></Products>
            </main>
        </div>
    );
};

export default Home;