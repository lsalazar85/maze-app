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
  justify-content: space-between;
  margin-bottom: 0.5rem;
  align-items: flex-end;
`

export const MovesCount = styled.span`
  font-weight: 700;
`

export const ButtonReset = styled.button`
  background: #7AD7A7;
  padding: 0.5rem 2rem;
  border-radius: 0.5rem;
  font-weight: 700;
  letter-spacing: 0.1rem;
  cursor: pointer;
`
