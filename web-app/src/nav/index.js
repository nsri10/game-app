import { Link, useLocation } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faMagnifyingGlass, faComment } from '@fortawesome/free-solid-svg-icons'

import "./nav.css";

function NavgationBar() {
    const links = ["Home", "Discussions", "Search"];
    const icons = [faHouse, faMagnifyingGlass, faComment];

    const { pathname } = useLocation();
    return (
        <div className="list-group" style={{ width: 350 }}>
            {links.map((link, index) => (
                <Link
                    key={index}
                    to={`/${link}`}
                    className={`list-group-item ${(pathname.includes(link) && "navbar-item-active") || "navbar-item"}`}>
                    <FontAwesomeIcon icon={icons[index]} />
                    {link}
                </Link>
            ))}
        </div>
    );
}
export default NavgationBar