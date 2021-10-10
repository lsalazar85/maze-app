import {useEffect, useState} from "react";
import { MazeContainer, Tile, Cube, Message } from "./styles";
import Avatar from "@/components/Avatar";
import useMaze from "../../hooks/useMaze";
import {MAZE_MATRIX as grid, STATUS} from "../../constants";

const Maze = () => {
    const { state } = useMaze()
    const [finishWaze, setFinishWaze] = useState('')

    useEffect(() => {
        if(state && state.x === 11 && state.y === 10){
            console.log(STATUS)
            setFinishWaze(`Great! You're free 🎉`)
        } else {
            setFinishWaze('')
        }
    }, [state])

    return(
        <>
            <MazeContainer id='maze-container'>
                <Avatar x={state && state.x} y={state && state.y} />
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