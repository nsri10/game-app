import { Routes, Route, Navigate } from "react-router";

import Details from "../details";
import Profile from "../profile";
import NavigationBar from "../nav";
import Signup from "../signup";

import "./index.css";
import Search from "../search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";

function Webpage() {
  const [search, setSearch] = useState();
  const [refresh, setRefresh] = useState(true);

  return (
    <div className="d-flex detail-page">
      <NavigationBar />

      <div style={{ width: "100%" }}>
        <div className="row">
          <div>
            <input
              id="searchBar"
              type="text"
              className="search-bar"
              placeholder="Search for Games"
              onChange={(e) => setSearch(e.target.value)}
            />
            <Link className="btn btn-circle btn-primary"
              to={`/search/${search}`}
              onClick={() =>setRefresh(!refresh)}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Link>

          </div>
        </div>

        <div className="row">
          <Routes>
            <Route path="/" element={<Navigate to="/details/100" />} />
            <Route path="/search/:searchString" element={<Search key={refresh}/>} />
            <Route path="/search/*" element={<Search />} />
            <Route path="/details/" element={<Navigate to="/search/" />} />
            <Route path="/details/:gameID" element={<Details />} />
            <Route path="/profile/*" element={<Profile />} />
            <Route path="/signup/*" element={<Signup />} />
            <Route path="/signin/*" element={<Signup />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Webpage;
