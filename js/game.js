// Adding span element where to show the names on the games page to a variable
let nameP1Placeholder = document.querySelector(".player1-name-placeholder");
let nameP2Placeholder = document.querySelector(".player2-name-placeholder");

// Assigning the data from input to a variable
let player1Name = " " + localStorage.getItem('player1-name');
let player2Name = " " + localStorage.getItem('player2-name');

// Adding the text to the span element
nameP1Placeholder.innerHTML = player1Name.toUpperCase();
nameP2Placeholder.innerHTML = player2Name.toUpperCase();