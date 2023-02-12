import Animals from '../components/Animals';

function StartPage({newData}) {
    return(
        <div className="home">
            <h3> Životinje u našem zoološkom vrtu </h3>
            <Animals animals = {newData}/>
        </div>
    )
}

export default StartPage;