import { SectionTitle, StyledTilesSection } from "./styled";

const TilesSection = ({ title, children, location }) => {
  return (
    <StyledTilesSection>
      <SectionTitle location={location}>{title}</SectionTitle>
      {children}
    </StyledTilesSection>
  );
};
export default TilesSection;
