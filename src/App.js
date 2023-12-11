import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-icons";
import "bootstrap";

import { HashRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";

import './App.css';
import Webpage from './webpage/index.js';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/*" element={<Webpage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;