import Pagination from "./common/Pagination";
import Header from "./common/Header";
import ActorTile from "./features/actors/ActorTile";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Header />
      <Pagination />
      <ActorTile />
    </HashRouter>
  );
}

export default App;
