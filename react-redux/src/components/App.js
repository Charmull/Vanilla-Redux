import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../routes/Home";
import Detail from "../routes/Detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/:id" exact element={<Detail />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
