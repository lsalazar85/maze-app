import { string } from "prop-types";
import { TitleContainer, H1Element } from "./styles";

const Title = ({ title }) => (
    <TitleContainer>
        <H1Element>{title}</H1Element>
    </TitleContainer>
)

Title.propTypes = {
    title: string.isRequired,
}

export default Title