import React, {Component} from 'react';
import PropTypes from 'prop-types';


class Pokemon extends Component {
  render( ) {
    const {name, type, averageWeight, image} = this.props.data;
    return (
      <div className='pokemons'>
         <h3>{name}</h3>
        <ul>
          <li>Tipo:{type}</li>
          <li>Peso médio:{averageWeight.value} {averageWeight.measurementUnit}</li>
          <li><img src={image} alt="Imagem do pokemon"/></li>
        </ul>
      </div>
    )
  }
}

Pokemon.propTypes = {
 data: PropTypes.shape({
   name: PropTypes.string.isRequired,
   type: PropTypes.string.isRequired,
   averageWeight: PropTypes.shape({
     value: PropTypes.number.isRequired,
     measurementUnit: PropTypes.string.isRequired
   }).isRequired,
   image: PropTypes.string.isRequired,
 }).isRequired
}

export default Pokemon