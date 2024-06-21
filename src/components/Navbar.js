import React, { useState } from "react";
import { Link } from "react-router-dom"



export default function Navbar(){
const [menuOpen, setMenuOpen] = useState(false);


    return(
            <nav id="navbar">
                
                <h1 href="#" id="site-title"><a href="#">Infinite Horizons</a></h1>
                
                    
                {menuOpen && (
                <div id="navlinks" className={menuOpen ? "open" : "closed"}>
                    <Link to="/">Home</Link>
                    <Link to="/Alternative">Alternative</Link>
                    <Link to="/MindBody">Mind-Body</Link>
                    <Link to="/PhiloSpirit">Philosophy-Spiritual</Link>
                    </div>
                )}
                <div id="menu-icon" onClick={() =>setMenuOpen(!menuOpen)}>
                <div className="menu top-bar"></div>
                <div className="menu mid-bar"></div>
                <div className="menu bottom-bar"></div>
            </div>
            
                   
                
            </nav>
    )
}