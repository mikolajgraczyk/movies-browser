import {
  StyledPagination,
  ButtonsWrapper,
  Button,
  InfoNumber,
  InfoText,
  PageInfo,
} from "./styled";

const Pagination = () => {
  return (
    <StyledPagination>
      <ButtonsWrapper>
        <Button>First</Button>
        <Button>Previous</Button>
      </ButtonsWrapper>
      <PageInfo>
        <InfoText>Page</InfoText>
        <InfoNumber>1</InfoNumber>
        <InfoText>of</InfoText>
        <InfoNumber>500</InfoNumber>
      </PageInfo>
      <ButtonsWrapper>
        <Button>Next</Button>
        <Button>Last</Button>
      </ButtonsWrapper>
    </StyledPagination>
  );
};

export default Pagination;
