
import "./home.css";
import { React } from "react";
import { Card } from 'react-bootstrap';
import SideScroller from "./sidescroll";
// make each card a link to the game page
function FavoriteGames() {
    const favgames = [
        { title: 'game 1', image: "link" },
        { title: 'game 2', image: "link" },
        { title: 'game 3', image: "link" },
      ];
    
      return (
        <SideScroller>
          {favgames.map((item, index) => (
            <span key={index}>
              <Card style={{marginBottom: -30, marginTop: -15}} className="cardStyle">
                <Card.Img style={{objectFit: 'cover'}} variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ14VCe8KqWQfvQkRMctuyMSTUNZHrCZnavdg&usqp=CAU"/>
                <Card.Body style={{height: 50}}>
                  <Card.Title  className="home-text2">MapleStory</Card.Title>
                </Card.Body>
              </Card>
            </span>
          ))}
        </SideScroller>
      );
    };
    
    export default FavoriteGames;