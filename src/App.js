import Section from "./common/Section";
import MovieList from "./feautures/MovieList";

function App() {
  return (
    <>
      <Section
        title="Popular movies"
        body={<MovieList />}
      />
    </>
  );
};

export default App;
