document.getElementById('btn-change').onclick = changeColor;
let currentColor = 'black';
let text = document.getElementById('text');
function changeColor() {
    if (currentColor == 'black') {
        text.style.color = 'red';
        currentColor = 'red';
    } else {
        text.style.color = 'black';
        currentColor = 'black';
    }
    return currentColor;
}

