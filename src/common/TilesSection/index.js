import { SectionTitle, StyledTilesSection, SectionList } from "./styled";

const TilesSection = ({ title, children }) => {
  return (
    <StyledTilesSection>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </StyledTilesSection>
  );
};
export default TilesSection;
