import * as client from "../users/client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signin.css";
import { Link, useLocation } from "react-router-dom";

function Signin() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    email: "",
    dob: "2000-01-01",
    userType: "GAMER", // Default to "gamer"
  });
  const navigate = useNavigate();
  const signin = async () => {
    await client.signin(credentials);
    navigate("/profile");
  };
  const handleUserTypeChange = (userType) => {
    setCredentials({ ...credentials, userType });
  };

  return (
    // boilerplate code for the left container
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          <div className="p-5 mt-3">
            <p className="title">
              Game <br />
              List
            </p>
            <p className="tagline">
              A forum to spark discussion about your favorite games. <br />
              Sign in or create an account to get started!
            </p>
            <br />
            <img
              src="/onboarding.png"
              alt="onboarding img"
              className="onboarding"
            />
          </div>
        </div>

        <div className="col-md-6">
          <div className="p-5 mt-3">
            <p className="bold-white subheader">Sign In</p>
            <p className="subheader2">
              Welcome back! Please login to your account.
            </p>
            <br />
            <label htmlFor="username" className="form-label label-style">
              Username
            </label>
            <input
              className="form-control mb-2"
              value={credentials.username}
              onChange={(e) =>
                setCredentials({ ...credentials, username: e.target.value })
              }
            />
            <br />
            <label htmlFor="username" className="form-label label-style">
              Password
            </label>
            <input
              type="password"
              className="form-control mb-2"
              value={credentials.password}
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
            />
            <br />
            <button className="purple-button" onClick={signin}>
              Login
            </button>
            <br />
            <br /> <br />
            <p className="h7">
              New user?{" "}
              <Link to="/signup" className="blue-bold-text">
                Create an account.
              </Link>
              <br />
              <Link to="/details" className="blue-bold-text">
                Continue without logging in.
              </Link>
            </p>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
