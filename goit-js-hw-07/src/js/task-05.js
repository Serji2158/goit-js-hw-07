// Напиши скрипт который, при наборе текста в инпуте input#name-input 
// (событие input), подставляет его текущее значение в span#name-output.
//  Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

// <input type="text" placeholder="Ваше имя?" id="name-input" />
// <h1>Привет, <span id="name-output">незнакомец</span>!</h1>


const inText = document.querySelector('#name-input');
const outText = document.querySelector('#name-output');

inText.addEventListener('input', addingText);

function addingText ({target}) {
    if(target.value !== ''){
      outText.textContent = target.value;
      return;
    }
    outText.textContent = 'незнакомец';
}

