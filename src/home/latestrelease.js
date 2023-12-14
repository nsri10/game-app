
import "./home.css";
import { React } from "react";
import { Card } from 'react-bootstrap';
import SideScroller from "./sidescroll";
// make each card a link to the game page
function LatestReleases() {
    const releases = [
        { title: 'game 1', desc: "blah blah", image: "link" },
        { title: 'game 2', desc: "blah blah", image: "link" },
        { title: 'game 3', desc: "blah blah", image: "link" },
        { title: 'game 4', desc: "blah blah", image: "link" },
        { title: 'game 5', desc: "blah blah", image: "link" },
      ];
    
      return (
        <SideScroller>
          {releases.map((item, index) => (
            <span key={index}>
              <Card style={{marginBottom: -5, marginTop: -20}} className="cardStyle">
                <Card.Img style={{objectFit: 'cover'}} variant="top" src="https://www.touchtapplay.com/wp-content/uploads/2021/12/Genshin-Impact-2.4-Featured-2.jpg?fit=640%2C347"/>
                <Card.Body>
                  <Card.Title className="home-text2">Genshin Impact</Card.Title>
                  <Card.Text className="home-text3">
                  Genshin Impact is an open-world, action role-playing game that allows the player to control one of four interchangeable characters in a party.
                  </Card.Text>
                </Card.Body>
              </Card>
            </span>
          ))}
        </SideScroller>
      );
    };
    
    export default LatestReleases;