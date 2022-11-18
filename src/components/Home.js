import { useEffect, useState } from "react"
import ErrorPage from "./ErrorPage.js"


const Home = () => {

    const [games, setGames] = useState([])

    const fetchGames = async () => {
        let req = await fetch("http://localhost:3000/games")
        let res = await req.json()

        if(res.ok){
            setGames(res)
        } else {
            console.log('Oops! Failed to Game List!')
        }
    }

    useEffect(() => {
        fetchGames()
    }, [])


    if (!games) return <ErrorPage />

    return (
        
        <>
        {games.map((game) => {
            return (
                
                <GameCard
                name={game.name}
                genre={game.genre}
                developer={game.developer}
                plays={game.plays}
                game={game.game_link}
                />
            )
        })}
        </>
    )
}