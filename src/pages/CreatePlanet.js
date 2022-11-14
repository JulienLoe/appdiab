import React from 'react';
import FormPlanet from '../components/FormPlanet';
import Navbar from '../components/Navbar';

const CreatePlanet = () => {
    return (
        <div>
        <div className='titre'>
            <Navbar />
        </div>
        <div>
        <FormPlanet />
        </div>
        </div>
    );
};

export default CreatePlanet;