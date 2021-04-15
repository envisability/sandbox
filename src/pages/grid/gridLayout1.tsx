import React from 'react';
import CssGridNavbar from "../../components/cssGridNavbar";
import Gallery from "../../components/gallery";
import Cards from "../../components/cards";
import Footer from "../../components/footer";
import Sidebar from "../../components/sidebar";

function GridLayout1(props) {
    return (
        <section className={`l1-container`}>
            <div className="empty">
            </div>
            <div className="header">
                <div className="container">
                    <CssGridNavbar />
                </div>
            </div>
            <div className="sidebar container pt-4 text-center">
                <h5>Dashboard</h5>
                <Sidebar />
            </div>
            <div className="content ">
                <div className={`jumbotron text-center`}>
                    <div className="container">
                        <h1 className="jumbotron-heading">Album example</h1>
                        <p className="lead text-muted">Something short and leading about the
                            collection below—its contents,
                            the creator, etc. Make it short and sweet, but not too short so
                            folks don't simply skip over it
                            entirely.</p>
                        <p>
                            <a href="#" className="btn btn-primary my-2">Main call to action</a>
                            <a href="#" className="btn btn-secondary my-2">Secondary action</a>
                        </p>
                    </div>
                </div>
                <div className="container">
                   <Cards />
                </div>
            </div>
             <Footer />
        </section>
    );
}

export default GridLayout1;
