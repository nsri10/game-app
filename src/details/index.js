import { useState } from "react";
import { Link } from "react-router-dom";
import DetailCarousel from "./carousel";

import "./details.css";

function Details() {
    const [game, setGame] = useState({});

    return (
        <div>
            <div className="row">
                <h1 className="title">title</h1>

                <button style={{ marginLeft: "auto" }} className="btn btn-primary gameButton">Purchase</button>
                <button style={{ marginRight: "25px" }} className="btn btn-primary gameButton">Favorite</button>
            </div>

            <DetailCarousel />

            <div className="row">
                <h1>About</h1>
                <p>
                    Description of game

                    Yar har, fiddle de dee
                    Being a pirate is alright to be
                    Do what you want 'cause a pirate is free
                    You are a pirate!

                </p>
            </div>
            <hr />

            <div className="row">
                <h1>Updates</h1>
                {/*links.map((link, index) => (
                        <Link
                            key={index}
                            to={`/${link}`}
                            className={`list-group-item ${(pathname.includes(link) && "navbar-item-active") || "navbar-item"}`}>
                            <FontAwesomeIcon icon={icons[index]} className="me-2" />
                            {link.toUpperCase()}
                        </Link>
                    ))*/}

            </div>

            <div className="row">
                {/* add condition here to check if logged in, otherwise write a review element available */}
                <h1>Reviews</h1>

                <div className="list-group" style={{ marginLeft: 25 }}>
                    <div className="list-group-item review">
                        <img className="review_pfp" src="/imgs/placeholders/674277730124300298.png" />
                        <div className="review_desc">
                            <span>review review review</span>

                        </div>
                    </div>
                    {/*reviews.map((review, index) => (
                        <Link
                            key={index}
                            to={`/${link}`}
                            className={`list-group-item ${(pathname.includes(link) && "navbar-item-active") || "navbar-item"}`}>
                            <FontAwesomeIcon icon={icons[index]} className="me-2" />
                            {link.toUpperCase()}
                        </Link>
                    ))*/}
                </div>
            </div>

        </div >
    )
}

export default Details;