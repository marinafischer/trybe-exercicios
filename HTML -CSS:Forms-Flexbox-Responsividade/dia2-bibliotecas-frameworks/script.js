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
const resumoCurriculo = document.getElementById('resumo-curriculo');
const cargo = document.getElementById('cargo');
const descricaoCargo = document.getElementById('descricao-cargo');
const dataInicio = document.getElementById('data-inicio');
const btnLimparDados = document.getElementById('limparDados');
const mensagemErro = document.createElement('div');
const dadosConsolidados = document.createElement('div');
dataInicio.DatePickerX.init({format: 'dd-mm-yyyy'});


//gera as options do estado
for (let i in estados) {
  const estado = document.createElement('option');
  estado.innerText = estados[i].nome;
  estado.value = estados[i].sigla;
  seletorEstado.appendChild(estado);
}

//botão enviar - retira comportamento normal e faz verificações via JS
btnEnviar.addEventListener('click', (e)=>{
  e.preventDefault();
  verificarInfos();
//   if(verificador === false) {
//     imprimeMensagemErro();
//   } else {
//     imprimeDadosConsolidados();
//   }
});

btnLimparDados.addEventListener('click', (e) => {
  e.preventDefault();
//   limpaDados();

})

// verificações dos campos 
function verificarInfos () {

//   if(nome.value.trim() !== '' && nome.value.length <= 40 ) {
//     dados += `nome: ${nome.value} <br>`
//   } else {
//     verificador = false;
//     erro += `Nome inválido <br>`
//   }
//   if(email.value.trim() !== '' && email.value.length <= 50 && email.value.includes('@')) {
//     dados += `e-mail: ${email.value} <br>`
//   } else {
//     verificador = false;
//     erro += ` e-mail inválido <br>`
//   }
//   if(cpf.value.trim() !== '' && cpf.value.length === 11 && Number(cpf.value) ) {
//     dados += `CPF: ${cpf.value} <br>`
//   } else {
//     verificador = false;
//     erro += `CPF inválido <br>`
//   }
//   if(endereco.value.trim() !== '' && endereco.value.length <= 200 ) {
//     dados += `endereço: ${endereco.value} <br>`
//   } else {
//     verificador = false;
//     erro += `Endereço inválido <br>`
//   }
//   if(cidade.value.trim() !== '' && cidade.value.length <= 28 ) {
//     dados += `cidade: ${cidade.value} <br>`
//   } else {
//     verificador = false;
//     erro += `Cidade inválida <br>`
//   }
//   if(estado.value.trim() !== '') {
//     dados += `estado: ${estado.value} <br>`
//   } else {
//     verificador = false;
//     erro += `Estado inválido <br>`
//   } 
//   if(tipoMoradia[0].checked == false && tipoMoradia[1].checked == false) {
//     verificador = false;
//     erro += `Selecione um tipo de Moradia <br>`
//   } else if  (tipoMoradia[0].checked == true) {
//     dados += `Tipo de Moradia: casa <br>`
//   } else {
//     dados += `Tipo de Moradia: ap <br>`
//   }
//   if(resumoCurriculo.value.trim() !== '' && resumoCurriculo.value.length <= 1000 ) {
//     dados += `Resumo do Currículo: ${resumoCurriculo.value} <br>`
//   } else {
//     verificador = false;
//     erro += `Resumo do Currículo inválido <br>`
//   }
//   if(cargo.value.trim() !== '' && cargo.value.length <= 40) {
//     dados += `Cargo: ${cargo.value} <br>`
//   } else {
//     verificador = false;
//     erro += `Cargo inválido <br>`
//   }
//   if(descricaoCargo.value.trim() !== '' && descricaoCargo.value.length <= 40) {
//     dados += `Descrição do Cargo: ${descricaoCargo.value} <br>`
//   } else {
//     verificador = false;
//     erro += `Descrição do Cargo inválida <br>`
//   }
  dados += `Data de início: ${dataInicio.value} <br>`
}

// //cria a Div com os dados inseridos
// function imprimeDadosConsolidados () {
//   dadosConsolidados.innerHTML = dados;
//   dadosConsolidados.className = 'data'
//   corpoDaPagina.appendChild(dadosConsolidados);
// }

// //cria div de divergencia dos dados
// function imprimeMensagemErro () {
//   mensagemErro.innerHTML = erro;
//   mensagemErro.className = 'error'
//   corpoDaPagina.appendChild(mensagemErro);
// }

// //limpar Dados inseridos e armazenados
// function limpaDados () {
//   erro = '';
//   mensagemErro.innerHTML = erro;
//   mensagemErro.className = ''
//   dados = '';
//   dadosConsolidados.innerHTML = dados;
//   dados.className =  '';
//   verificador = true;
//   nome.value = '' 
//   email.value = '' 
//   cpf.value = ''   
//   endereco.value = ''  
//   cidade.value = ''  
//   estado.value = ''  
//   tipoMoradia[0].checked = false;
//   tipoMoradia[1].checked = false;
//   resumoCurriculo.value = '' 
//   cargo.value = '' 
//   descricaoCargo.value = '' 
//   dataInicio.value = '' 
// }