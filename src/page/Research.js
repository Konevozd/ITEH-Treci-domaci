import ResearchPart from '../components/ResearchPart.jsx';
import './Research.css'
import { useState, useEffect } from 'react';
function Research({file}) {

    const [mycleanAnimals, setCleanAnimals] = useState([]);
    function cleanAnimals() {
        let newAnimals = file.filter((animal) => animal.name != null && animal.locations[0] != null && animal.characteristics.favorite_food != null &&
        animal.characteristics.predators != null && animal.characteristics.top_speed != null);
        setCleanAnimals(newAnimals);
    }

    useEffect(()=>{
        cleanAnimals();
      }, []);

    return(
        <div>
            <ResearchPart/>
            <div>
                <table className="table" id = "myTable">
                    <thead>
                        <th> Name </th>
                        <th> Location </th>
                        <th> Favourite food </th>
                        <th> Predators </th>
                        <th> Top speed </th>
                    </thead>
                    <tbody>
                        {
                        mycleanAnimals.map((animal, key) => (
                            <tr key = {key}>
                                <td>{animal.name}</td>
								<td>{animal.locations[0]}</td>
								<td>{animal.characteristics.favorite_food}</td>
								<td>{animal.characteristics.predators}</td>
								<td>{animal.characteristics.top_speed}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )

}

export default Research;