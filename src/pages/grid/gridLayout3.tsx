import React from 'react';
import Navbar from "../../components/navbar";
import CssGridNavbar from "../../components/cssGridNavbar";
import Footer from "../../components/footer";
import CarouselComp from "../../components/carouselComp";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import CtaForm from "../../components/ctaForm";
import Sidebar from "../../components/sidebar";


function GridLayout3(props) {

    return (
        <section className={`l3-container`}>
            <header><CssGridNavbar /></header>
            <aside >
                <Sidebar />
            </aside>
            <article className={`container`}>
                <Jumbotron>
                    <h1>Dont miss....</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc id tristique nisl. Morbi fringilla pulvinar ipsum.
                        Integer congue, lectus ut sodales lobortis, neque risus
                        finibus nisi, et fermentum erat neque eu nulla. Pellentesque
                        justo metus, mattis accumsan sagittis nec, dignissim ut ex.
                        Ut sed pulvinar nisi
                    </p>
                    <p>
                        <Button variant="primary">Learn more</Button>
                    </p>
                </Jumbotron>
                <div className="container pb-4">
                    <CtaForm />
                </div>

            </article>
            <div className="sidebar-2">
               <CarouselComp />
            </div>
           <Footer />
        </section>
    );
}

export default GridLayout3;
