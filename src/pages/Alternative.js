import React from "react";






export default function Alternative(){

    return(
        <div>
            <img id="alternative" src={require('../staticImages/alternative.jpg')} alt="" />
            <h1 id="dojo-tagline">Learn - Practice - Grow - Repeat</h1>

            <div id="dojo-mind">
                <h2>Mind</h2>
            </div>

            <div id="dojo-body">
                <h2>Body</h2>
            </div>

            <div id="dojo-emotion">
                <h2>Emotion</h2>
            </div>
        </div>
    )
}