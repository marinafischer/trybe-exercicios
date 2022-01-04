import React, {Component} from 'react';
import Pokemon from './pokemon';
import FilterButon from './filterButon';
import pokemons from '../data';

class PokemonContent extends Component {
  constructor(){
    super();
    this.state = {
      pokemonIndex: 0,
      pokemonsFilter: pokemons,
    }
    this.handleClick=this.handleClick.bind(this);
    this.handleTypoClick = this.handleTypoClick.bind(this);
    this.cleanFilter = this.cleanFilter.bind(this);
  }

  handleClick(){
    if(this.state.pokemonIndex < this.state.pokemonsFilter.length-1){
      this.setState((estadoAnterior,_props)=> ({
        pokemonIndex: estadoAnterior.pokemonIndex+1,
      }))
    } else {
      this.setState({
        pokemonIndex: 0,
      })
    }
  }

  handleTypoClick(tipo){
    this.setState({
      pokemonsFilter: pokemons.filter((pokemon)=>pokemon.type === tipo),
      pokemonIndex: 0
    })
  }

  cleanFilter(){
    this.setState({
      pokemonsFilter: pokemons,
      pokemonIndex: 0
    })
  }

  render( ) {
    const {pokemonIndex, pokemonsFilter} = this.state;
    return (
      <>
        <Pokemon data={pokemonsFilter[pokemonIndex]}/>
        <ul className='pokemonsFilter'>
          <li><button className='filterButon' onClick={this.cleanFilter}> All </button></li>
          {[...new Set(pokemons
            .reduce((acc, {type})=>(
              [...acc, type]
            ),[]))]
            .map((type)=>(
            <FilterButon 
            key={type}
            type={type}
            onClick={()=>this.handleTypoClick(type)}
            /> 
          ))}
        </ul>
        <button className='nextPokemon' onClick={this.handleClick}> Next Pokemon </button>
      </>
      
    )
  }
}


export default PokemonContent