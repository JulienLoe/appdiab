// import { useRef, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contact from './pages/Contact';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )

  /*let [fiche, setFiche] = useState([{
    id: 1,
    name: "toto",
    age: 30,
    hobbies: "sport"
  }])

  const handleDelete = (id) => {
    console.log(id);
    const copyFiche = [...fiche];
    console.log(copyFiche);
    const updateFiche = copyFiche.filter(fiche => fiche.id !== id);
    console.log(updateFiche);


    setFiche(updateFiche);
  }



  const toto = useRef()

  const more = (event) => {
    event.preventDefault();
    console.log(toto);
  }

  return (
    <div className="App">
      <ul>{fiche.map((element) => { return <li key={element.id}><button onClick={() => { handleDelete(element.id) }}>{element.name}</button></li> })}

      </ul>
      <form action="submit" onSubmit={more}>
        <input type="text" ref={toto} />
        <button>Yes</button>
      </form>
    </div>

  );
  */
}
export default App;
