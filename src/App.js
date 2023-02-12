import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Research from './page/Research';
import Rate from './page/Rate';
import StartPage from './page/StartPage';
import { useState, useEffect } from 'react';;

function App() {

  // const names = ["Cheetah", "Blue Iguana"];
  // const[monkeys, setMonkeys] = useState([]);
  const [animals, setAnimals] = useState([]); //empty array
  const [mycleanAnimals, setCleanAnimals] = useState([]);
  // function loadAnimals() {
  // for(let i = 0; i < names.length; i++) {
    //console.log(names[i]);
  //   const showMonkeys = async ()=>{
  //     const response = await fetch('https://api.api-ninjas.com/v1/animals?name=' + 
  //     "monkeys",{headers: {
  //       'X-Api-Key': 'lRkR8bVm5BodLko2WAj/VA==GRBgySyyrK29fIgV'
  //     }});
  //     const data  = await response.json();
  //     setMonkeys(data);
  //     // console.log(data);
  // }
  
  function cleanAnimals() {
    let newAnimals = animals.filter((animal) => animal.name != null && animal.locations[0] != null && animal.characteristics.favorite_food != null &&
    animal.characteristics.predators != null && animal.characteristics.top_speed != null);
    setCleanAnimals(newAnimals);
  }

  const showAnimals = async ()=>{
      const response = await fetch('https://api.api-ninjas.com/v1/animals?name=' + 
      "mon",{headers: {
        'X-Api-Key': 'lRkR8bVm5BodLko2WAj/VA==GRBgySyyrK29fIgV'
      }});
      const data  = await response.json();
      setAnimals(data);
      cleanAnimals();
      // console.log(data);
  }
  
  useEffect(()=>{
    showAnimals();
  }, []);

  return (
    <div className="App">
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path = '/' element = {<StartPage newData = {animals}/>}>  Pocetna strana </Route>
        <Route path = '/search' element = {<Research file = {animals}/>}> </Route>
        <Route path = '/rating' element = {<Rate/>}> </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
