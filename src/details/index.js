import { useState } from "react";
import { Link } from "react-router-dom";
import DetailCarousel from "./carousel";

import "./details.css";
import WriteReview from "./writeReview";

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
            <div className="row">
                <h1 className="title margin8ps">title</h1>

                <button style={{ marginLeft: "auto" }} className="btn btn-primary gameButton">Purchase</button>
                <button style={{ marginRight: "25px" }} className="btn btn-primary gameButton">Favorite</button>
            </div>

            <DetailCarousel />

            <div className="row margin8ps">
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

            <div className="row margin8ps">
                <h1>Updates</h1>
                {/*updates.map((update, index) => (
                        <Link
                            key={index}
                            to={`/${link}`}
                            className={`list-group-item ${(pathname.includes(link) && "navbar-item-active") || "navbar-item"}`}>
                            <FontAwesomeIcon icon={icons[index]} className="me-2" />
                            {link.toUpperCase()}
                        </Link>
                    ))*/}

            </div>
            <hr />

            <div className="row margin8ps">
                {/* add condition here to check if logged in, otherwise write a review element available */}
                <WriteReview />

                <h1>Reviews</h1>

                <div className="list-group" style={{ marginLeft: 25 }}>
                    <div className="list-group-item review">
                        <img className="review_pfp" src="/imgs/placeholders/674277730124300298.png" />
                        <div className="review_details">
                            <span className="review_title">Review Title</span><br />
                            <span className="review_date">Posted on 0/00/00</span><br />
                            <span className="review_desc">review review review</span>

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