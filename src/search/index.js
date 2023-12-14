import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import * as client from "./client";

import "./search.css"

function Search() {
    const { searchString } = useParams();
    const [games, setGames] = useState([]);
    const [users, setUsers] = useState([]);
    const [img, setImg] = useState({});
    const promiseArray = [];

    const getImgByGameId = async (gameId) => {
        const gotImg = await client.findGameImgById(gameId);
        promiseArray.push(gotImg);
        setImg(gotImg)
        return gotImg;
    }


    const getGames = async () => {
        if (searchString) {
            const searchGames = await client.findGameByName(searchString);
            setGames(searchGames);
            return;
        }
        const gotGames = await client.findAllGames();

        setGames(gotGames);
    };
    /*
        const getUsers = async () => {
            const gotUsers = await client.findAllGames();
     
            if (searchString) {
                const searchGames = gotGames.filter((r) => r.title.includes(searchString));
                setGames(searchGames);
                return;
            }
            setGames(gotGames);
            console.log(searchString);
        };
        */

    useEffect(() => {
        getGames();
    }, []);

    //  /imgs/placeholders/shoot.png ${getImgByGameId(game.id)}
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
                            className={"list-group-item result"}>
                            <div key={index} className="game_result">
                                <img className="game_img" src={`/imgs/placeholders/shoot.png`} /><br />
                                <h2>{game.name}</h2>
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
                                <img className="review_pfp" src="/imgs/placeholders/674277730124300298.png" /><br />
                                <span>@{user.name}</span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

        </div>
    );
}
export default Search;