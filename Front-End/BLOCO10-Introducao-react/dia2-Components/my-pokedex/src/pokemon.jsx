import React, {Component} from 'react';

class Pokemon extends Component {
  render( ) {
    return (
      <div className='pokemons'>
         <h3>{this.props.data.name}</h3>
        <ul>
          <li>Tipo:{this.props.data.type}</li>
          <li>Peso médio:{this.props.data.averageWeight.value} {this.props.data.averageWeight.measurementUnit}</li>
          <li><img src={this.props.data.image} alt="Imagem do pokemon"/></li>
        </ul>
      </div>
    )
  }
}

export default Pokemon