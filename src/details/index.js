import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import "./details.css";

function Details() {
    const { gameId } = useParams();
    const [game, setGame] = useState({});
    const URL = "http://localhost:4000/api/games";

    const findGameById = async (gameId) => {
        const response = await axios.get(
            `${URL}/${gameId}`
        );
        //console.log(response);
        setGame(response.data);
    };
    return (
        <div>
            <h1>const</h1>
        </div>
    )
}

export default Details;