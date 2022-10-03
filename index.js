// Есть блок с текстом на странице и кнопка.При нажатии на кнопку текст изменяет цвет.
// При повторном нажатии – возвращается предыдущий цвет.




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


// function changeColor(elem, color) {
//     let text = document.getElementById('text');
    
//     if ('onclick')
//         text.style.color = '';
//     else
//     text.style.color = 'red'; 

    

    // document.getElementById('text').style.color = 'red';   !!!!!
    
    // changeColor.addEventListener('click', function () {
    //     text.classList.toggle('text');
    //     changeColor.innerHTML == 'red' ?
    //     changeColor.innerHTML = '' :
    //     changeColor.innerHTML = 'red';
    // })
    
    // return document.getElementById('text').style.color = '';




// let text = document.getElementById('text');
// let btnChange = document.getElementById('btn-change');
// btnChange.addEventListener('click', function () {
//     text.classList.toggle('text');
//     btnChange.innerHTML == 'red' ?
//     btnChange.innerHTML = '' :
//     btnChange.innerHTML = 'red';
// })






