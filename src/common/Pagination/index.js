import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import {
  selectMoviesCurrentPage,
  selectMoviesTotalPages,
} from "../../features/movies/moviesSlice";
import {
  selectPeopleCurrentPage,
  selectPeopleTotalPages,
} from "../../features/people/peopleSlice";
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
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const { pathname } = useLocation();
  const currentPage = Number(searchParams.get("page")) || 1;
  const totalPages = useSelector(selectMoviesTotalPages);
  // const currentMoviesPage = useSelector(selectMoviesCurrentPage);
  // const currentPeoplePage = useSelector(selectPeopleCurrentPage)
  // const totalMoviesPages = useSelector(selectMoviesTotalPages);
  // const totalPeoplePages = useSelector(selectPeopleTotalPages)

  const onGoToFirst = () => {
    if (currentPage !== 1) {
      setSearchParams({ page: 1 });
    }
  };

  const onGoToPrevious = () => {
    if (currentPage !== 1) {
      const previousPage = currentPage - 1;
      setSearchParams({ page: previousPage });
    }
  };

  const onGoToNext = () => {
    if (currentPage !== totalPages) {
      const nextPage = currentPage + 1;
      setSearchParams({ page: nextPage });
    }
  };

  const onGoToLast = () => {
    if (currentPage !== totalPages) {
      setSearchParams({ page: totalPages });
    }
  };

  return (
    <StyledPagination>
      <ButtonsWrapper>
        <Button disabled={currentPage === 1} onClick={onGoToFirst}>
          <LeftArrow mobile="true" />
          <LeftArrow />
          <ButtonText>First</ButtonText>
        </Button>
        <Button disabled={currentPage === 1} onClick={onGoToPrevious}>
          <LeftArrow />
          <ButtonText>Previous</ButtonText>
        </Button>
      </ButtonsWrapper>
      <PageInfo>
        <InfoText>Page</InfoText>
        <InfoNumber>{currentPage}</InfoNumber>
        <InfoText>of</InfoText>
        <InfoNumber>{totalPages}</InfoNumber>
      </PageInfo>
      <ButtonsWrapper>
        <Button disabled={currentPage === totalPages} onClick={onGoToNext}>
          <ButtonText>Next</ButtonText>
          <RightArrow />
        </Button>
        <Button disabled={currentPage === totalPages} onClick={onGoToLast}>
          <ButtonText>Last</ButtonText>
          <RightArrow />
          <RightArrow mobile="true" />
        </Button>
      </ButtonsWrapper>
    </StyledPagination>
  );
};

export default Pagination;
