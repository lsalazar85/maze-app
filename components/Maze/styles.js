import styled from "styled-components";

export const MazeContainer = styled.section`
  width: 30rem;
  height: 30rem;
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const Tile = styled.div`
    display: flex;
    width: 100%;
    position: relative;
`

export const Cube = styled.div`
  border: 1px solid #ffffff;
  display: flex;
  flex: 1 1 2.5rem;
  background: ${({ bg }) => bg === 1 ? '#000000' : '#ffffff'};
`

export const Message = styled.span`
  font-size: 1rem;
  font-weight: 700;
  position: absolute;
  bottom: 4rem;
`
