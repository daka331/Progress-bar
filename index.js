var progressBar = document.querySelector('.progress-bar');
var progressBarPercent = document.querySelector('.progress-bar-percent');
var inputItem = document.querySelectorAll('.input-div-item');
var btn = document.querySelector('.btn');
var sum = 0;
btn.addEventListener('click', updateProgressBar);
function updateProgressBar() {
    for (var _i = 0, inputItem_1 = inputItem; _i < inputItem_1.length; _i++) {
        var item = inputItem_1[_i];
        if (item.value != '') {
            sum = sum + 1;
        }
    }
    var totalPercents = Math.round(sum / inputItem.length * 100);
    progressBar.style.width = totalPercents + '%';
    progressBarPercent.innerText = totalPercents + '%';
    return sum = 0;
}
