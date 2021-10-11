import { AvatarContainer, AvatarIcon } from "./styles";

const Avatar = ({ position }) => {
    return(
        <AvatarContainer x={position.x} y={position.y}>
            <AvatarIcon />
        </AvatarContainer>
    )
}

export default Avatar