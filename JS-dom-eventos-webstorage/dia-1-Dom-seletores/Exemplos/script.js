let cabecalho = document.getElementById('header-container');
cabecalho.style.backgroundColor = 'rgb(0, 176, 105)';

let tarefasUrgentes = document.querySelectorAll('.emergency-tasks');
for (let tarefa of tarefasUrgentes) {
  tarefa.style.backgroundColor = 'rgb(255, 159, 132)';
}

let tituloTarefa = document.querySelectorAll('h3');
for (let i=0; i<=1; i++) {
  tituloTarefa[i].style.backgroundColor = 'rgb(165, 0, 243)';
}

for (let i=2; i<=3; i++) {
  tituloTarefa[i].style.backgroundColor = 'rgb(35, 37, 37)';
}

let tarefasNaoUrgentes = document.querySelectorAll('.no-emergency-tasks');
for (let tarefa of tarefasNaoUrgentes) {
  tarefa.style.backgroundColor = 'rgb(249, 219, 94)';
}

let rodaPe = document.getElementById('footer-container');
rodaPe.style.backgroundColor='rgb(0, 53, 51)';


