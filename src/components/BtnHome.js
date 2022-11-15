import React, { useEffect, useState } from 'react';
import gsap from 'gsap';

const BtnHome = () => {
    const [click, setClick] = useState(false)
    const handleClick = () =>{setClick(true)}

    useEffect(() =>{
        if (click===true) {
        gsap.to( { rotation: 360, duration: 2, ease: "bounce.out" }); }})
     
    return (
        
            <btn className=".purple" onClick={handleClick}></btn>
        
    );
};

export default BtnHome;