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

export const AvatarIcon = styled.div`
  width: 2rem;
  height: 2rem;
  background: #7AD7A7;
  border-radius: 3.125rem ;
`