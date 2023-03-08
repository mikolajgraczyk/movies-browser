import { useSelector } from "react-redux";
import { selectFetchingStatus } from "../moviesSlice";
import { Loading } from "../../../common/Loading";
import { Main } from "../../../common/Main";
import Header from "../../../common/Header";
import ErrorPage from "../../../common/ErrorPage";
import PopularMovies from "./PopularMovies";
import Pagination from "../../../common/Pagination";

const PopularMoviesPage = () => {
  const fetchingStatus = useSelector(selectFetchingStatus);

  return {
    loading: <Loading />,
    success: (
      <>
        <Header />
        <Main>
          <PopularMovies />
          <Pagination location="popularMovies" />
        </Main>
      </>
    ),
    fail: <ErrorPage />,
  }[fetchingStatus];
};

export default PopularMoviesPage;
