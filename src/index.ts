// function sigantures


// returns void

let greet : (name:string , id:number) => void; // have to use let

greet = (name:string, id:number) => {
  console.log(`${name}'s id is ${id}`);
}

// returns number

let calc : (a:number, b:number, c:string) => number;
calc = (a:number, b:number, c:string) => {
  if(c =='add') {
    return a+b;
  }
  else {
    return a-b; //it has to return a number
  }
}

// fun signature using type alias

let greeting : (obj: {name:string, id:string|number}) => void;

type objname = {name:string, id: string|number};

greeting = (obj:objname) => {
  let {name, id} = obj;
  console.log(`you are ${name}. Your id is ${id}`);
}
