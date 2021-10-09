import { AvatarContainer } from "./styles";
import Image from 'next/image'
import ImageFile from '../../assets/images/dish.png'

const Avatar = ({ x, y }) => {
    return(
        <AvatarContainer x={x} y={y}>
            <Image src={ImageFile} width={40} height={40} />
        </AvatarContainer>
    )
}

export default Avatar