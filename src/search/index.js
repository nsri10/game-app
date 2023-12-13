import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import * as client from "./client";

import "./index.css"

function Search() {
    const [games, setGames] = useState([]);
    const [users, setUsers] = useState([]);
    const [discussions, setDiscussions] = useState([]);

    const getGames = async () => {
        const gotGames = await client.findAllGames(); //100
        setGames(gotGames);
    };

    useEffect(() => {
        getGames();
    }, []);

    return (
        <div>
            <h3>Results</h3>
            <h1>Games</h1>
            <div className="list-group" style={{ marginLeft: 25 }}>
                {games.map((game, index) => (
                    <Link
                        key={index}
                        to={`/details/${game.gameID}`}
                        className={"list-group-item result"}>
                        <div key={index} className="game_result">
                            <img className="review_pfp" src="/imgs/placeholders/674277730124300298.png" /><br />
                            <h2>{game.title}</h2>
                        </div>
                    </Link>

                ))}
            </div>

            <h1>Users</h1>
            <div className="list-group" style={{ marginLeft: 25 }}>
                {users.map((user, index) => (
                    <div key={index} className="list-group-item review">

                        <div style={{ display: "inline-block", width: "fit-content" }}>
                            <img className="review_pfp" src="/imgs/placeholders/674277730124300298.png" /><br />
                            <span>@{user.name}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Search;