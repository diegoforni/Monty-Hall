

//Simulation without changing doors

// Gets car number between 1 and 3//
var car = Math.floor(Math.random() * 4) + 1;

// Selects a door//
var selection = Math.floor(Math.random() * 4) + 1;


// Gives you a point for winning//
let points = 0;
if (car == selection) {
    points += 1;