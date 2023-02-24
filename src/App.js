import Pagination from "./common/Pagination";
import Section from "./common/Section";
import MovieList from "./feautures/MovieList";
import Header from "./common/Header";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Header />
      <Section
        title="Popular movies"
        body={
          <MovieList />
        }
      />   
      <Pagination />
    </HashRouter>
  );
}

export default App;
