const progressBar = document.querySelector('.progress-bar');
const progressBarPercent = document.querySelector('.progress-bar-percent');
const inputItem = document.querySelectorAll('.input-div-item');
const btn = document.querySelector('.btn');

let sum = 0;

btn.addEventListener('click', updateProgressBar);

function updateProgressBar() {
    for (let item of inputItem) {
        if (item.value != '') {
            sum = sum +1;
        } 
    }
    const totalPercents = Math.round(sum / inputItem.length * 100);

    progressBar.style.width = totalPercents + '%';
    progressBarPercent.innerText = totalPercents + '%';

    sum = 0;
}




