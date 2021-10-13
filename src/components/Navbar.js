import React from "react";
import { Link, useLocation } from "react-router-dom";


function Navbar() {

    const location = useLocation();

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

                <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}><strong>Home</strong></Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">

                <span className="navbar-toggler-icon"></span>

                </button>

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

            <div className="navbar-nav">

                <Link to="/bio" className={location.pathname === "/bio" ? "nav-link active" : "nav-link"}><strong>Bio</strong></Link>

                <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}><strong>Contact</strong></Link>

                <Link to="/projects" className={location.pathname === "/projects" ? "nav-link active" : "nav-link"}><strong>Projects</strong></Link>

            </div>
            </div>
        </nav>
    );
}

export default Navbar;