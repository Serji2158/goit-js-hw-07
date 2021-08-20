// Напиши скрипт, который реагирует на изменение значения input#font-size-control
//  (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. 
//  В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" />
// <br />
// <span id="text">Абракадабра!</span>

const sizeControl = document.querySelector('#font-size-control');
const textStyle = document.querySelector('#text');

sizeControl.addEventListener('input', textStyleChanging);

function textStyleChanging({ target }) {
    if (target.value) {
        textStyle.style.fontSize = `${Number(target.value)}px`;
    }
}