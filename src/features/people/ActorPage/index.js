import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Container } from "../../../common/Container";
import ErrorPage from "../../../common/ErrorPage";
import { Loading } from "../../../common/Loading";
import About from "./About";
import {
  fetchActorDetails,
  selectActorInfo,
  selectActorPageStatus,
} from "./actorSlice";

const ActorPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const pageStatus = useSelector(selectActorPageStatus);
  const actorInfo = useSelector(selectActorInfo);

  useEffect(() => {
    dispatch(fetchActorDetails(id));
  }, [id]);

  return {
    loading: <Loading />,
    success: <About actorInfo={actorInfo} />,
    fail: <ErrorPage />,
  }[pageStatus];
};

export default ActorPage;
