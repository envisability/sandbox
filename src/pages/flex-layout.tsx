import React from 'react';


import Navbar from "../components/navbar";
import Gallery from "../components/gallery";


function FlexLayout(props) {
    return (
        <section>
            <div className="container">
                <h1>Flex Layout Home</h1>
            </div>
            <Gallery />
        </section>
    );
}

export default FlexLayout;
