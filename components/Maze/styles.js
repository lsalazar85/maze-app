import styled from "styled-components";

export const MazeContainer = styled.section`
  width: 600px;
  height: 600px;
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
  flex: 1 1 50px;
  background: ${({ bg }) => bg === 1 ? '#000000' : '#ffffff'};
`

export const Message = styled.span`
  font-size: 1rem;
  margin-top: 2rem;
  font-weight: 700;
`
