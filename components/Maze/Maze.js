import {useEffect, useState} from "react";
import { MazeContainer, Tile, Cube, Message } from "./styles";
import Avatar from "@/components/Avatar";
import useArrowKeys from "../../hooks/useArrowKeys";
import {MAZE_MATRIX as grid, STATUS} from "../../constants";

const Maze = () => {
    const { playerPosition } = useArrowKeys()
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
        <>
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
        </>
    )
}

export default Maze