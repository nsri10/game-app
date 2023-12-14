import "./home.css";
import FeaturedGames from "./featgame";
import LatestReleases from "./latestrelease";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import * as client from "../users/client";

function ConditionalHome({ account }) {
  if (account) {
      return (
        <div className="d-flex" style={{ width: "100%" }}>
        <div>
          <h1 style={{fontWeight: 'bold', backgroundColor: '#6243f5'}} className="home-text1">Welcome, {account.username}!</h1>
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
  } else {
      return (
        <div className="d-flex" style={{ width: "100%" }}>
        <div>
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
}

function Home() {
  const [account, setAccount] = useState(null);
  const fetchAccount = async () => {
      const account = await client.account();
      setAccount(account);
  };
  useEffect(() => {
      fetchAccount();
  }, []);
  return (
      <div className="mt-3 ms-5">
          <div className="d-flex mb-5">
              {<ConditionalHome
                  account={account}
              />}
          </div>
      </div>
  )
}

export default Home;