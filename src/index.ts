const head = document.querySelector('h1');
console.log(head);
// function parameter type is set like this
const area = (d: number)=> d*Math.PI;

let d:number = 12;

// obj
let obj: { //has to be a colone not equal sign cause we are declaring the data types of the obj not the value
  name: string,
  age: number,
  belt: string
}

obj = {
  name: 'satirtha',
  age: 21,
  belt: 'black'
}

console.log(obj);

// another way of setting obj types
let anObj: object;
anObj = [1,2,3]; // because an array is an object

// array types

let arr: string[]; // we cannot push items in this but can only declare in

let arr1: string[] =[];

arr1.push('himu', 'satirtha', 'roy'); // this way we can push items in an arra

// union types

let mixedArr: (string|number|boolean)[] = [];
mixedArr = [12, 'himu', false, 'black'];
console.log("mixed arr = " + mixedArr)

let value: string|number|boolean;

value = 'name';
value = 21;
value = false; // it can bbe str num or bool but cannot be object or array

let anotherValue: any; // this can be of any type

anotherValue = false;
anotherValue = 12;
anotherValue = [1,2, 'satirtha'];
anotherValue = {
  name: 'satirtha',
  age: 21,
  isMarried: false
}

// function is also a value
anotherValue = (param:any)=> {
  console.log(param);
}


const sum = (a:number, b:number, c?:number|string) => a+b; //c is optional its default value is 0

const summation = (a:number, b:number, c:number = 10) => a+b+c;

let result = sum(10,20);
let sumResult = summation(11,31);
