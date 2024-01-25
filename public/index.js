"use strict";
const head = document.querySelector('h1');
console.log(head);
// function parameter type is set like this
const area = (d) => d * Math.PI;
let d = 12;
// obj
let obj;
obj = {
    name: 'satirtha',
    age: 21,
    belt: 'black'
};
console.log(obj);
// another way of setting obj types
let anObj;
anObj = [1, 2, 3]; // because an array is an object
// array types
let arr; // we cannot push items in this but can only declare in
let arr1 = [];
arr1.push('himu', 'satirtha', 'roy'); // this way we can push items in an arra
// union types
let mixedArr = [];
mixedArr = [12, 'himu', false, 'black'];
console.log("mixed arr = " + mixedArr);
let value;
value = 'name';
value = 21;
value = false; // it can bbe str num or bool but cannot be object or array
let anotherValue; // this can be of any type
anotherValue = false;
anotherValue = 12;
anotherValue = [1, 2, 'satirtha'];
anotherValue = {
    name: 'satirtha',
    age: 21,
    isMarried: false
};
// function is also a value
anotherValue = (param) => {
    console.log(param);
};
