import { useDispatch, useSelector } from "react-redux";
import {
  fetchPeople,
  selectFetchingStatus,
  selectPeopleTotalPage,
  updatePeopleCurrentPage,
} from "../peopleSlice";
import { Loading } from "../../../common/Loading";
import { Main } from "../../../common/Main";
import Header from "../../../common/Header";
import ErrorPage from "../../../common/ErrorPage";
import PopularPeople from "./PopularPeople";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Pagination from "../../../common/Pagination";
import NoResultsPage from "../../../common/NoResultsPage";

const PopularPeoplePage = () => {
  const fetchingStatus = useSelector(selectFetchingStatus);
  const fetchedPages = useSelector(selectPeopleTotalPage);
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams({ page: 1 });
  const currentPage = Number(searchParams.get("page")) || 1;
  const query = searchParams.get("search") || null;

  useEffect(() => {
    dispatch(updatePeopleCurrentPage(currentPage));
    dispatch(fetchPeople({ currentPage, query }));
  }, [currentPage, query, dispatch]);

  return {
    noResults: <NoResultsPage />,
    loading: <Loading />,
    success: (
      <>
        <Main>
          <PopularPeople />
          <Pagination location="popularPeople" fetchedPages={fetchedPages} />
        </Main>
      </>
    ),
    fail: <ErrorPage />,
  }[fetchingStatus];
};

export default PopularPeoplePage;
