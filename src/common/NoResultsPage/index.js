import TilesSection from "../TilesSection";
import { Container } from "../Container";
import {
  StyledNoResultsImage,
} from "./styled";

const NoResultsPage = () => {
  return (
    <Container>
      <TilesSection title="Sorry, there are no results for “ ”">
        <StyledNoResultsImage />
      </TilesSection>
    </Container>
  );
};

export default NoResultsPage;
