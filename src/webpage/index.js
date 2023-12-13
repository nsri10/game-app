import { Routes, Route, Navigate } from "react-router";

import Details from "../details";
import Profile from "../profile";
import ProfileEditor from "../profile/edit_profile";
import NavigationBar from "../nav";
import Signup from "../signup";
import Signin from "../signin";

import "./index.css";

function Webpage() {
  return (
    <div className="d-flex detail-page">
      <NavigationBar />
      <div style={{ width: "100%" }}>
        <div className="row">
          <input
            type="text"
            className="search-bar"
            placeholder="Search for Games"
          />
        </div>
        <div className="row">
          <Routes>
            <Route path="/" element={<Navigate to="/details/" />} />
            <Route path="/details/*" element={<Details />} />
<<<<<<< Updated upstream
            <Route path="/profile/*" element={<Profile />} />
=======
            <Route path="/profile/" element={<Profile />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/profile/edit_profile/:id" element={<ProfileEditor />} />
>>>>>>> Stashed changes
            <Route path="/signup/*" element={<Signup />} />
            <Route path="/signin/*" element={<Signup />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Webpage;
