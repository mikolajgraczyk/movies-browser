import TilesSection from "../TilesSection";
import { Container } from "../Container";
import {
  StyledNoResultsImage,
} from "./styled";
import { useSearchParams } from "react-router-dom";

const NoResultsPage = () => {
    const searchQueryParamName = "search";
    const [searchParams] = useSearchParams({ [searchQueryParamName]: "" });
    const query = searchParams.get(searchQueryParamName);

  return (
    <Container>
      <TilesSection title={`Sorry, there are no results for “${query}”`} >
        <StyledNoResultsImage />
      </TilesSection>
    </Container>
  );
};

export default NoResultsPage;
