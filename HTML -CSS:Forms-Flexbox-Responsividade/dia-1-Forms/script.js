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
const corpoDaPagina = document.querySelector('body');
let dados = '';
let erro = '';
let verificador = true;
const nome = document.getElementById('nome'); 
const email = document.getElementById('email');
const cpf = document.getElementById('cpf'); 
const endereco = document.getElementById('endereco');
const cidade = document.getElementById('cidade');
const estado = document.getElementById('estado');
const tipoMoradia = document.getElementsByName('tipo-moradia');




for (let i in estados) {
  const estado = document.createElement('option');
  estado.innerText = estados[i].nome;
  estado.value = estados[i].sigla;
  seletorEstado.appendChild(estado);
}

btnEnviar.addEventListener('click', (e)=>{
  e.preventDefault();
  verificarInfos();
  if(verificador === false) {
    imprimeMensagemErro();
  } else {
    imprimeDadosConsolidados();
  }
});

function verificarInfos () {
  if(nome.value.trim() !== '' || nome.length <= 40 ) {
    dados += `nome: ${nome.value};`
  } else {
    verificador = false;
    erro += ` Nome inválido;`
  }
  if(email.value.trim() !== '' || email.length <= 50 ) {
    dados += ` e-mail: ${email.value};`
  } else {
    verificador = false;
    erro += ` email inválido;`
  }
  if(cpf.value.trim() !== '' || cpf.length <= 11 ) {
    dados += ` e-mail: ${cpf.value};`
  } else {
    verificador = false;
    erro += ` CPF inválido;`
  }
  if(endereco.value.trim() !== '' || endereco.length <= 200 ) {
    dados += ` Endereço: ${endereco.value};`
  } else {
    verificador = false;
    erro += ` Endereço inválido;`
  }
  if(cidade.value.trim() !== '' || cidade.length <= 28 ) {
    dados += ` Cidade: ${cidade.value};`
  } else {
    verificador = false;
    erro += ` Cidade inválido;`
  }
  if(estado.value.trim() !== '') {
    dados += ` estado: ${estado.value};`
  } else {
    verificador = false;
    erro += ` estado inválido;`
  } 
  if(tipoMoradia[0].checked == false && tipoMoradia[1].checked == false) {
    verificador = false;
    erro += ` selecione um tipo de Moradia;`
  } else if  (tipoMoradia[0].checked == true) {
    dados += ` Tipo de Moradia: casa;`
  } else {
    dados += ` Tipo de Moradia: ap;`
  }
}

function imprimeDadosConsolidados () {
  const dadosConsolidados = document.createElement('div');
  dadosConsolidados.innerHTML = dados;
  corpoDaPagina.appendChild(dadosConsolidados);
}

function imprimeMensagemErro () {
  const mensagemErro = document.createElement('div');
  mensagemErro.innerHTML = erro;
  corpoDaPagina.appendChild(mensagemErro);
}