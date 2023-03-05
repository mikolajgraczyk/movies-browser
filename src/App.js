import { useEffect } from "react";
import Pagination from "./common/Pagination";
import PopularMoviesPage from "./features/movies/PopularMoviesPage";
import PopularPeoplePage from "./features/people/PopularPeoplePage";
import Header from "./common/Header";
import { Main } from "./common/Main";
import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchGenres, fetchMovies } from "./features/movies/moviesSlice";
import { fetchPeople } from "./features/people/peopleSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGenres());
    dispatch(fetchMovies());
    dispatch(fetchPeople());

  }, []);
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path="/movies" element={<PopularMoviesPage />} />
          <Route path="/people" element={<PopularPeoplePage />} />
          <Route path="/" element={<Navigate to="/movies" />} />
        </Routes>
      </Main>
    </>
  );
}
export default App;
