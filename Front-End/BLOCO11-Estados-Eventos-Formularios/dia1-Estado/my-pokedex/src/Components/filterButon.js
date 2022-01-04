import React, {Component} from 'react';

class FilterButon extends Component {
  render( ) {
    const {type, onClick} = this.props;
    return (
      <li>
        <button
          className='filterButon'
          onClick={ onClick} >
          {type}
        </button>
      </li>
    )
  }
}

export default FilterButon;