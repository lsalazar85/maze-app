import { useEffect, useCallback} from "react";
import { MAZE_MATRIX as maze } from "../constants";
import useLocalStorage from "./useLocalStorage";

const useMaze = () => {
    const [playerPosition, setPlayerPosition] =
        useLocalStorage({ x: 1, y: 0, moves: 0 }, 'playerPosition')

    const handleKeyPress = useCallback((e) => {
        switch(e.keyCode){
            case 39:
                playerPosition.x !== maze.length - 1 &&
                !maze[playerPosition.y][playerPosition.x + 1] &&
                setPlayerPosition(player => ({...player, x: ++player.x, moves: ++player.moves}))
                break

            case 37:
                !maze[playerPosition.y][playerPosition.x - 1] &&
                setPlayerPosition(player => ({...player, x: --player.x, moves: ++player.moves}))
                break

            case 40:
                playerPosition.y !== maze.length - 1 &&
                !maze[playerPosition.y + 1][playerPosition.x] &&
                setPlayerPosition(player => ({...player, y: ++player.y, moves: ++player.moves}))
                break

            case 38:
                playerPosition.y !== 0 &&
                !maze[playerPosition.y - 1][playerPosition.x] &&
                setPlayerPosition(player => ({...player, y: --player.y, moves: ++player.moves}))
                break
        }
    }, [playerPosition.x, playerPosition.y, setPlayerPosition])

    useEffect (() => {
        document.addEventListener("keydown", handleKeyPress)
        return () => document.removeEventListener("keydown", handleKeyPress)
    }, [handleKeyPress, playerPosition])

    return { playerPosition, setPlayerPosition }
}

export default useMaze