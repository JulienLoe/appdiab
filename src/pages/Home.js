import React from 'react';
import Navbar from '../components/Navbar';
import BtnHome from '../components/BtnHome';

const Home = () => {
    return (
        <div className='home'>
            <div className='titre'>
                <Navbar />
            </div>
            <div>
                <BtnHome />
            </div>
            <div className='essai'>
            </div>

        </div>
    );
};

export default Home;