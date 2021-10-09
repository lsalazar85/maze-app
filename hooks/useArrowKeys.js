import { useState, useEffect } from "react";
import { STATUS } from "../constants";

const useArrowKeys = () => {
    const [x, setX] = useState (50);
    const [y, setY] = useState (0);

    const increment = x => x + 50;
    const decrement = x => x - 50;

    const actionXMap = {
        ArrowLeft: decrement,
        ArrowRight: increment
    }
    const actionYMap = {
        ArrowDown: increment,
        ArrowUp: decrement
    }

    const handleKeyPress = e => {
        const actionX = actionXMap[e.key];
        const actionY = actionYMap[e.key];
        actionX && setX(actionX);
        actionY && setY(actionY);
    }

    useEffect (() => {
        document.addEventListener ("keydown", handleKeyPress);
    }, [])

    useEffect(() => {
        x === 550 && y === 500 && console.log(STATUS)
    }, [x, y])

    return { x, y }
}

export default useArrowKeys