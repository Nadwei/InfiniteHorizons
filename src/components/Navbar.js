import React from "react";
import { Link } from "react-router-dom"




export default function Navbar(){
    return(
            <nav id="navbar">
                <h1 href="#" id="site-title">Infinite Horizons</h1>
                <div id="navlinks">
                    <Link to="/">Home</Link>
                    <Link to="/Dojo">Dojo</Link>
                    <Link to="/ComplexWorkshop">Complex Workshop</Link>
                    <Link to="/Philosophy">Philosophy</Link>
                </div>
            </nav>
    )
}