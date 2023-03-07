import { useDispatch, useSelector } from "react-redux";
import {
  fetchPeople,
  selectFetchingStatus,
  updatePeopleCurrentPage,
} from "../peopleSlice";
import { Loading } from "../../../common/Loading";
import ErrorPage from "../../../common/ErrorPage";
import PopularPeople from "./PopularPeople";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const PopularPeoplePage = () => {
  const fetchingStatus = useSelector(selectFetchingStatus);
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams({ page: 1 });
  const currentPage = Number(searchParams.get("page")) || 1;

  useEffect(() => {
    setSearchParams(searchParams);
  }, []);

  useEffect(() => {
    dispatch(updatePeopleCurrentPage(currentPage));
    dispatch(fetchPeople({ currentPage }));
  }, [currentPage]);

  return {
    loading: <Loading />,
    success: <PopularPeople />,
    fail: <ErrorPage />,
  }[fetchingStatus];
};

export default PopularPeoplePage;
