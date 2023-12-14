import Carousel from "react-bootstrap/Carousel";
import "./home.css";
function FeaturedGames() {
  return (
    <Carousel>
      <Carousel.Item interval={3000}>
        <img
          className="featuredCarousal"
          src="https://images4.alphacoders.com/782/thumb-1920-782781.png"
          alt="first slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="featuredCarousal"
          src="https://images4.alphacoders.com/782/thumb-1920-782781.png"
          alt="second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="featuredCarousal"
          src="https://images4.alphacoders.com/782/thumb-1920-782781.png"
          alt="third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}
export default FeaturedGames;
