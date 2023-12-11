import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import "./signup.css";

function Signup() {
  const { gameId } = useParams();
  const [game, setGame] = useState({});
  const URL = "http://localhost:4000/api/signup";
  return (
    <div className="d-flex">
      <div className="profile-text mt-5 ms-5">
        <h1>Username</h1>
        <p>
          Email <br />
          Phone <br />
        </p>
      </div>
    </div>
  );
}

export default Signup;
