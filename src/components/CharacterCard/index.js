import React from "react"
import "./style.css"

function CharacterCard(props){
    return(
        <div className="card" onClick={()=>props.checkClicked(props.id)}>
            <div className="img-container" data-id={props.id}>
                <img alt={props.name} src={props.image}/>
            </div>
        </div>
    );
}
export default CharacterCard;