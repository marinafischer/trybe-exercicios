import React, {Component} from 'react';

class InputName extends Component{
  render(){
    const{handleChange, value} = this.props

    let error = undefined;
    if(value.length > 30) error = "Nome inválido"

    return(
      <label>
        Nome:
        <input 
          type="text" 
          name="nome"
          value={value}
          onChange={handleChange}
        />
        <div>{error ? error: ''}</div>
      </label>
    )
  }
}

export default InputName