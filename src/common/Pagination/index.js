import {
  StyledPagination,
  ButtonsWrapper,
  Button,
  InfoNumber,
  InfoText,
  PageInfo,
  LeftArrow,
  RightArrow,
  ButtonText,
} from "./styled";

const Pagination = () => {
  return (
    <StyledPagination>
      <ButtonsWrapper>
        <Button>
          <LeftArrow mobile />
          <LeftArrow />
          <ButtonText>First</ButtonText>
        </Button>
        <Button>
          <LeftArrow />
          <ButtonText>Previous</ButtonText>
        </Button>
      </ButtonsWrapper>
      <PageInfo>
        <InfoText>Page</InfoText>
        <InfoNumber>1</InfoNumber>
        <InfoText>of</InfoText>
        <InfoNumber>500</InfoNumber>
      </PageInfo>
      <ButtonsWrapper>
        <Button>
          <ButtonText>Next</ButtonText>
          <RightArrow />
        </Button>
        <Button>
          <ButtonText>Last</ButtonText>
          <RightArrow />
          <RightArrow mobile />
        </Button>
      </ButtonsWrapper>
    </StyledPagination>
  );
};

export default Pagination;
