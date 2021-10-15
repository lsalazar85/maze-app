import styled from "styled-components";

export const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.25rem;
  height: 2.5rem;
  position: absolute;
  z-index: 1;
  left: ${({ x }) => x * 3.25 +'rem'};
  top: ${({ y }) => y * 2.5 +'rem'};
`

export const AvatarIcon = styled.div`
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 3.125rem;
  background: #7AD7A7;
`