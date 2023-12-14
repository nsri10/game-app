import * as client from "../users/client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css";
import { Link } from "react-router-dom";

function Signin() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    userType: "gamer", // Default to "gamer"
  });
  const navigate = useNavigate();
  const signin = async () => {
    await client.signin(credentials);
    navigate("/project/account");
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

        {/* RIGHT CONTAINER */}

        <div className="col-md-6">
          <div className="p-5 mt-3">
            <p className="bold-white subheader">Sign Up</p>

            {/* Username and password */}
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

            {/* Radio Buttons */}
            <div className="mb-3">
              <label className="form-label label-style">
                Select your identity:
              </label>
              <p className="subheader2">I am a...</p>
              <div className="form-check">
                <input
                  type="radio"
                  id="gamer"
                  className="form-check-input "
                  value="gamer"
                  checked={credentials.userType === "gamer"}
                  onChange={() => handleUserTypeChange("gamer")}
                />
                <label
                  htmlFor="gamer"
                  className="form-check-label label-style-radio"
                >
                  Gamer
                </label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  id="developer"
                  className="form-check-input"
                  value="developer"
                  checked={credentials.userType === "developer"}
                  onChange={() => handleUserTypeChange("developer")}
                />
                <label
                  htmlFor="developer"
                  className="form-check-label label-style-radio"
                >
                  Developer
                </label>
              </div>
            </div>

            <br />
            <button className="purple-button" onClick={signin}>
              Create Account
            </button>
            <br />
            <br />
            <p className="h7">
              Already a user?{" "}
              <Link to="/signin" className="blue-bold-text">
                Login.
              </Link>
              <br />
              <Link to="/details" className="blue-bold-text">
                Continue without an account.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
