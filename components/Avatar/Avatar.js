import { AvatarContainer, AvatarIcon } from "./styles";

const Avatar = ({ x, y }) => {
    return(
        <AvatarContainer x={x} y={y}>
            <AvatarIcon />
        </AvatarContainer>
    )
}

export default Avatar