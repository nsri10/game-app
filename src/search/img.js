import { useEffect, useState } from "react";
import * as client from "./client.js";

function GameImg({ gameId }) {
    const [img, setImg] = useState({});

    const getImgByGameId = async (gameId) => {
        const gotImg = await client.findGameImgById(gameId);
        setImg(gotImg[0].url);
        console.log(img);
    }

    useEffect(() => {
        getImgByGameId(gameId);
    }, []);

    return (
        <img className="game_img" src={`https:${img}`} />
    );
}
export default GameImg;
