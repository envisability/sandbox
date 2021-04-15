import React from 'react';
import Navbar from "../../components/navbar";
import CssGridNavbar from "../../components/cssGridNavbar";

function GridLayout3(props) {
    return (
        <section className={`l3-container`}>
            <header><CssGridNavbar /></header>
            <aside><h1>aside</h1></aside>
            <article></article>
            <div className="sidebar-2">
                <h1>sidebar 2</h1>
            </div>
            <footer><h1>footer</h1></footer>
        </section>
    );
}

export default GridLayout3;
