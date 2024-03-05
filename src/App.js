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
              <Link to={"/intelektual"}>Intelektual uchun</Link>
              <Link to={"/tizimli"}>Tizimli dasturlash uchun</Link>
            </>
          } />
          <Route path="/intelektual" element={
            <Regressia />
          } />
            <Route path="/tizimli" element={
            <Integratsia />
          } />
        </Routes>
      </>
    </Router>
  );
}

export default App;
