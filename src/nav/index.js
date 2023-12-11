import { Link, useLocation } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faMagnifyingGlass,
  faComment,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import "./nav.css";

function NavigationBar() {
  const links = ["home", "profile", "discussions", "search"];
  const icons = [faHouse, faUser, faMagnifyingGlass, faComment];

  const { pathname } = useLocation();
  return (
    <div className="navbar">
      <img src="/gameLogo.png" alt="Game List Logo" className="center" />
      {/*navbar links*/}
      <div className="list-group ps-4 nav-links" style={{ width: 250 }}>
        {links.map((link, index) => (
          <Link
            key={index}
            to={`/${link}`}
            className={`list-group-item ${
              (pathname.includes(link) && "navbar-item-active") || "navbar-item"
            }`}
          >
            <FontAwesomeIcon icon={icons[index]} className="me-2" />
            {link.toUpperCase()}
          </Link>
        ))}
        <div>
          <br />
          <h6>
            Sign in or create an account to favorite games, participate in
            discussions, and get exclusive news!
          </h6>
          <br />
          <a href="/signup" className="purple-button">
            Sign Up
          </a>
          <br />
          <br />

          <a href="/signin" className="purple-button">
            Sign In
          </a>
        </div>
      </div>
    </div>
  );
}
export default NavigationBar;
