import { Link } from "react-router-dom";

let num = 0;
function Favorites({ favGame }) {
    if (favGame) {
        num = favGame.length;
    }
    return (
        <div className="ms-2 me-5">
            <h4>{`Favorites (${num})`}</h4>
            {favGame && (
                <ul className="user-list">
                    {favGame.map((gameId) => (
                        <li>
                            <Link to={`/details/${gameId}`} className="user-list-text ms-2">
                                    {gameId}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Favorites;