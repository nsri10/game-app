import * as client from "../users/client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css";
import { Link } from "react-router-dom";

function Signup() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    userType: "GAMER", // Default to "gamer"
  });
  const navigate = useNavigate();

  const handleUserTypeChange = (userType) => {
    setCredentials({ ...credentials, userType });
  };

  const signup = async () => {
    try {
      const user = await client.signup(credentials);
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

        {/* RIGHT CONTAINER */}

        <div className="col-md-6">
          <div className="p-5 mt-3">
            <div className="bold-white subheader">Sign Up</div>
            <br />

            {/* Username and password */}
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

            {/* Radio Buttons */}
            <div className="mb-3">
              <label className="form-label label-style">
                Select your identity:
              </label>
              <div className="subheader2">I am a...</div>
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
                  id="admin"
                  className="form-check-input"
                  value="developer"
                  checked={credentials.userType === "admin"}
                  onChange={() => handleUserTypeChange("admin")}
                />
                <label
                  htmlFor="admin"
                  className="form-check-label label-style-radio"
                >
                  Administrator
                </label>
              </div>
            </div>

            <br />
            <button className="purple-button" onClick={signup}>
              Create Account
            </button>
            <br />
            <br />
            <div className="h7">
              Already a user?
              <Link to="/signin" className="blue-bold-text">
                {" "}
                Login.
              </Link>
              <br />
              <Link to="/details" className="blue-bold-text">
                Continue without an account.
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
