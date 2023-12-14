import { Routes, Route, Navigate } from "react-router";

import Details from "../details";
import Profile from "../profile";
import ProfileEditor from "../profile/edit_profile";
import NavigationBar from "../nav";
import Signup from "../signup";
import Home from "../home";

import "./index.css";
import Search from "../search";

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
            <Route path="/" element={<Navigate to="/home/" />} />
            <Route path="/home/*" element={<Home />} />
            <Route path="/search/*" element={<Search />} />
            <Route path="/details/" element={<Navigate to="/search/"/>} />
            <Route path="/details/:gameID" element={<Details />} />
            <Route path="/profile/" element={<Profile />} />
            <Route path="/profile/:username" element={<Profile />} />
            <Route path="/profile/edit_profile/:username" element={<ProfileEditor />} />
            <Route path="/signup/*" element={<Signup />} />
            <Route path="/signin/*" element={<Signup />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Webpage;
