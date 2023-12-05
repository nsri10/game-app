import { Link, useLocation } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faMagnifyingGlass, faComment } from '@fortawesome/free-solid-svg-icons'

import "./nav.css";

function NavgationBar() {
    const links = ["Home", "Discussions", "Search"];
    const icons = [faHouse, faMagnifyingGlass, faComment];

    const { pathname } = useLocation();
    return (
        <div className="navbar">
            <image src="%PUBLIC_URL%/gameLogo.png" alt="Game List Logo"/>

            {/*navbar links*/}
            <div className="list-group float-top " style={{ width: 350 }}>
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

        </div>
    );
}
export default NavgationBar