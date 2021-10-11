import { LoaderContainer } from "./styles";
import Image from 'next/image'

const Loader = () => (
    <LoaderContainer>
        <Image src='/loader.gif' width={80} height={70} />
    </LoaderContainer>
)

export default Loader