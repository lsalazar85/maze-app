import { useState, useEffect, useReducer} from "react";
import { STATUS, MOVE_CONSTANT, MAZE_MATRIX } from "../constants";

const useArrowKeys = () => {
    const [playerPosition, setPlayerPosition] = useState({ x: 1, y: 0 })

    useEffect (() => {
        const handleKeyPress = e => {
            switch(e.key){
                case 'ArrowRight':
                    setPlayerPosition(player => ({...player, x: player.x + 1}))
                    break;

                case 'ArrowLeft':
                    setPlayerPosition(player => ({...player, x: player.x - 1}))
                    break;

                case 'ArrowDown':
                    setPlayerPosition(player => ({...player, y: player.y + 1}))
                    break;

                case 'ArrowUp':
                    setPlayerPosition(player => ({...player, y: player.y - 1}))
                    break;
            }
        }
        document.addEventListener("keydown", handleKeyPress)
        return () => document.removeEventListener("keydown", handleKeyPress)
    }, [])

    return { playerPosition }
}

export default useArrowKeys