import styled from "styled-components";

export const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  position: absolute;
  z-index: 10;
  left: ${({ x }) => x * 2.5 +'rem'};
  top: ${({ y }) => y * 2.5 +'rem'};
`

export const AvatarIcon = styled.div`
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 3.125rem;
  background: #7AD7A7;
`