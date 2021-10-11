import styled from "styled-components";

export const MazeWrapper = styled.main`
  display: flex;
  flex-direction: column;
`

export const MazeContainer = styled.section`
  width: 39rem;
  height: 30rem;
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const Row = styled.div`
    display: flex;
    width: 100%;
    position: relative;
`

export const Cube = styled.div`
  border: 1px solid #ffffff;
  display: flex;
  flex: 1 1 auto;
  background: ${({ bg }) => bg ? '#000000' : '#ffffff'};
`

export const Moves = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const MovesCount = styled.span`
    font-weight: 700;
`
