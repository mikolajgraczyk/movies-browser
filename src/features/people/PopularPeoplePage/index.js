import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectPageStatus, selectPeople, fetchPeople } from "../peopleSlice";
import { Loading } from "../../../common/Loading";
import ErrorPage from "../../../common/ErrorPage";
import PopularPeople from "./PopularPeople";

const PopularPeoplePage = () => {
  const pageStatus = useSelector(selectPageStatus);
  const people = useSelector(selectPeople);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPeople());
  }, []);
  
  return {
    loading: <Loading />,
    success: <PopularPeople />,
    fail: <ErrorPage />,
  }[pageStatus];
};

export default PopularPeoplePage;