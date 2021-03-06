function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

/*
O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>
*/
function criarDias () {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const listaDias = document.querySelector('#days')
  for (let i=0; i<dezDaysList.length;i++) {
    const dia = dezDaysList[i];
    const diaItem = document.createElement('li');
    diaItem.classList.add('day')
    diaItem.innerHTML = dia;
    listaDias.appendChild(diaItem);
    if(dia === 24 || dia === 31) {
      diaItem.classList.add('holiday')
    } else if (dia === 4 || dia === 11 || dia === 18) {
      diaItem.classList.add('friday')
    } else if (dia === 25) {
      diaItem.classList.add('holiday')
      diaItem.classList.add('friday')
    }
  }
}
criarDias();

/*
Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
Adicione a este botão a ID "btn-holiday" .
Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
*/
function criarBotao(nomeBotao) {
  let botao = document.createElement('button');
  botao.id = "btn-holiday";
  botao.innerHTML = nomeBotao
  let containerBotao = document.querySelector('.buttons-container');
  containerBotao.appendChild(botao)
}
criarBotao('Feriados')

 /*
 Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
  É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .
 */

  let botaoFeriado = document.querySelector('#btn-holiday')
  botaoFeriado.addEventListener('click', trocaCorFundo)

  function trocaCorFundo (e) {
    let feriados = document.getElementsByClassName('holiday')
    for (let i=0; i<feriados.length; i++) {
      let feriado = feriados[i];
      if (feriado.style.backgroundColor !== 'pink') {
        feriado.style.backgroundColor = 'pink'
      } else {
        feriado.style.backgroundColor = 'rgb(238,238,238)'
      }  
    }
  }

  /*
Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
Adicione a este botão o ID "btn-friday" .
Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
  */
function criarBotaoSexta(nomeBotao) {
  let botao = document.createElement('button');
  botao.id = "btn-friday";
  botao.innerHTML = nomeBotao
  let containerBotao = document.querySelector('.buttons-container');
  containerBotao.appendChild(botao)
}
criarBotaoSexta('Sexta-feira')

/*
Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.
*/

let botaoSexta = document.querySelector('#btn-friday')
botaoSexta.addEventListener('click', trocaCorFundo2)
let sextas = document.getElementsByClassName('friday')
let sextasDez = [ 4, 11, 18, 25 ]

  function trocaCorFundo2 (e) {    
    for (let i=0; i<sextas.length; i++) {
      let sexta = sextas[i];
      if (sexta.innerHTML !== 'sextou') {
        sexta.innerHTML = 'sextou'
      } else {
        sexta.innerHTML = sextasDez[i]
      }  
    }
  }

  /*
  Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
Dica - Propriedade: event.target .
*/
let diasDoMes = document.getElementsByClassName('day')

for (let i =0; i<diasDoMes.length; i++) {
  let dia = diasDoMes[i]
  dia.addEventListener('mouseover', darZoom)
  dia.addEventListener('mouseleave', tirarZoom)

  function darZoom (e) {
    e.target.style.fontSize = '30px'
  }
  function tirarZoom (e) {
    e.target.style.fontSize = '20px'
  }
}

/*
Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .
*/

/*
Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .
*/

let botaoAdiciona = document.getElementById('btn-add')
let descricaoAtividade = document.getElementById('task-input')
let atividades = document.querySelector('.my-tasks')

botaoAdiciona.addEventListener('click', function(){
  let novaAtividade = document.createElement('span')
  novaAtividade.innerHTML = descricaoAtividade.value
  atividades.appendChild(novaAtividade)
  descricaoAtividade.value=''

  let legenda = document.createElement('div')
  legenda.style.backgroundColor = 'rgb(169, 253, 228)'
  atividades.appendChild(legenda)
})

/*Implemente uma função que adiciona um evento que ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected ela estará selecionada.
Ao clicar novamente no elemento a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.*/

