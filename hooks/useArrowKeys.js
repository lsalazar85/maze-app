import { useState, useEffect } from "react";

const useArrowKeys = () => {
    const [x, setX] = useState (0);
    const [y, setY] = useState (0);

    const increment = x => x + 1;
    const decrement = x => x - 1;

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

    return { x, y }
}

export default useArrowKeys