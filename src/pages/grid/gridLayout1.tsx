import React from 'react';
import CssGridNavbar from "../../components/cssGridNavbar";

function GridLayout1(props) {
    return (
        <section className={`l1-container`}>
            <div className="empty">
            </div>
            <div className="header">
              <CssGridNavbar />
            </div>
            <div className="sidebar">
                <h1>sidebar</h1>
            </div>
            <div className="content">
                <h1>Content</h1>
            </div>
            <div className="footer">
                <h1>footer</h1>
            </div>
        </section>
    );
}

export default GridLayout1;
