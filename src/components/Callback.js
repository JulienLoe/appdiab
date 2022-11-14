import React, { useState } from 'react';

const Callback = () => {

    const [activeColor, setActiveColor] = useState(null);

    const handleChange = (e) =>{
        setActiveColor(e.target.value)
        
    }
    return (
        <div>
            <input onChange={handleChange} value={activeColor}></input>
            <h1>{activeColor}</h1>
        </div>
    );
};

export default Callback;