import { useSelector } from "react-redux";
import { selectFetchingStatus } from "../moviesSlice";
import { Loading } from "../../../common/Loading";
import ErrorPage from "../../../common/ErrorPage";
import PopularMovies from "./PopularMovies";

const PopularMoviesPage = () => {
  const fetchingStatus = useSelector(selectFetchingStatus);

  return {
    loading: <Loading />,
    success: <PopularMovies />,
    fail: <ErrorPage />,
  }[fetchingStatus];
};

export default PopularMoviesPage;
