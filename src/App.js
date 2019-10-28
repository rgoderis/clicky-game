import React from 'react';
import CharacterCard from "./components/CharacterCard"
import Wrapper from "./components/Wrapper"
import characters from "./characters.json";
import './App.css';

class App extends React.Component {
  state = {
    characters
  }
  checkClicked = event =>{
    console.log(this.state.characters)
    this.state.characters.forEach(character=>{
      if(character.id === event){
        if(!character.isClicked){
          character.isClicked = 1
          console.log("character clicked");
        }
        else {
          alert("you already clicked me");
        }
      } 
    })
  }

  render(){
    return(
      <Wrapper>
        {this.state.characters.map(character=>(
          <CharacterCard
            checkClicked = {this.checkClicked}
            id={character.id}
            key = {character.key}
            name ={character.name}
            image={character.image}
            isClicked = {character.isClicked}
          />
        ))}
      </Wrapper>
    )
  }
}

export default App;

