import Pagination from "./common/Pagination";
import TilesSection from "./common/TilesSection";
import PopularMoviesPage from "./features/movies/PopularMoviesPage";
import ActorTile from "./features/people/ActorTile";
import Header from "./common/Header";
import { Main } from "./common/Main";
import { Routes, Route, Navigate } from "react-router-dom";


function App() {
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path="/movies" element={
            <PopularMoviesPage />
          } />
          <Route path="/people" element={
            <TilesSection title="Popular people">
              <ActorTile />
            </TilesSection>
          } />
          <Route path="/" element={<Navigate to="/movies" />} />
        </Routes>
      </Main>
      <Pagination />
    </>
  );
}
export default App;
