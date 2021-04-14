import React from 'react';
import { Link } from "react-router-dom";
import Logo from "../logo.svg";

function Navbar(props) {
    const links = [
        {
            key: 1,
            name:"portfolio",
            to: "/portfolio",
        },
        {
            key: 2,
            name:"blog",
            to: "/blog",
        },
        {
            key: 3,
            name:"company",
            to: "/company",
        },
        {
            key: 4,
            name:"contact",
            to: "/contact",
        },

    ];
    return(
        <nav className="navigation">
            <Link to="/" className="brand">
                <img src={Logo} alt="logo"/>
            </Link>
            {
                links.map((link)=>(
                    <Link to={link.to} key={link.key}
                          className={`navlink ${link.key < 3 ? "low-order" : "high-order" }`}>
                        {link.name}
                    </Link>
                ))
            }
            <div className={`nav-block`}></div>
        </nav>
    );
}

export default Navbar;
