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


type Student = {name: string, age: number, isStudent: boolean}
const students : Student[]=[
    { name: 'Alice', age: 25, isStudent: true },
    { name: 'Bob', age: 22, isStudent: false },
    { name: 'Charlie', age: 23, isStudent: true }
]


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

//////////////////////
// typed in arrow function

const createPerson = (name: string, age: number):{name: string, age: number} => {
    return ({name: `${name}`, age: age})
}


/////////////////////////////////
// Type Alias
/////////////////////////////////
// keep in a type file and export and reuse

type Name = string;
type Age = number;
type Coordinate = [number, number];



///////////////////////////////////
// UNION type
///////////////////////////////////
//   | OR

type FinancialAccount = SavingsAccount | CheckingAccount | InvestmentAccount;

type SavingsAccount = {
  accountType: "savings";
  balance: number;
  interestRate: number;
};

type CheckingAccount = {
  accountType: "checking";
  balance: number;
  overdraftLimit: number;
};

type InvestmentAccount = {
  accountType: "investment";
  balance: number;
  portfolio: string[];
};

/////////////////
// inputs can also be OR

function printId(id: number | string) {
    console.log(id);
}

// Have to be strict with checking type if using OR, usually will check using commin field
// in above example would be accountType
if (account.accountType === 'savings) console.log('savings acc');


/////////////////////////////
// INTERSECTION TYPE
/////////////////////////////
//    & AND

type MyType = TypeA & TypeB;

type Admin = {
    name: string;
    isAdmin: boolean;
}

type Employee = {
    name: string;
    role: string;
}

type AdminEmployee = Admin & Employee;

const adminEmployee: AdminEmployee = {
    name: "Alice",
    isAdmin: true,
    role: "Manager"
};

// if you have fields that conflict when merged, you cannot & them

type SavingsAccount = {
  accountType: "savings";
  ..}

type CheckingAccount = {
  accountType: "checking";
  ..}

// CANNOT, the accountTypes cannot resolve
NewAcc = SavingsAccount & CheckingAccount;


////////////////////////////
// Other types
////////////////////////////

// ANY 
// reverts back to non-typed, not reccomended
let x: any;

// array
let numbers: number[] = [1, 2, 3];

// tuples
let tuple: [string, number] = ["hello", 10];

// enum
enum Color {Red, Green, Blue}
let c: Color = Color.Green;

// void
  function warnUser(): void {
  console.log("This is a warning message");
}

// unknown

// never

