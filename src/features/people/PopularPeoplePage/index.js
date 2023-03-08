import { useSelector } from "react-redux";
import { selectFetchingStatus } from "../peopleSlice";
import { Loading } from "../../../common/Loading";
import { Main } from "../../../common/Main";
import Header from "../../../common/Header";
import ErrorPage from "../../../common/ErrorPage";
import PopularPeople from "./PopularPeople";
import Pagination from "../../../common/Pagination";

const PopularPeoplePage = () => {
  const fetchingStatus = useSelector(selectFetchingStatus);

  return {
    loading: <Loading />,
    success: (
      <>
        <Header />
        <Main>
          <PopularPeople />
          <Pagination location="popularPeople" />
        </Main>
      </>
    ),
    fail: <ErrorPage />,
  }[fetchingStatus];
};

export default PopularPeoplePage;
