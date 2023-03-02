import { useSelector } from "react-redux";
import { selectPageStatus } from "../peopleSlice";
import { Loading } from "../../../common/Loading";
import ErrorPage from "../../../common/ErrorPage";
import PopularPeople from "./PopularPeople";

const PopularPeoplePage = () => {
  const pageStatus = useSelector(selectPageStatus);

  return {
    loading: <Loading />,
    success: <PopularPeople />,
    fail: <ErrorPage />,
  }[pageStatus];
};

export default PopularPeoplePage;
