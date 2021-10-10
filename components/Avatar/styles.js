import styled from "styled-components";

export const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  position: absolute;
  z-index: 10;
  left: ${({ x }) => x * 3.125 +'rem'};
  top: ${({ y }) => y * 3.125 +'rem'};
`