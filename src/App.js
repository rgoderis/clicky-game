import React from 'react';
import CharacterCard from "./components/CharacterCard"
import Wrapper from "./components/Wrapper"
import characters from "./characters.json";
import './App.css';

class App extends React.Component {
  state = {
    characters,
    score: 0,
    highScore: 0
  }
  checkClicked = event =>{
    this.state.characters.forEach(character=>{
      if(character.id === event){
        if(!character.isClicked){
          character.isClicked = 1
          this.setState({score: this.state.score + 1})
        }
        else {
          if(this.state.score > this.state.highScore){
            this.setState({highScore: this.state.score})
          }
          this.setState({score: 0})
          this.state.characters.forEach(character=>{
            character.isClicked=0
          });
        }
      } 
    })
  }

  render(){
    return(
      <Wrapper>
        <div>score: {this.state.score}</div>
        <div>High Score: {this.state.highScore}</div>
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

