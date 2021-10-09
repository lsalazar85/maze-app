import styled from "styled-components";

export const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  position: absolute;
  left: ${({ x }) => x+'px'};
  top: ${({ y }) => y+'px'};
`