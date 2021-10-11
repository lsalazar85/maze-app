import { useEffect, useState} from "react";
import { MAZE_MATRIX as maze } from "../constants";

const useMaze = () => {
    const [playerPosition, setPlayerPosition] = useState({ x: 1, y: 0 })

    useEffect (() => {
        const handleKeyPress = e => {
            switch(e.key){
                case "ArrowRight":
                    playerPosition.x !== maze.length - 1 &&
                    !maze[playerPosition.y][playerPosition.x + 1] &&
                    setPlayerPosition(player => ({...player, x: ++player.x}))
                    break

                case "ArrowLeft":
                    !maze[playerPosition.y][playerPosition.x - 1] &&
                    setPlayerPosition(player => ({...player, x: --player.x}))
                    break

                case "ArrowDown":
                    playerPosition.y !== maze.length -1 &&
                    !maze[playerPosition.y + 1][playerPosition.x] &&
                    setPlayerPosition(player => ({...player, y: ++player.y}))
                    break

                case "ArrowUp":
                    playerPosition.y !== 0 &&
                    !maze[playerPosition.y - 1][playerPosition.x] &&
                    setPlayerPosition(player => ({...player, y: --player.y}))
                    break
            }
        }
        document.addEventListener("keydown", handleKeyPress)
        return () => document.removeEventListener("keydown", handleKeyPress)
    }, [playerPosition])

    return { playerPosition }
}

export default useMaze