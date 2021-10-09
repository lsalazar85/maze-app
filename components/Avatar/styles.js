import styled from "styled-components";

export const AvatarContainer = styled.div`
  width: 30px;
  height: 30px;
  position: relative;
  left: ${({ x }) => x+'rem'};
  top: ${({ y }) => y+'rem'};
`