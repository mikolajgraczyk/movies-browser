import { useSelector } from "react-redux";
import { selectPeople, selectPageStatus } from "../peopleSlice";
import { Loading } from "../../../common/Loading";
import ErrorPage from "../../../common/ErrorPage";
import PopularPeople from "./PopularPeople";

const PopularPeoplePage = () => {
  const people = useSelector(selectPeople);
  const pageStatus = useSelector(selectPageStatus);
  console.log(pageStatus);

  return {
    loading: <Loading />,
    success: <PopularPeople />,
    fail: <ErrorPage />,
  }[pageStatus];
};

export default PopularPeoplePage;