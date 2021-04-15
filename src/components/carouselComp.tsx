import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

function CarouselComp(props) {
    const slides = [
        {
            key: 1,
            title:"First slide label",
            src:"images/abstract.jpg",
            alt:"",
            desc: "This is a wider card with supporting text below as a natural\n" +
                " lead-in to additional content. This content is a little bit longer.",
            interval: 1000
        },
        {
            key: 2,
            title:"Second slide label",
            src:"images/02.jpg",
            alt:"",
            desc: "This is a wider card with supporting text below as a natural\n" +
                " lead-in to additional content. This content is a little bit longer.",
            interval: 500
        },
        {
            key: 3,
            title:"Third slide label",
            src:"images/01.jpg",
            alt:"",
            desc: "This is a wider card with supporting text below as a natural\n" +
                " lead-in to additional content. This content is a little bit longer.",
            interval: 500
        },
        {
            key: 4,
            title:"Fourth slide label",
            src:"images/computer.jpg",
            alt:"",
            desc: "This is a wider card with supporting text below as a natural\n" +
                " lead-in to additional content. This content is a little bit longer.",
            interval: 500
        },

    ]
    return (
        <Carousel>
            {
                slides.map((slide) => (
                <Carousel.Item interval={slide.interval}
                               key={slide.key} className={`overflow-hidden`}>
                    <img
                        className="d-block w-100"
                        src={slide.src}
                        alt={slide.alt}
                    />
                    <Carousel.Caption>
                        <h3>{slide.title}</h3>
                        <p>{slide.desc}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                ))
            }
        </Carousel>
    );
}

export default CarouselComp;
