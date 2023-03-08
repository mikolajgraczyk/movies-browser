import { useEffect } from "react";
import PopularMoviesPage from "./features/movies/PopularMoviesPage";
import PopularPeoplePage from "./features/people/PopularPeoplePage";
import Header from "./common/Header";
import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchGenres, fetchMovies } from "./features/movies/moviesSlice";
import { fetchPeople } from "./features/people/peopleSlice";
import ActorPage from "./features/people/ActorPage";

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
        <Routes>
          <Route path="/movies" element={<PopularMoviesPage />} />
          <Route path="/people" element={<PopularPeoplePage />} />
          <Route path="/people/:id" element={<ActorPage />} />
          <Route path="/" element={<Navigate to="/movies" />} />
        </Routes>
    </>
  );
}
export default App;
