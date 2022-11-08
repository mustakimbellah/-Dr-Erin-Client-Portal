import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ba1 from '../../Photo/banner/ba-1.jpg';
import ba2 from '../../Photo/banner/ba-2.jpg';
import ba3 from '../../Photo/banner/ba-3.jpg';
import ba4 from '../../Photo/banner/ba-4.jfif';

const Banner = () => {
    return (
        <Carousel className='mx-4'>
            <Carousel.Item>
                <img
                    className="d-block rounded w-100"
                    src={ba1}
                    width="auto"
                    height="300"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block rounded w-100"
                    src={ba2}
                    width="auto"
                    height="300"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block rounded w-100"
                    src={ba3}
                    width="auto"
                    height="300"
                    alt="Third slide"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className=" d-block rounded w-100"
                    src={ba4}
                    width="auto"
                    height="300"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;