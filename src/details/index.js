import "./details.css";
import DetailCarousel from "./carousel";

function Details() {
    return (
        <div>
            <div className="row">
                <h1 className="title">title</h1>

                <button style={{ marginLeft: "auto" }} className="btn btn-primary gameButton">Purchase</button>
                <button style={{ marginRight: "25px" }} className="btn btn-primary gameButton">Favorite</button>

            </div>

            <DetailCarousel />

        </div >
    )
}

export default Details;