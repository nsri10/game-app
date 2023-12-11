import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel';
import axios from "axios";

import "./details.css";

function Details() {
    return (
        <div>
            <h1>title</h1>

            <Carousel>
                <Carousel.Item>
                    <img src="/imgs/placeholders/friday_nights.png" text="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src="/imgs/placeholders/FY0tp1LXwAA-BuY.jpg" text="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src="/imgs/placeholders/friday_nights.png" text="First slide" />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Details;