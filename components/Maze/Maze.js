import {useEffect, useCallback} from "react";

import useMaze from "../../hooks/useMaze";
import {MAZE_MATRIX as grid} from "../../constants";
import {fetchingData} from "../../actions";

import Avatar from "@/components/Avatar";
import {
    MazeWrapper,
    MazeContainer,
    Row,
    Cube,
    Moves,
    MovesCount,
    ButtonReset
} from "./styles";

const Maze = () => {
    const { playerPosition, setPlayerPosition } = useMaze()

    const isGameOver = useCallback(async (player) => {
        if(player.x === 11 && player.y === 10){
            try{
                alert("You're doing it great! 🎉")
                await fetchingData(player.moves)
            } catch (e){
                console.log(e)
            }
        }
    }, [])

    const handleReset = () => {
        setPlayerPosition(player => ({...player, x: 1, y: 0, moves: 0}))
    }

    useEffect(() => {
        playerPosition && isGameOver(playerPosition);
    }, [isGameOver, playerPosition])

    return(
        <MazeWrapper>
            <Moves>
                <ButtonReset onClick={handleReset}>Reset</ButtonReset>
                <MovesCount>moves: {playerPosition.moves}</MovesCount>
            </Moves>
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