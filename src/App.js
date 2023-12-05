import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-icons";
import "bootstrap";

import { HashRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";

import Details from "./details/index.js";

import './App.css';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/details" />} />
        <Route path="/details/*" element={<Details />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
