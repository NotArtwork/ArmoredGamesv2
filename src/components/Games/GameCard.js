import GamePage from './GamePage.js'


const GameCard = ({name, genre, developer, plays, game, image}) => {
    return (
        <div>
            <image src={image}></image>
            <h3> {name} </h3>
            <h3> {developer} </h3>
            <p> {genre} </p>
            <p> {plays} </p>
        </div>
    )
}

export default GameCard