const seletorEstado = document.getElementById('estado');
const estados = [
  {
    nome: 'Acre',
    sigla: 'AC',
  },
  {
    nome: 'Alagoas',
    sigla: 'AL',
  },
  {
    nome: 'Amapá',
    sigla: 'AP',
  },
  {
    nome: 'Amazonas',
    sigla: 'AM',
  },
  {
    nome: 'Bahia',
    sigla: 'BA',
  },
  {
    nome: 'Ceará',
    sigla: 'CE',
  },
  {
    nome: 'Espírito Santo',
    sigla: 'ES',
  },
  {
    nome: 'Goiás',
    sigla: 'GO',
  },
  {
    nome: 'Maranhão',
    sigla: 'MA',
  },
  {
    nome: 'Mato Grosso',
    sigla: 'MT',
  },
  {
    nome: 'Mato Grosso do Sul',
    sigla: 'MS',
  },
  {
    nome: 'Minas Gerais',
    sigla: 'MG',
  },
  {
    nome: 'Pará',
    sigla: 'PA',
  },
  {
    nome: 'Paraíba',
    sigla: 'PB',
  },
  {
    nome: 'Paraná',
    sigla: 'PR',
  },
  {
    nome: 'Pernambuco',
    sigla: 'PB',
  },
  {
    nome: 'Piauí',
    sigla: 'PI',
  },
  {
    nome: 'Rio de Janeiro',
    sigla: 'RJ',
  },
  {
    nome: 'Rio Grande do Norte',
    sigla: 'RN',
  },
  {
    nome: 'Rio Grande do Sul',
    sigla: 'RS',
  },
  {
    nome: 'Rondônia',
    sigla: 'RO',
  },
  {
    nome: 'Roraima',
    sigla: 'RR',
  },
  {
    nome: 'Santa Catarina',
    sigla: 'SC',
  },
  {
    nome: 'São Paulo',
    sigla: 'SP',
  },
  {
    nome: 'Sergipe',
    sigla: 'SE',
  },
  {
    nome: 'Tocantins',
    sigla: 'TO',
  },
  {
    nome: 'Distrito Federal',
    sigla: 'DF',
  },
];
const btnEnviar = document.getElementById('enviarDados');

for (let i in estados) {
  const estado = document.createElement('option');
  estado.innerText = estados[i].nome;
  estado.value = estados[i].sigla;
  seletorEstado.appendChild(estado);
}

btnEnviar.addEventListener('click', (e)=>{
  e.preventDefault();
})