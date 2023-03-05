import { useSelector } from "react-redux";
import { selectFetchingStatus } from "../peopleSlice";
import { Loading } from "../../../common/Loading";
import ErrorPage from "../../../common/ErrorPage";
import PopularPeople from "./PopularPeople";
import Pagination from "../../../common/Pagination";

const PopularPeoplePage = () => {
  const fetchingStatus = useSelector(selectFetchingStatus);

  return {
    loading: <Loading />,
    success: (
      <>
        <PopularPeople />
        <Pagination location="PopularPeople" />
      </>
    ),
    fail: <ErrorPage />,
  }[fetchingStatus];
};

export default PopularPeoplePage;
