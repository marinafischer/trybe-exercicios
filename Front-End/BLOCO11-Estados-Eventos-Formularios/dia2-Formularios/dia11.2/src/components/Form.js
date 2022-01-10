import React, {Component} from 'react';
import InputName from './InputName';
import animais from '../dados';
import SelectAnimal from './selectAnimal';

class Form extends Component{
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this); 

    this.state = {
      nome: '',
      idade: 0,
      animal:'',
      maisSobre: '',
      vaiComparecer: false,
    };
    
  }
  handleChange({target}) {
    const {name} = target
    const value = target.type === 'checkbox' ? target.checked : target.value
    this.setState({[name]: value})
  }

  render() {
    return (
      <>
        <h1>Primeiro form</h1>
        <form>
          <fieldset>
              <InputName 
                value={this.state.nome}
                handleChange={this.handleChange}
              />

            <label>
              Idade:
              <input 
                type="number" 
                name="idade"
                value={this.state.idade}
                onChange={this.handleChange}
              />
            </label>
            <SelectAnimal 
              value={this.state.name}
              handleChange={this.handleChange}
              animais={animais}
            />

            <label>
              Fale Mais Sobre Você:
              <textarea 
                name="maisSobre"
                value={this.state.maisSobre}
                onChange={this.handleChange}
              />
            </label>
          </fieldset>
          
          <label>
            Vai comparecer?
            <input 
              type="checkbox" 
              name="vaiComparecer"
              value={this.state.vaiComparecer}
              onChange={this.handleChange}
            />
          </label>

          <input type="file" />

        </form>
      </>
    )
  }
}

export default Form;