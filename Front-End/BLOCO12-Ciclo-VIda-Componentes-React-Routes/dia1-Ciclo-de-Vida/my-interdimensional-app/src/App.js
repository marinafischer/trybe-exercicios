import React from 'react'
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      characters: [],
      loading: true
    }
    this.fetchCharacters = this.fetchCharacters.bind(this);
  }

  async fetchCharacters () {
    this.setState(
      { loading: true },
      async () => {
        const requestReturn = await fetch('https://rickandmortyapi.com/api/character');
        const requesObject = await requestReturn.json();
        this.setState({
          characters: requesObject.results,
          loading: false
        })
      }
    )
  }

  componentDidMount() {
    return this.fetchCharacters();
  }

  render() {
    const { characters, loading } = this.state;
    console.log('renderizou')
    return (
      <div className="App">
        <h1>
          Ricky and Morty Characters:
        </h1>
        <div className="body">
          { loading ?  <p> Carregando </p>:          
            characters.map((character) => {
            return (
              <div className="container" key={character.name}>
                <h3>{character.name}</h3>
                <img src={character.image} alt={character.name}/>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
