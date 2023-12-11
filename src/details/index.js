import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel';
import axios from "axios";

import "./details.css";

function Details() {
    return (
        <div>
            <div className="row">
                <h1 className="title">title</h1>

                <button style={{ marginLeft: "auto" }} className="btn btn-primary gameButton">Purchase</button>
                <button style={{ marginRight: "25px" }} className="btn btn-primary gameButton">Favorite</button>

            </div>

            <Carousel className="gameImgs">
                <Carousel.Item>
                    <img src="/imgs/placeholders/friday_nights.png" text="First slide" className="center_game_img" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src="/imgs/placeholders/FY0tp1LXwAA-BuY.jpg" text="First slide" className="center_game_img" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src="/imgs/placeholders/FYQtAnnaMAE3gdn.jpg" text="First slide" className="center_game_img" />
                </Carousel.Item>
            </Carousel>

        </div >
    )
}

export default Details;