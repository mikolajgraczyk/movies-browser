import Pagination from "./common/Pagination";
import Section from "./common/Section";
import MovieList from "./feautures/MovieList";
import Header from "./common/Header";

function App() {
  return (
    <>
      <Header />
      <Section
        title="Popular movies"
        body={
          <MovieList />
        }
      />   
      <Pagination />
    </>
  );
}

export default App;
