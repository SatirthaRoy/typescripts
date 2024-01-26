"use strict";
// function sigantures
// returns void
let greet; // have to use let
greet = (name, id) => {
    console.log(`${name}'s id is ${id}`);
};
// returns number
let calc;
calc = (a, b, c) => {
    if (c == 'add') {
        return a + b;
    }
    else {
        return a - b; //it has to return a number
    }
};
// fun signature using type alias
let greeting;
greeting = (obj) => {
    let { name, id } = obj;
    console.log(`you are ${name}. Your id is ${id}`);
};
