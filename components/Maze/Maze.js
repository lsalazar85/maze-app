import {useEffect, useState } from "react";

import useMaze from "../../hooks/useMaze";
import {MAZE_MATRIX as grid, STATUS} from "../../constants";

import Avatar from "@/components/Avatar";
import {
    MazeWrapper,
    MazeContainer,
    Tile,
    Cube,
    Message,
    Moves,
    MovesCount
} from "./styles";

const Maze = () => {
    const { playerPosition } = useMaze()
    const [finishWaze, setFinishWaze] = useState('')

    useEffect(() => {
        if(playerPosition.x === 11 && playerPosition.y === 10){
            console.log(STATUS)
            setFinishWaze(`Great! You're free 🎉`)
        } else {
            setFinishWaze('')
        }
    }, [playerPosition])

    return(
        <MazeWrapper>
            <Moves>
                <MovesCount>moves: {playerPosition.moves}</MovesCount>
            </Moves>
            <MazeContainer id='maze-container'>
                <Avatar x={playerPosition.x} y={playerPosition.y} />
                {grid.map((subArray, idx) => {
                    return (
                        <Tile key={idx}>
                            {subArray.map((subItem, idx) => {
                                return (
                                    <Cube key={idx} bg={subItem} />
                                )
                            })}
                        </Tile>
                    )
                })}
            </MazeContainer>
            {finishWaze ? <Message>{finishWaze}</Message> : null}
        </MazeWrapper>
    )
}

export default Maze