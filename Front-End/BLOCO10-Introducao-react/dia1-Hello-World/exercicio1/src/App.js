import './App.css';

const Task = (value, index) => {
  return (
    <li key={index}>{value}</li>
  );
}

const compromissos = ['Aula Ingles', 'Academia', 'Fazer Almoço', 'Almoçar', 'Aula ao vivo']

function App() {
  return (
    <ul>
      {compromissos.map((compromisso, index)=>Task(compromisso, index))}
    </ul>
  );
}

export default App;
