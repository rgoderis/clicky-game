import React from 'react';
import CharacterCard from "./components/CharacterCard"
import characters from "./characters.json";
import './App.css';

class App extends React.Component {
  state = {
    characters
  }

  render(){
    return(
      <wrapper>
        {this.state.characters.map(character=>(
          <CharacterCard
            id={character.id}
            key = {character.key}
            name ={character.name}
            image={character.image}
            occupation={character.occupation}
            location={character.location}
            value="unclicked"
          />
        ))}
      </wrapper>
    )
  }
}

export default App;
