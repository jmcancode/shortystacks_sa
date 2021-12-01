import React from 'react';
import {Carousel} from 'react-bootstrap';
import image0 from "../../assets/10111CD6-FE5B-43B7-92E4-701A4E005A67.JPG"
import image1 from "../../assets/520C2C78-3F2E-45C5-9610-6964A0E03FB2.JPG"
import image2 from "../../assets/5DF19A30-0515-490B-9CC8-38AA43C4619F.JPG"
import image3 from "../../assets/64432D68-8CBF-4A58-A86D-5C61420DEEAA.JPG"
import image4 from "../../assets/95E91801-5DD2-4878-A55C-B885019818C5.JPG"
import image5 from "../../assets/9946CF67-1D1F-4245-94D7-DF4BACF9BBB6.JPG"
import image6 from "../../assets/E75E60AC-32D7-4720-A4E1-C6C260304948.JPG"
import image7 from "../../assets/F929B72D-7296-45AC-89B5-0EE8B8F8AE97.JPG"
import image8 from "../../assets/F978B983-51D9-4D21-8154-1BF9E3893D0B.JPG"

export default function CarouselImage() {
    return (
        <div className="p-5">
            <Carousel fade controls={false} indicators={true} slide={true} touch={true}>
                <Carousel.Item>
                    <img className="d-block w-100" src={image0} alt="First slide" loading="lazy"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={image1} alt="Second slide" loading="lazy"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={image2} alt="Third slide" loading="lazy"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={image3} alt="Third slide" loading="lazy"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={image4} alt="Third slide" loading="lazy"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={image5} alt="Third slide" loading="lazy"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={image6} alt="Third slide" loading="lazy"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={image7} alt="Third slide" loading="lazy"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={image8} alt="Third slide" loading="lazy"/>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}
