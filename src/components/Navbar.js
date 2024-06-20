import React from "react";
import { Link } from "react-router-dom"




export default function Navbar(){
    return(
            <nav id="navbar">
                <h1 href="#" id="site-title"><a href="#">Infinite Horizons</a></h1>
                <div id="navlinks">
                    <Link to="/">Home</Link>
                    <Link to="/Alternative">Alternative</Link>
                    <Link to="/MindBody">Mind-Body</Link>
                    <Link to="/PhiloSpirit">Philosophy-Spiritual</Link>
                </div>
            </nav>
    )
}