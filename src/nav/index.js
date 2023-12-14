import * as client from "../users/client";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faMagnifyingGlass,
  faComment,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import "./nav.css";

function LoginComponent({ account }) {
  console.log(account);
  if (account == null) {
    return (
      <div>
        <br />
        <h6>
          Sign in or create an account to favorite games, participate in
          discussions, and get exclusive news!
        </h6>
        <br />
        <Link to="/signup" className="purple-button">
          Sign Up
        </Link>
        <br />
        <br />

        <Link to="/signin" className="purple-button">
          Sign In
        </Link>
      </div>
    );
  }
}

// component that displays the signout button when the user is logged in
function LoggedInSignout({ account }) {
  const navigate = useNavigate();
  const signout = async () => {
    await client.signout();
    navigate("/signin");
  };

  console.log(account);
  if (account) {
    return (
      <div>
        <button className="signout-button" onClick={signout}>
          Signout
        </button>
        ;
      </div>
    );
  }
}

function NavigationBar() {
  const links = ["home", "profile", "discussions", "search"];
  const icons = [faHouse, faUser, faMagnifyingGlass, faComment];
  const [account, setAccount] = useState(null);
  const fetchAccount = async () => {
    const account = await client.account();
    setAccount(account);
  };
  useEffect(() => {
    fetchAccount();
  }, []);
  const { pathname } = useLocation();
  return (
    <div className="navbar">
      <image src="%PUBLIC_URL%/gameLogo.png" alt="Game List Logo" />

      {/*navbar links*/}
      <div className="list-group float-top ps-4" style={{ width: 250 }}>
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
      </div>
      {<LoggedInSignout account={account} />}
      {<LoginComponent account={account} />}
    </div>
  );
}
export default NavigationBar;
