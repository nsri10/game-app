import "./home.css";
import { React } from "react";
import { Card } from "react-bootstrap";
import SideScroller from "./sidescroll";
// make each card a link to the game page
function LatestReleases() {
  const releases = [
    {
      title: "Blood on the Clocktower",
      desc: "Blood on the Clocktower is a game of murder and mystery, lies and logic, deduction and deception for five-to-twenty courageous players and one devious storyteller.",
      image: "link",
    },
    {
      title: "Cardania: Epoch Wars",
      desc: "Epoch Wars is a live multiplayer strategy game with hundreds of players from around the world. Battle for strategic resources, explore mysterious anomalies, earn EXP and Victory Points for yourself and one of 7 unique Factions, all vying for control of Cardania! ",
      image: "link",
    },
    {
      title: "Maxon Petting Simulator",
      desc: "Maxon Petting Simulator is a clicker game about a cute kitty whose cheeks must always be squished. In this uncomplicated situation, Maxon's friends can help you: the cat who likes to jump by the TV, Manulooshka, the Sandwich Cat, and many others.",
      image: "link",
    },
    {
      title: "Dragon Ball Z: Kakarot",
      desc: "Choose your Saiyans , draw your deck, and get ready for Dragon Ball Card Warriors- The in Depth/Fast paced strategy card game that's easy to learn and INCREDIBLY FUN! Start a free game inside of Dragon Ball Z: Kakarot (on Steam) & play your cards to sling Events, summon DBZ Characters, and SPECIAL Character Cards!!! ",
      image: "link",
    },
    {
      title: "Space Station 13",
      desc: "Space Station 13 (ss13) is a multiplayer role-playing game. Originally created by one person named Exadv1, development has been continued by members of the fan base.",
      image: "link",
    },
  ];

  return (
    <SideScroller>
      {releases.map((item, index) => (
        <span key={index}>
          <Card
            style={{ marginBottom: -5, marginTop: -20 }}
            className="cardStyle"
          >
            <Card.Img
              style={{ objectFit: "cover" }}
              variant="top"
              src="https://www.touchtapplay.com/wp-content/uploads/2021/12/Genshin-Impact-2.4-Featured-2.jpg?fit=640%2C347"
            />
            <Card.Body>
              <Card.Title className="home-text2">{item.title}</Card.Title>
              <Card.Text className="home-text3">{item.desc}</Card.Text>
            </Card.Body>
          </Card>
        </span>
      ))}
    </SideScroller>
  );
}

export default LatestReleases;
