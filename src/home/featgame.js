
// import Carousel from 'react-bootstrap/Carousel';
// import './home.css';
// function FeaturedGames() {
//     return (
//         <Carousel>
//             <Carousel.Item interval={3000}>
//                 <img className="featuredCarousal" src="https://images4.alphacoders.com/782/thumb-1920-782781.png" alt="first slide"/>
//             </Carousel.Item>
//             <Carousel.Item interval={3000}>
//             <img className="featuredCarousal" src="https://images4.alphacoders.com/782/thumb-1920-782781.png" alt="second slide"/>
//             </Carousel.Item>
//             <Carousel.Item>
//             <img className="featuredCarousal" src="https://images4.alphacoders.com/782/thumb-1920-782781.png" alt="third slide"/>
//             </Carousel.Item>
//         </Carousel>
//     );
// }
// export default FeaturedGames;

import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';
import './home.css';

function FeaturedGames() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/api/home/featured')
            .then(response => {
                setGames(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the data', error);
            });
    }, []);

    return (
        <Carousel>
            {games.map((game) => (
                <Carousel.Item key={game.id} interval={3000}>
                    <img
                        className="featuredCarousel"
                        style={{width: 250, height: 300, objectFit: 'cover'}}
                        src={`https:${game.cover.url}`}
                        alt={game.name}
                    />
                    <Carousel.Caption>
                        <h3 style={{marginLeft: 150, width: 400}} >{game.name}</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default FeaturedGames;
