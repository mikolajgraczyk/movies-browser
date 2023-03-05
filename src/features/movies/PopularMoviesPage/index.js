import { useSelector } from "react-redux";
import { selectFetchingStatus } from "../moviesSlice";
import { Loading } from "../../../common/Loading";
import ErrorPage from "../../../common/ErrorPage";
import PopularMovies from "./PopularMovies";
import Pagination from "../../../common/Pagination";

const PopularMoviesPage = () => {
  const fetchingStatus = useSelector(selectFetchingStatus);

  return {
    loading: <Loading />,
    success: (
      <>
        <PopularMovies />
        <Pagination location="PopularMovies" />
      </>
    ),
    fail: <ErrorPage />,
  }[fetchingStatus];
};

export default PopularMoviesPage;
