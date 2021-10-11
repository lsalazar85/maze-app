import { AvatarContainer, AvatarIcon } from "./styles";
import { object } from 'prop-types'

const Avatar = ({ position }) => {
    return(
        <AvatarContainer x={position.x} y={position.y}>
            <AvatarIcon />
        </AvatarContainer>
    )
}

Avatar.propTypes = {
    position: object.isRequired,
}

export default Avatar