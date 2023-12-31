import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import * as client from "./client";

import "./search.css";
import GameImg from "./img";

function Search() {
  const { searchString } = useParams();
  const [games, setGames] = useState([]);
  const [users, setUsers] = useState([]);

  const getGames = async () => {
    if (searchString) {
      const searchGames = await client.findGameByName(searchString);
      setGames(searchGames);
      return;
    }
    const gotGames = await client.findAllGames();

    setGames(gotGames);
  };

  const getUsers = async () => {
    const gotUsers = await client.findAllUsers();

    if (searchString) {
      const searchUsers = gotUsers.filter((r) =>
        r.username.includes(searchString)
      );
      setUsers(searchUsers);
      return;
    }
    setUsers(gotUsers);
  };

  useEffect(() => {
    getGames();
    getUsers();
    console.log(searchString);
  }, []);

  //  /imgs/placeholders/shoot.png ${getImgByGameId(game.id)} https:${game.cover.url}
  return (
    <div className="row" key={searchString}>
      <h3>Results</h3>
      <div className="col">
        <h1>Games ({games.length})</h1>
        <div className="list-group" style={{ marginLeft: 25 }}>
          {games.map((game, index) => (
            <Link
              key={index}
              to={`/details/${game.id}`}
              className={"list-group-item result"}
            >
              <div key={index} className="game_result">
                <GameImg gameId={game.id} />
                <br />
                <h2 className="hover">{game.name}</h2>
              </div>
              <hr />
            </Link>
          ))}
        </div>
      </div>

      <div className="col">
        <h1>Users</h1>
        <div className="list-group" style={{ marginLeft: 25 }}>
          {users.map((user, index) => (
            <div key={index} className="list-group-item review">
              <div style={{ display: "inline-block", width: "fit-content" }}>
                <img
                  className="review_pfp"
                  src="/imgs/placeholders/674277730124300298.png"
                />
                <br />
                <span>@{user.username}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Search;
