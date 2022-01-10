import React, { Component } from 'react'
import PersonalFild from './PersonalFild';

class Form extends Component {
  constructor(){
    super();

    this.handleChange = this.handleChange.bind(this); 

    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '', 
      estado: '',
      tipo: '',
      resumo: '', 
      cargo: '',
      descricao: ''
    }
  } 

  handleChange({target}){
    const {name, type, checked} = target
    const value = type === 'checkbox' ? checked : target.value
    this.setState({[name]: value})
  }
  
  render(){
    // const {nome, email, cpf, endereco, cidade, estado, tipo, resumo, cargo, descricao} = this.state
    return(
      <form>
        <PersonalFild 
          value={this.state}
          handleChange={this.handleChange}
        />
      </form>
    )
  }
}

export default Form;