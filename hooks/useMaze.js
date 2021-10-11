import { useContext } from "react";
import { useEffect, useReducer} from "react";
import { MAZE_MATRIX as maze } from "../constants";
import MainContext from "../context/MainContext";

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
    const { position } = useContext(MainContext)
    const [state, dispatch] = useReducer(reducer, position);

    useEffect (() => {
        const handleKeyPress = ({ key }) => dispatch({ type: 'keyPress', payload: key })
        document.addEventListener("keydown", handleKeyPress)
        return () => document.removeEventListener("keydown", handleKeyPress)
    }, [state])

    return { state }
}

export default useMaze