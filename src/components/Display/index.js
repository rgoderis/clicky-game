import React from "react"
import "./style.css"

function Display(){
    return(
        <div id="display" className="jumbotron text-center mb-0 pb-0 bg-dark">
            <h1 className="text-info">Clicky Game!</h1>
            <h4 className="mb-0 text-info">Click on an image to earn points, just don't click on the same image more than once!</h4>
        </div>
    );
}
export default Display;