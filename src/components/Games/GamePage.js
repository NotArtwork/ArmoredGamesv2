
const GamePage = ({name, game, developer}) => {
    return(
        <div>
            <h1>
                {name}
            </h1>
            <h2> {developer} </h2>
            <iframe src={game} />
        </div>
    )
}