import './App.css';
import PokemonContent from './Components/PokemonContent';
import pokemons from './data';

function App() {
  return (
    <div className='pokemons-content'>
      <h1>Pokedex</h1>
      <PokemonContent pokemons={pokemons}/>
    </div>
  )
}

export default App;
