import { AvatarContainer } from "./styles";
import Image from 'next/image'
import ImageFile from '../../assets/images/dish.png'

const Avatar = ({ x, y }) => {
    return(
        <AvatarContainer x={x} y={y}>
            <Image src={ImageFile} width={30} height={30} />
        </AvatarContainer>
    )
}

export default Avatar