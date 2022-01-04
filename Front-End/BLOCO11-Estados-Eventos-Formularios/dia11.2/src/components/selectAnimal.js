import React, { Component } from "react";

class SelectAnimal extends Component {
  render() {
    const { handleChange, value, animais } = this.props;
    return (
      <label>
        Animal Favorito:
        <select 
          name="animal" 
          value={value} 
          onChange={handleChange}
        >
          {animais.map((animal) => (
            <option key={animal} value={animal}>
              {animal}
            </option>
          ))}
        </select>
      </label>
    );
  }
}

export default SelectAnimal;
