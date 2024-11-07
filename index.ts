const progressBar = <HTMLFormElement> document.querySelector('.progress-bar');
const progressBarPercent = <HTMLSpanElement> document.querySelector('.progress-bar-percent');
const inputItem= document.querySelectorAll('.input-div-item');
const btn = <HTMLButtonElement> document.querySelector('.btn');

let sum: number = 0;

btn.addEventListener('click', updateProgressBar);

function updateProgressBar(): number {
    for (let item of inputItem) {
        if ((<HTMLInputElement> item).value != '') {
            sum = sum +1;
        } 
    }
    const totalPercents: number = Math.round(sum / inputItem.length * 100);

    progressBar.style.width = totalPercents + '%';
    progressBarPercent.innerText = totalPercents + '%';

    return sum = 0;
}