import { useEffect, useState } from "react";
import { MazeContainer } from "./styles";
import Avatar from "@/components/Avatar";
import useArrowKeys from "../../hooks/useArrowKeys";

const Maze = () => {
    const { x, y } = useArrowKeys()

    return(
        <MazeContainer id='maze-container'>
            <Avatar x={x} y={y} />
        </MazeContainer>
    )
}

export default Maze