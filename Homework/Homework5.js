var color = [, "#3C9EE7", "#E7993C",
    "#E73C99", "#3CE746", "#E7993C"
];

document.querySelector("div").addEventListener(
    "mouseover",
    function() {
        document.querySelector("div").style.background = color[Math.floor(Math.random() * color.length)];
    })

// Задание сделать to do list при нажатии на одно из заданий оно зачеркивается и меняет цвет! 
let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function() {
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click', function() {
        paragraph.style.textDecoration = "line-through";
        paragraph.style.color = "red";
    })
    paragraph.addEventListener('dblclick', function() {
        toDoContainer.removeChild(paragraph);
    })
})