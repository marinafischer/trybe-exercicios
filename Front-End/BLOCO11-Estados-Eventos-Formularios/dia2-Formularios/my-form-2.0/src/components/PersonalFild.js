import React, { Component } from 'react'

class PersonalFild extends Component {
  
  render(){
    const {handleChange ,nome, email, cpf, endereco, cidade, estado, tipo} = this.props
    return(
      <fieldset>
        <label htmlFor="nome"> Nome:
          <input 
            id="nome"
            name="nome" 
            type="text" 
            maxLength="40"
            value={nome}
            onChange={handleChange}
          />
        </label>
        <label> email:
          <input 
            name="email" 
            type="text" 
            value={email}
            onChange={handleChange}
          />
        </label>
      </fieldset>
    )
  }
}

export default PersonalFild