import Pagination from "./common/Pagination";
import Header from "./common/Header";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Header />
      <Pagination />
    </HashRouter>
  );
}

export default App;
