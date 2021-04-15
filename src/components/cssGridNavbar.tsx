import React from "react";
import { Link } from "react-router-dom";
import Logo from "../logo.svg";

function CssGridNavbar(props) {
    const links = [
        {
            key: 1,
            name:"layout-1",
            to: "/grid-layout-1",
        },
        {
            key: 2,
            name:"layout-2",
            to: "/grid-layout-2",
        },
        {
            key: 3,
            name:"layout-3",
            to: "/grid-layout-3",
        }

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

export default CssGridNavbar;
