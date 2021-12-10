import React, {Component} from 'react';
import Pokemon from './pokemon';
import PropTypes from 'prop-types';


class PokemonContent extends Component {
  render( ) {
    const {pokemons} = this.props
    return (
      <div className="content">
        {pokemons.map(pokemon => <Pokemon data={pokemon} key={pokemon.id}/>)}
      </div>
    )
  }
}


PokemonContent.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default PokemonContent