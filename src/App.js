import React from 'react';
import CharacterCard from "./components/CharacterCard"
import Wrapper from "./components/Wrapper"
import characters from "./characters.json";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css';

  // function to reorder characters
  function shuffleCharacters(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

class App extends React.Component {
  state = {
    characters:shuffleCharacters(characters),
    score: 0,
    highScore: 0,
  }

  // function to check to see if character is already clicked
  checkClicked = id =>{
    // loop over characters array
    this.state.characters.forEach(character=>{
      // grap character that was clicked
      if(character.id === id){
        // check to see if character was already clicked
        if(!character.isClicked){
          // change isClicked to true and increase the score by 1
          character.isClicked = 1
          this.setState({score: this.state.score + 1})
        }
        else {
          // check to see if new highScore
          if(this.state.score > this.state.highScore){
            this.setState({highScore: this.state.score})
          }
          // reset score and change isClicked status of all characters to false
          this.setState({score: 0})
          this.state.characters.forEach(character=>character.isClicked=0);
        }
      } 
    });
    this.setState({ charcters: shuffleCharacters(characters) })
  }

  render(){
    return(
      <div>
        <Header 
          score={this.state.score}
          highScore={this.state.highScore}
        />
        <Wrapper>
          {this.state.characters.map(character=>(
            <CharacterCard
              checkClicked = {this.checkClicked}
              id={character.id}
              key = {character.id}
              name ={character.name}
              image={character.image}
              isClicked = {character.isClicked}
            />
          ))}
        </Wrapper>
        {/* <Footer/> */}
      </div>

    )
  }
}

export default App;

