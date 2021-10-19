let cabecalho = document.getElementById('header-container');
cabecalho.style.backgroundColor = 'lightgreen';

let tarefasUrgentes = document.querySelectorAll('.emergency-tasks');
for (let tarefa of tarefasUrgentes) {
  tarefa.style.backgroundColor = 'pink';
}

let tituloTarefa = document.querySelectorAll('h3');
for (let i=0; i<=1; i++) {
  tituloTarefa[i].style.backgroundColor = 'purple';
}

for (let i=2; i<=3; i++) {
  tituloTarefa[i].style.backgroundColor = 'black';
}

let tarefasNaoUrgentes = document.querySelectorAll('.no-emergency-tasks');
for (let tarefa of tarefasNaoUrgentes) {
  tarefa.style.backgroundColor = 'yellow';
}

let rodaPe = document.getElementById('footer-container');
rodaPe.style.backgroundColor='greens'


