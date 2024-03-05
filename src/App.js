import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Regressia from "./regressia";
import Integratsia from "./integratsia";

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={
            <>
              <Link to={"/regressia"}>Regressia</Link>
              <Link to={"/integratsia"}>Integratsia</Link>
            </>
          } />
          <Route path="/regressia" element={
            <Regressia />
          } />
            <Route path="/integratsia" element={
            <Integratsia />
          } />
        </Routes>
      </>
    </Router>
  );
}

export default App;
