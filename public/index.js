"use strict";
// type aliases
// a function
const greeting = (name, id) => {
    console.log(`hellow ${name}.. your id is ${id}`);
};
const greet = (info) => {
    const { name, uid } = info; // destucturing obj
    console.log(`hellow ${name}. your id ${uid}`);
};
greet({ name: 'satirtha', uid: 1234 });
