import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cliquesUm: 0,
      cliquesDois: 0,
      cliquesTres: 0,
    };

    this.handleUm = this.handleUm.bind(this);
    this.handleDois = this.handleDois.bind(this);
    this.handleTres = this.handleTres.bind(this);
    this.classColor = this.classColor.bind(this);
  }

  handleUm() {
    this.setState(
      (estadoAnterior, _props) => ({
        cliquesUm: estadoAnterior.cliquesUm + 1,
      }),
      () => {
        console.log(`cor botão 1: ${this.classColor(this.state.cliquesUm)}`);
      }
    );
  }

  handleDois() {
    this.setState(
      (estadoAnterior, _props) => ({
        cliquesDois: estadoAnterior.cliquesDois + 1,
      }),
      () => {
        console.log(`cor botão 2: ${this.classColor(this.state.cliquesDois)}`);
      }
    );
  }
  handleTres() {
    this.setState(
      (estadoAnterior, _props) => ({
        cliquesTres: estadoAnterior.cliquesTres + 1,
      }),
      () => {
        console.log(`cor botão 3: ${this.classColor(this.state.cliquesTres)}`);
      }
    );
  }

  classColor(number) {
    return number % 2 === 0 ? 'green' : 'red';
  }

  render() {
    const { cliquesUm, cliquesDois, cliquesTres } = this.state;
    return (
      <>
        <button onClick={this.handleUm} className={this.classColor(cliquesUm)}>
          {cliquesUm}
        </button>
        <button
          onClick={this.handleDois}
          className={this.classColor(cliquesDois)}
        >
          {cliquesDois}
        </button>
        <button
          onClick={this.handleTres}
          className={this.classColor(cliquesTres)}
        >
          {cliquesTres}
        </button>
      </>
    );
  }
}

export default App;
