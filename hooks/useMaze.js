import { useState, useEffect, useReducer} from "react";
import { STATUS, MOVE_CONSTANT, MAZE_MATRIX } from "../constants";

const reducer =  (state, { type, payload }) => {
    switch(type) {
        case 'keyPress': {
            if(payload === "ArrowRight"){
               return  {...state, x: state && state.x + 1}
            }

            if(payload === "ArrowLeft"){
                return  {...state, x: state && state.x - 1}
            }

            if(payload === "ArrowDown"){
                return  {...state, y: state && state.y + 1}
            }

            if(payload === "ArrowUp"){
                return  {...state, y: state && state.y - 1}
            }
            break
        }
        default:
            return state
    }
}

const useMaze = () => {
    const [state, dispatch] = useReducer(reducer, { x: 1, y: 0});

    useEffect (() => {
        const handleKeyPress = ({ key }) => dispatch({ type: 'keyPress', payload: key })
        document.addEventListener("keydown", handleKeyPress)
        return () => document.removeEventListener("keydown", handleKeyPress)
    }, [])

    return { state }
}

export default useMaze