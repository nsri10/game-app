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
    try {
      const user = await client.signin(credentials);
      navigate("/profile");

      console.log(user);
    } catch (error) {
      setError(error);
    }
  };
  const [error, setError] = useState("");

  return (
    // boilerplate code for the left container
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          <div className="p-4 mt-3">
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
            <div className="bold-white subheader">Sign In</div>
            <div className="subheader2">
              Welcome back! Please login to your account.
            </div>
            <br />
            <br />
            <label htmlFor="username" className="form-label label-style">
              Username
            </label>
            {error && (
              <div className="alert alert-danger"> {error.message}</div>
            )}
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
            <div className="h7">
              New user?
              <Link to="/signup" className="blue-bold-text">
                {""} Create an account.
              </Link>
              <br />
              <Link to="/details" className="blue-bold-text">
                Continue without logging in.
              </Link>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
