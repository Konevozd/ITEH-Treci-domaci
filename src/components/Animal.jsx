function Animal({ id,name, location, favourite_food, predators,top_speed}){

    return(
        <div>
            <h3> {name} </h3>
            <p>
                Location: {location}<br></br>
                Favorite food: {favourite_food} <br></br>
                Predators: {predators} <br></br>
                Top speed: {top_speed}
            </p>
        </div>
    )

}

export default Animal;