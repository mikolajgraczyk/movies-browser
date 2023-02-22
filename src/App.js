import Pagination from "./common/Pagination";
import Section from "./common/Section";
import MovieList from "./feautures/MovieList";

function App() {
  return (
    <>
      <Section
        title="Popular movies"
        body={<><MovieList /><Pagination /></>}
      />
    </>
  );
};

export default App;
