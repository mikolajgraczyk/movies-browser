import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Container } from "../../../common/Container";
import { fetchMovieDetails, selectFetchingStatus } from "./MovieSlice";
import Header from "../../../common/Header";
import About from "./About";
import BackgroundPoster from "./BackgroundPoster";
import Cast from "./Cast";
import Crew from "./Crew";
import { Loading } from "../../../common/Loading";
import ErrorPage from "../../../common/ErrorPage";

const MoviePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const status = useSelector(selectFetchingStatus);

  useEffect(() => {
    dispatch(fetchMovieDetails(id));
  }, [id]);

  return {
    loading: <Loading />,
    success: (
      <>
        <Header isBlackBackground />
        <BackgroundPoster />
        <Container>
          <About />
          <Cast />
          <Crew />
        </Container>
      </>
    ),
    fail: <ErrorPage />,
  }[status];
};

export default MoviePage;
