import { SectionTitle, StyledSection,} from "./styled";

const Section = ({ title, body }) => {

    return (
        <StyledSection>
            <SectionTitle>{title}</SectionTitle>
            {body}
        </StyledSection>
    );
};
export default Section;