import React from 'react'
import Animal from './Animal'
import './Animals.css';

function Animals({animals}) {
  if(animals.length === 0) {
    return <div> Nema zivotinja </div>
  }
  return (
    <div className = "listAnimals">
      {
        animals.map((animal, key) => {
          if(animal.name != null && animal.locations[0] != null && animal.characteristics.favorite_food != null &&
            animal.characteristics.predators != null && animal.characteristics.top_speed != null) {
          return <div className = "card"> 
            <Animal key = {key} 
            name = {animal.name}
            location = {animal.locations[0]}
            favourite_food = {animal.characteristics.favorite_food}
            predators = {animal.characteristics.predators}
            top_speed = {animal.characteristics.top_speed}/>
          </div>
}})
      }
    </div>
  )
}

export default Animals;
