import "./home.css";
import FeaturedGames from "./featgame";
import LatestReleases from "./latestrelease";
import TrendingDiscussions from "./trendingdisc";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="d-flex" style={{width: '100%'}}>
            <div className="mt-2 ms-5">
                <h1 className="home-text">Featured Games</h1>
                <br />
                <FeaturedGames />
                <br />
                <h1 className="home-text">Latest Releases <span className="home-text4">View all games.</span> </h1> 
                
                <LatestReleases />
                <h1 className="home-text">Trending Discussions <span className="home-text4">View all discussions.</span></h1>
                <TrendingDiscussions />
                
            </div>
        </div>
    )
}

export default Home;