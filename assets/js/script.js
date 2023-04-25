// seleciona o formulário e os campos necessários
const form = document.querySelector('form');
const nome = document.querySelector('#nome');
const idade = document.querySelector('#idade');
const contato = document.querySelector('#contato');
const msg2 = document.querySelector('#msg2');
const output = document.querySelector('#output');

form.addEventListener('submit', (event) => {
    const lugarCheckbox = document.querySelector('#lugar_sim');
    if (!lugarCheckbox.checked) {
      alert('Para se inscrever, é necessário ter disponibilidade para participar dos encontros em São Paulo.');
      event.preventDefault();
      return;
    }
  
    const engajamentoSim = document.querySelector('#engajamento_sim');
    if (engajamentoSim.checked && msg.value === '') {
      alert('Por favor, preencha o campo de atividades anteriores.');
      event.preventDefault();
      return;
    }
  
    if (nome.value === '') {
      output.innerHTML = 'Por favor, preencha o campo de nome.';
    } else if (idade.value === '' || idade.value < 14 || idade.value > 21) {
      output.innerHTML = 'Por favor, preencha o campo de idade com um valor entre 14 e 21.';
    } else if (contato.value === '') {
      output.innerHTML = 'Por favor, preencha o campo de contato.';
    } else if (msg2.value === '') {
      output.innerHTML = 'Por favor, preencha o campo de motivo para participar do clube.';
    } else {
      form.submit();
      output.innerHTML = 'Inscrição Feita com sucesso!';
    }
  });