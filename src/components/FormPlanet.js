import { useState } from "react";
import React from "react";
// const handlePost = (e) =>{
//     const formPlanet = {type, name, diameter, mass, description};
//     console.log(formPlanet);
// }


const FormPlanet = () => {

    const handleSubmit = (e) =>{
        e.preventDefault()
    const planet = {type, name, diameter, mass, description};


    fetch('http://localhost:8080/API',{
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(planet)
    }
    )
    .then(() =>{console.log('données sur la DB !')})
    .catch((err) =>{
        console.log(err);
    })
    }


    const [type, setType] = useState('');
    const [name, setName] = useState('');
    const [diameter, setDiameter] = useState('');
    const [mass, setMass] = useState('');
    const [description, setDescription] = useState('');

    return (
            <div className='containerForm'>
                <form  onSubmit={handleSubmit} className='form'>
                    <div className='formDiv'>
                        <label for='type'>Type</label>
                        <input type='text' id='type' name='type' value={type} onChange={(e) => setType(e.target.value)}></input>
                    </div>
                    <div className='formDiv'>
                        <label for='name'>Name</label>
                        <input type='text' id='name' name='name' value={name} onChange={(e) => setName(e.target.value)}></input>
                    </div>
                    <div className='formDiv'>
                        <label for='diameter'>Equatorial Diameter</label>
                        <input type='text' id='diameter' name='diameter' value={diameter} onChange={(e) => setDiameter(e.target.value)}></input>
                    </div>
                    <div className='formDiv'>
                        <label for='mass'>Mass</label>
                        <input type='text' id='mass' name='mass' value={mass} onChange={(e) =>setMass(e.target.value)}></input>  
                    </div>
                    <div className='formDiv'>
                        <label for='name'>Description</label>
                        <textarea id='description' name='description' cols="30" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                    </div>
                <div className='divBtnSubmit'>
                        <button type='submit' className='btnSubmit'>Create a planet</button>
                    </div>
                    </form>
            </div>
    );
    };

export default FormPlanet;