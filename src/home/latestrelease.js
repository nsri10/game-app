import React, { useState, useEffect } from "react";
import { Card } from 'react-bootstrap';
import SideScroller from "./sidescroll";
import axios from 'axios';
import "./home.css";

function LatestReleases() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/api/home/newreleases')
            .then(response => {
                setGames(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the latest releases', error);
            });
    }, []);

    return (
        <SideScroller>
            {games.map((game) => (
                <Card key={game.id} style={{marginBottom: -5, marginTop: -20, marginBottom: 50}} className="cardStyle">
                    <Card.Img style={{objectFit: 'cover', height: 200, width: 300, margin: 10}} variant="top" src={`https:${game.cover.url}`} alt={game.name} />
                    <Card.Body>
                        <Card.Title className="home-text2">{game.name}</Card.Title>
                        <Card.Text className="home-text3 text-clamp">
                            {game.summary}
                        </Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </SideScroller>
    );
}

export default LatestReleases;


// import "./home.css";
// import { React } from "react";
// import { Card } from 'react-bootstrap';
// import SideScroller from "./sidescroll";
// // make each card a link to the game page
// function LatestReleases() {
    
//       return (
//         <SideScroller>
//           {games.map((item, index) => (
//             <span key={index}>
//               <Card style={{marginBottom: -5, marginTop: -20}} className="cardStyle">
//                 <Card.Img style={{objectFit: 'cover'}} variant="top" src="https://www.touchtapplay.com/wp-content/uploads/2021/12/Genshin-Impact-2.4-Featured-2.jpg?fit=640%2C347"/>
//                 <Card.Body>
//                   <Card.Title className="home-text2">Genshin Impact</Card.Title>
//                   <Card.Text className="home-text3">
//                   Genshin Impact is an open-world, action role-playing game that allows the player to control one of four interchangeable characters in a party.
//                   </Card.Text>
//                 </Card.Body>
//               </Card>
//             </span>
//           ))}
//         </SideScroller>
//       );
//     };
    
//     export default LatestReleases;