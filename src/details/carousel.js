import Carousel from 'react-bootstrap/Carousel';

function DetailCarousel() {
    return (<Carousel className="gameImgs">
        <Carousel.Item>
            <img src="/imgs/placeholders/friday_nights.png" text="First slide" className="center_game_img" alt='yo ho fiddle a dee'/>
        </Carousel.Item>
        <Carousel.Item>
            <img src="/imgs/placeholders/FY0tp1LXwAA-BuY.jpg" text="First slide" className="center_game_img" alt='being a pirate is alright to be'/>
        </Carousel.Item>
        <Carousel.Item>
            <img src="/imgs/placeholders/FYQtAnnaMAE3gdn.jpg" text="First slide" className="center_game_img" alt='do what you want cause a pirate is free'/>
        </Carousel.Item>
    </Carousel>);
}
export default DetailCarousel;