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