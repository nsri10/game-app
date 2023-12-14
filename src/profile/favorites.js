import { useState, useEffect } from "react";

let num = 0;
function Favorites({ favGame }) {
    if (favGame) {
        num = favGame.length;
    }
    return (
        <div className="ms-2 me-5">
            <h4>{`Favorites (${num})`}</h4>
            {favGame && (
                <h1>{favGame}</h1>
            )}
        </div>
    )
}

export default Favorites;