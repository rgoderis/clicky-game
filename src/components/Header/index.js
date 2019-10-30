import React from "react"

function Header (props){
    return(
        <nav className="navbar navbar-light bg-info fixed-top">
            <span className="justify-content-center mb-0 h1">Clicky Game</span>
            <span className="justify-content-center mb-0 h1">{props.score!==0?"Correct":"Please Click A Character To Play"}</span>
            <span className="navbar mb-0 h1">Score: {props.score} | High Score: {props.highScore}</span>
        </nav>
    )
}

export default Header