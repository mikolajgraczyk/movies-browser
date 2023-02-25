import Pagination from "./common/Pagination";
import PopularMoviesPage from "./features/movies/PopularMoviesPage";
import Header from "./common/Header";
import { HashRouter } from "react-router-dom";
import { Main } from "./common/Main";

function App() {
  return (
    <HashRouter>
      <Header />
      <Main>
        <PopularMoviesPage />
      </Main>
      <Pagination />
    </HashRouter>
  );
}

export default App;
