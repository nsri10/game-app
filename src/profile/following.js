import { Link } from "react-router-dom";

let num = 0;
function Following({ following }) {
    if (following) {
        num = following.length
    }
    return (
        <div className="ms-2 ms-5 me-5">
            <h4>{`Following (${num})`}</h4>
            {following && (
                <ul className="user-list">
                    {following.map((username) => (
                        <li>
                            <Link to={`/profile/${username}`} className="user-list-text ms-2">
                                    {username}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Following;