function WriteReview() {
    return (
        <div style={{marginBottom:"50px"}}>
            <h1>Write a Review</h1>

            <div style={{alignItems: "center", display: "flex"}}>
                <div style={{ marginLeft: 25, display: "inline-block", width: "fit-content" }}>
                    <img className="review_pfp" src="/imgs/placeholders/674277730124300298.png" /><br />
                    <span>@username</span>
                </div>

                <div style={{ marginLeft: 25, display: "inline-block", width: "70%" }}>
                    <input type="text" className="input-review-title" placeholder="Review Title" />
                    <textarea class="form-control" id="input-review-details" rows="3" placeholder="Description here" ></textarea>
                </div>

                <div style={{ marginLeft: 25, display: "inline-block", width: "fit-content", verticalAlign: "middle" }}>
                    <button style={{ marginBottom: "auto", marginTop: "auto" }} className="btn btn-primary">Create</button>
                </div>

            </div>

        </div>
    );
}
export default WriteReview;