// type aliases

type strOrnum = string | number; //by type aliases we can declare our own custom types and what the type shall include
type objName = {name: string, uid: strOrnum};

// a function

const greeting = (name: string, id: string|number) => { // we can use type aliases if we use the same type multiple times
  console.log(`hellow ${name}.. your id is ${id}`);
}

const greet = (info: objName) => {
  const {name,uid} = info; // destucturing obj
  console.log(`hellow ${name}. your id ${uid}`);
}

greet({name: 'satirtha', uid: 1234});
