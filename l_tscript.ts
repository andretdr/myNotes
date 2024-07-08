// Type System
// primitives

//https://www.typescriptlang.org/
//////////////////////////////////

number
string
boolean
undefined
null
symbol
bigInt


////////////////////////////////
// declaring vars require initialising type
////////////////////////////////
let variableName: type = value;

const name: string;

function greet(name: string): string {
  return 'hi ${name}!';
}

//////////////////////
// functions
//////////////////////

const greet = ():string => {}

const add = (x:number, y:number): number => {
    return x+y;
}

///////////////////
// optional param

function introduce(name: string, age?: number): string {
  if (age !== undefined) {
    return `Hi, I'm ${name}, and I'm ${age} years old.`;
  } else {
    return `Hi, I'm ${name}.`;
  }
}

///////////////////
// default param

function calculatePrice(price: number, taxRate: number = 0.1): number {
  return price + price * taxRate;
}

//////////////////
// Arrays
//////////////////

let numbers: number[] = [1, 2, 3, 4, 5];
// or
let numbers: Array<number> = [1, 2, 3, 4, 5];

const names: string[] = ["Alice", "Bob", "Charlie"]; 

let number[][] = [[1,2,3][3,4,5]]

/////////////////
// Object
/////////////////

// assign the object types first 
let person: { name: string; age: number } = { name: "John", age: 30 };


/////////////////
// Custom Type
/////////////////

// Custom type for a person
type Person = {
  name: string;
  age: number;
};

// Function with a custom type parameter and return type
function greet(person: Person): string {
  return `Hello, ${person.name}! You are ${person.age} years old.`;
}





