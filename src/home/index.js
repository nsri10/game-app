import "./home.css";
import FeaturedGames from "./featgame";
import LatestReleases from "./latestrelease";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="d-flex" style={{ width: "100%" }}>
      <div className="mt-2 ms-5">
        <h1 className="home-text">Featured Games</h1>
        <br />
        <FeaturedGames />
        <br />
        <h1 className="home-text">
          Top Rated{" "}
          <Link to="/search" className="home-text4">
            View all top rated games.
          </Link>{" "}
        </h1>
        <LatestReleases />
      </div>
    </div>
  );
}

export default Home;
