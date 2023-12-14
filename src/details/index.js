import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import DetailCarousel from "./carousel";
import * as client from "./client";

import "./details.css";
import WriteReview from "./writeReview";

function Details() {
    const { gameID } = useParams();
    const [game, setGame] = useState({});
    const [reviews, setReviews] = useState([]);

    const getReviews = async () => {
        const review = await client.findReviewByGameId(gameID); //100
        console.log(review);
        setReviews(review);
    };

    const getGame = async () => {
        const gotGame = await client.findGameById(gameID); //100
        console.log(gotGame);
        setGame(gotGame);
    };

    useEffect(() => {
        getReviews();
        getGame();
    }, []);

    return (
        <div >
            <div className="row">
                <h1 className="gameTitle margin8ps">{game.name}</h1>

                <button style={{ marginLeft: "auto" }} className="btn btn-primary gameButton">Purchase</button>
                <button style={{ marginRight: "25px" }} className="btn btn-primary gameButton">Favorite</button>
            </div>

            <DetailCarousel />

            <div className="row margin8ps">
                <h1>About</h1>
                <p>
                    {game.summary}
                </p>
            </div>
            <hr className="detail_hr" />

            <div className="row margin8ps">
                {/* add condition here to check if logged in, otherwise write a review element available */}
                <WriteReview getReviews={getReviews}/>

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