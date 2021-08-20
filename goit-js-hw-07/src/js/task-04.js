// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

const counterView = document.querySelector('#counter');

const refs = {
    btnDecr: counterView.querySelector('[data-action="decrement"]'),
    btnIncr: counterView.querySelector('[data-action="increment"]'),
    span: counterView.querySelector('#value'),
};

// btnDecr.classList.add('btn-color');
// btnIncr.classList.add('btn-color');

let counterValue = Number(refs.span.textContent);


refs.btnIncr.addEventListener('click', onIncrement);
function onIncrement() {
    counterValue +=1;
    refs.span.textContent = counterValue;
};


refs.btnDecr.addEventListener('click', onDecrement);
function onDecrement() {
    counterValue -=1;
    refs.span.textContent = counterValue;
}