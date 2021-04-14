import React from 'react';

function Gallery(props) {
    const images = [
        {
            key: 1,
            src:"images/portfolio/01.jpg"
        },
        {
            key: 2,
            src:"images/portfolio/02.jpg"
        },
        {
            key: 3,
            src:"images/portfolio/03.jpg"
        },
        {
            key: 4,
            src:"images/portfolio/04.jpg"
        },
        {
            key: 5,
            src:"images/portfolio/05.jpg"
        }
    ]

    return (
        <ul>
        {
            images.map((image)=>(
                <li key={image.key}
                className={`${image.key == 4 ? "twice" : ""}`}
                >
                    <img src={image.src} alt=""/>
                </li>
            ))
        }
        </ul>
    );
}

export default Gallery;
