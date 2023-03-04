import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Container } from "../../../common/Container";
import ErrorPage from "../../../common/ErrorPage";
import { Loading } from "../../../common/Loading";
import About from "./About";
import {
  fetchActorDetails,
  selectActorDetails,
  selectActorInfo,
  selectActorPageStatus,
  selectMoviesCast,
} from "./actorSlice";
import Cast from "./Cast";

const ActorPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const pageStatus = useSelector(selectActorPageStatus);

  const actorInfo = useSelector(selectActorInfo);
  const moviesCast = useSelector(selectMoviesCast);
  const actorDetails = useSelector(selectActorDetails);
  console.log(moviesCast);

  useEffect(() => {
    dispatch(fetchActorDetails(id));
  }, [id]);

  return {
    loading: <Loading />,
    success: (
      <>
        <About actorInfo={actorInfo} />
        <Cast moviesCast={moviesCast} />
      </>
    ),
    fail: <ErrorPage />,
  }[pageStatus];
};

export default ActorPage;
