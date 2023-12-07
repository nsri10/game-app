import NavigationBar from "../nav";

import "./details.css";

function Details() {
    return (
        <div className="d-flex detail-page">
            <NavigationBar />

            <h1>detail</h1>
            <div>
                <input type="text" className="search-bar" placeholder="Search for Games"/>

            </div>
        </div>
    )
}

export default Details;