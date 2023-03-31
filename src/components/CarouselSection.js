import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/images/cover1.jpg'
import img2 from '../assets/images/cover2.jpg'
import img3 from '../assets/images/cover3.jpg'
import img4 from '../assets/images/cover4.jpg'
import "../assets/stylesheets/style.css"

function CarouselSection() {
    return (
    <Carousel>
        <Carousel.Item interval={2000}>
            <img
                className="d-block"
                src={img1}
                alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
            <img
                className="d-block"
                src={img2}
                alt="Second slide"
            />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
            <img
                className="d-block"
                src={img3}
                alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
            <img
                className="d-block"
                src={img4}
                alt="Second slide"
            />
        </Carousel.Item>
    </Carousel>
    );
}

export default CarouselSection;