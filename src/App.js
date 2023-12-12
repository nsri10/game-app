import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-icons";
import "bootstrap";

import { HashRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";

import "./App.css";
import Webpage from "./webpage/index.js";
import Signup from "./signup/index.js";
import Signin from "./signin/index.js";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/*" element={<Webpage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </HashRouter>
  );
}

export default App;