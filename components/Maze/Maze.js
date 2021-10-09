import { MazeContainer, Tile, Cube } from "./styles";
import Avatar from "@/components/Avatar";
import useArrowKeys from "../../hooks/useArrowKeys";
import {MAZE_MATRIX as grid} from "../../constants";


const Maze = () => {
    const { x, y } = useArrowKeys()

    return(
        <MazeContainer id='maze-container'>
            <Avatar x={x} y={y} />
            {grid.maze.map((subArray, idx) => {
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
    )
}

export default Maze