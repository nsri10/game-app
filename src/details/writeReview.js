import { useState } from "react";
import { useParams } from "react-router";

import * as client from "./client.js";

function WriteReview({ getReviews }) {

    const { gameID } = useParams();
    const [review, setReview] = useState({
        gameID: gameID,
        user: "test",
        date: "1/1/2023",
        title: "",
        desc: ""
        /*
        gameID: { type: String, required: true},
        user: { type: String, required: true},
        date: { type: String, required: true},
        title: { type: String, required: true},
        desc: { type: String, required: true},
        */
    });

    const createReview = async () => {
        const inputReviewTitle = document.getElementById("review-title-input");
        const inputReviewDesc = document.getElementById("review-desc-input");

        var curDate = new Date();
        var dd = String(curDate.getDate()).padStart(2, '0');
        var mm = String(curDate.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = curDate.getFullYear();

        curDate = mm + '/' + dd + '/' + yyyy;
        try {
            setReview({ ...review, date: curDate })
            const newReview = await client.createReview(review);

        } catch (err) {
            console.log(err);
            return;
        }

        inputReviewTitle.value = "";
        inputReviewDesc.value = "";
        getReviews();

    };

    return (
        <div style={{ marginBottom: "50px" }}>
            <h1>Write a Review</h1>

            <div style={{ alignItems: "center", display: "flex" }}>
                <div style={{ marginLeft: 25, display: "inline-block", width: "fit-content" }}>
                    <img className="review_pfp" src="/imgs/placeholders/674277730124300298.png" /><br />
                    <span>@username</span>
                </div>

                <div style={{ marginLeft: 25, display: "inline-block", width: "70%" }}>
                    <input type="text" className="input-review-title" placeholder="Review Title"
                        id="review-title-input"
                        onChange={(e) => setReview({ ...review, title: e.target.value })} />

                    <textarea class="form-control" id="input-review-details" rows="3" placeholder="Description here"
                        id="review-desc-input"
                        onChange={(e) => setReview({ ...review, desc: e.target.value })}></textarea>
                </div>

                <div style={{ marginLeft: 25, display: "inline-block", width: "fit-content", verticalAlign: "middle" }}>
                    <button style={{ marginBottom: "auto", marginTop: "auto" }} className="btn btn-primary"
                        onClick={() => createReview()}>Create</button>
                </div>

            </div>

        </div>
    );
}
export default WriteReview;