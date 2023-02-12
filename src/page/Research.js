import ResearchPart from '../components/ResearchPart.jsx';
import './Research.css'

function Research({file}) {

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
                        file.map((animal, key) => (
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