import { useState } from "react";
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
  const [currentPage, setCurrentPage] = useState(1);

  const onGoToFirst = () => {
    if (currentPage !== 1) {
      setCurrentPage(1);
    }
  };

  const onGoToPrevious = () => {
    if (currentPage !== 1) {
      setCurrentPage((currentPage) => currentPage - 1);
    }
  };

  const onGoToNext = () => {
    if (currentPage !== 500) {
      setCurrentPage((currentPage) => currentPage + 1);
    }
  };

  const onGoToLast = () => {
    if (currentPage !== 500) {
      setCurrentPage(500);
    }
  };

  return (
    <StyledPagination>
      <ButtonsWrapper>
        <Button onClick={onGoToFirst}>
          <LeftArrow mobile="true" />
          <LeftArrow />
          <ButtonText>First</ButtonText>
        </Button>
        <Button onClick={onGoToPrevious}>
          <LeftArrow />
          <ButtonText>Previous</ButtonText>
        </Button>
      </ButtonsWrapper>
      <PageInfo>
        <InfoText>Page</InfoText>
        <InfoNumber>{currentPage}</InfoNumber>
        <InfoText>of</InfoText>
        <InfoNumber>500</InfoNumber>
      </PageInfo>
      <ButtonsWrapper>
        <Button onClick={onGoToNext}>
          <ButtonText>Next</ButtonText>
          <RightArrow />
        </Button>
        <Button onClick={onGoToLast}>
          <ButtonText>Last</ButtonText>
          <RightArrow />
          <RightArrow mobile="true" />
        </Button>
      </ButtonsWrapper>
    </StyledPagination>
  );
};

export default Pagination;
