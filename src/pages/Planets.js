import Navbar from '../components/Navbar';
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

const Planets = () => {

    const [data, setData] = useState([]);
    const [count, setCount] = useState(0);

    const counter = () =>{
        setCount(count + 1);
        console.log(count);
    }

    const handleClick = useCallback( (e, index) =>{axios.delete(`planets/${index}`,);
      }, [])
    
     useEffect(() =>{
        (async()=>{
         const result = await axios('/planets',);
     setData(result.data)})();
     },[count])

    return (
        <>
        <div className='titre'>
            <Navbar />
        </div>
        {data.map((elements, index) =>{
            return(
                <div className='pagePlanets'>
                <div className='cartPlanets'>
                    <ul className='listPlanets'>
            <li key={index}>{elements.type}</li>
            <li key={index}>{elements.name}</li>
            <li key={index}>{elements.diameter}</li>
            <li key={index}>{elements.mass}</li>
            <li key={index}>{elements.description}</li>
            <button key={elements._id} onClick={(e) =>{handleClick(e, elements._id); counter()}}>Delete</button>
            </ul>
            </div>
            </div>
            )
        })}
        {/* {console.log(data[0].title)} */}
        </>
    );
};

export default Planets;