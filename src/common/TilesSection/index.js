import { SectionTitle, StyledTilesSection, SectionList } from "./styled";

const TilesSection = ({ title, children }) => {
  return (
    <StyledTilesSection>
      <SectionTitle>{title}</SectionTitle>
      <SectionList>{children}</SectionList>
    </StyledTilesSection>
  );
};
export default TilesSection;
