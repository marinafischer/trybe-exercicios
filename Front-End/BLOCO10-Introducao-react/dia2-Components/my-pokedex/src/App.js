import './App.css';
import Pokemon from './pokemon';
import pokemons from './data';

function App() {
  return (
    <body>
      <h1>Pokedex</h1>
      <div className="content">
        {pokemons.map(pokemon => <Pokemon data={pokemon} key={pokemon.id}/>)}
      </div>
    </body>
  )
}

export default App;
