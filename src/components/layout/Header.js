import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="header">
                <div>
                <span><strong>Abulesowo</strong></span> 
                </div>

                <nav className={mainNav}>
                    <Link to="/"><a className="active">Home</a></Link>
                    <a href="#">About</a>
                    <Link to="/request-form">Request</Link>
                    <a href="#">Our Blog</a>
                    <Link to="/contact">Contact Us</Link>
                </nav>
            </div>
            
        </header>
    )
}

const mainNav = {
    textDecoration: "none"
}

export default Header
