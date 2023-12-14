import Carousel from "react-bootstrap/Carousel";

function DetailCarousel() {
  return (
    <Carousel className="gameImgs">
      <Carousel.Item>
        <img
          src="/imgs/placeholders/UNBOUND.png"
          text="First slide"
          className="center_game_img"
          alt="yo ho fiddle a dee"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="/imgs/placeholders/unbound2.png"
          text="First slide"
          className="center_game_img"
          alt="being a pirate is alright to be"
        />
      </Carousel.Item>
    </Carousel>
  );
}
export default DetailCarousel;
