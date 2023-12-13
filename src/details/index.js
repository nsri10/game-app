import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import DetailCarousel from "./carousel";
import axios from "axios";
import * as client from "./client";

import "./details.css";
import WriteReview from "./writeReview";

function Details() {
    const { gameID } = useParams();
    const [game, setGame] = useState({});
    const [reviews, setReviews] = useState([]);

    const getReviews = async () => {
        const review = await client.findReviewById(gameID); //100
        setReviews(review);
    };

    const getGame = async () => {
        const gotGame = await client.findGameById(gameID); //100
        setGame(gotGame);
        console.log(game);
    };

    useEffect(() => {
        getReviews();
        getGame();
    }, []);

    return (
        <div>
            <div className="row">
                <h1 className="gameTitle margin8ps">{game.title}</h1>

                <button style={{ marginLeft: "auto" }} className="btn btn-primary gameButton">Purchase</button>
                <button style={{ marginRight: "25px" }} className="btn btn-primary gameButton">Favorite</button>
            </div>

            <DetailCarousel />

            <div className="row margin8ps">
                <h1>About</h1>
                <p>
                    {game.desc}
                </p>
            </div>
            <hr />

            <div className="row margin8ps">
                <h1>Updates</h1>

                {

                /*updates.map((update, index) => (
                <span key={index} className="list-group-item navbar-item-active">
                    {update.desc}
                </span>
                    
                <Link
                    key={index}
                    to={`/${link}`}
                    className={`list-group-item ${(pathname.includes(link) && "navbar-item-active") || "navbar-item"}`}>
                    <FontAwesomeIcon icon={icons[index]} className="me-2" />
                    {link.toUpperCase()}
                </Link>
                
                )*/}

            </div>
            <hr />

            <div className="row margin8ps">
                {/* add condition here to check if logged in, otherwise write a review element available */}
                <WriteReview />

                <h1>Reviews</h1>

                <div className="list-group" style={{ marginLeft: 25 }}>
                    {reviews.map((review, index) => (
                        <div key={index} className="list-group-item review">
                            <div style={{ display: "inline-block", width: "fit-content" }}>
                                <img className="review_pfp" src="/imgs/placeholders/674277730124300298.png" /><br />
                                <span>@{review.user}</span>
                            </div>
                            <div className="review_details">
                                <span className="review_title">{review.title}</span><br />
                                <span className="review_date">Posted on {review.date}</span><br />
                                <span className="review_desc">{review.desc}</span>

                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div >
    )
}

export default Details;