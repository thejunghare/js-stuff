// DOM -> document object model ->. create, update, delete and read HTML elements
// BOM -> browser object model -> window, localstorage, session storage

// let , var, const 

// 2. grab the button
let addButton = document.getElementById('add-btn');
console.log(addButton); // button element

addButton.addEventListener('click', () => {
    // 1. get the input entered by user
    let userInput = document.getElementById('todo-input').value;
    //console.log('user said: ', userInput);

    //  I want to add this userinput to localstorage
    localStorage.setItem('todo', userInput) // hi
    //console.log('Stored Input:', localStorage.getItem('todo')) // hi
});