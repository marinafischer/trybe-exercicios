import { Component } from "react";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

const item = ({conteudo, bloco, status}, index) => {
  return (
    <li key={index}> {`O conteúdo é: ${conteudo}`}
      <p>{`Status: ${status}`}</p>
      <p>{`Bloco: ${bloco}`}</p>
    </li>
  )
}

class Content extends Component {
  render() {
    return (
      <ul className='content'>
        {conteudos.map((content, index)=>item(content, index))}
      </ul>
    );
  }
}

export default Content;