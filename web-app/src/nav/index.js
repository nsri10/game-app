import { Link, useLocation } from "react-router-dom";

import "./nav.css";

function NavgationBar() {
    const links = ["Home", "Discussions", "Search"];
    const { pathname } = useLocation();
    return (
        <div className="list-group" style={{ width: 350 }}>
            {links.map((link, index) => (
                <Link
                    key={index}
                    to={`/${link}`}
                    className={`list-group-item ${(pathname.includes(link) && "navbar-item-active") || "navbar-item"}`}>
                    {link}
                </Link>
            ))}
        </div>
    );
}
export default NavgationBar