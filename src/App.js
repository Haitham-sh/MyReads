import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Search from "./Search";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/search" element={<Search />}></Route>
    </Routes>
  );
}

export default App;
