import {useEffect} from "react";

import useMaze from "../../hooks/useMaze";
import {MAZE_MATRIX as grid, STATUS} from "../../constants";
import {fetchingData} from "../../actions";

import Avatar from "@/components/Avatar";
import {
    MazeWrapper,
    MazeContainer,
    Row,
    Cube,
    Moves,
    MovesCount,
} from "./styles";

const Maze = () => {
    const { playerPosition } = useMaze()

    useEffect(() => {
        if(playerPosition.x === 11 && playerPosition.y === 10){
            try{
                fetchingData()
                alert(STATUS.message)
            } catch (e){
                console.log(e)
            }
        }
    }, [playerPosition])

    return(
        <MazeWrapper>
            <Moves><MovesCount>moves: {playerPosition.moves}</MovesCount></Moves>
            <MazeContainer>
                <Avatar position={playerPosition} />
                {grid.map((subArray, idx) => (
                    <Row key={idx}>
                        {subArray.map((subItem, idx) => (
                            <Cube key={idx} bg={subItem} />
                        ))}
                    </Row>
                ))}
            </MazeContainer>
        </MazeWrapper>
    )
}

export default Maze