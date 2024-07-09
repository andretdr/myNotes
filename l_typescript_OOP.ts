
////////////////////////////////
// Object Oriented Programming
////////////////////////////////

//////////////////////
// CLASS
//////////////////////
class Car {
  make: string;
  model: string;

  constructor(make: string, model: string) {
    this.make = make;
    this.model = model;
  }

  drive() {
    console.log(`Driving ${this.make} ${this.model}`);
  }
}


// Creating an object (instance) of the Car class
const myCar = new Car("Toyota", "Corolla");
// Output: Driving Toyota Corolla
myCar.drive(); 


///////////////////////////////////////
// ACCESS MODIFIERS
///////////////////////////////////////
// for variables 
// There are 5 access modifiers, namely: Public, Private, Protected, Readonly, and Static

////////////
// PUBLIC

class Person {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const person = new Person("John");
console.log(person.name); // Accessible

//////////////
// PRIVATE

class BankAccount {
  private balance: number;
  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }
  deposit(amount: number) {
    this.balance += amount;
  }
}

const account = new BankAccount(1000);
// account.balance = 2000; // Error: 'balance' is private
// They cannot be accessed from outside the class, including derived classes, as below

///////////////
// PROTECTED

class Person {
  protected age: number;
  constructor(age: number) {
    this.age = age;
  }
}

class Employee extends Person {
  getAge() {
    return this.age; // Accessible in derived class
  }
}

const emp = new Employee(30);
// console.log(emp.age); // Error: 'age' is protected

/////////////////
// READ ONLY

class Car {
  readonly vin: string;
  constructor(vin: string) {
    this.vin = vin;
  }
}
const car = new Car("ABC123");
car.vin = "XYZ789"; // Error: Cannot assign to 'vin' because it is a read-only property
// Readonly properties can only be set during initialisation or in the constructor.

//////////////
// STATIC
// Static members belong to the class itself rather than instances of the class
// They can be accessed using the class name without creating an instance.

class MathOperations {
  static PI: number = 3.14159;
  static square(x: number): number {
    return x * x;
  }
}
console.log(MathOperations.PI);
console.log(MathOperations.square(5));

/////////////////////////////////
// METHODS
/////////////////////////////////

class BankAccount {
  private balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  deposit(amount: number): void {
    this.balance += amount;
  }

  withdraw(amount: number): boolean {
    if (amount <= this.balance) {
      this.balance -= amount;
      return true;
    }
    return false;
  }

  getBalance(): number {
    return this.balance;
  }
}

const account = new BankAccount(1000);
account.deposit(500);
console.log(account.getBalance()); // Output: 1500


////////////////////////////////
// ABSTRACTION
////////////////////////////////

// ABSTRACT CLASS
// These are base classes that cannot be instantiated directly but serve as blueprints for other classes

// ABSTRACT METHODS
// These are methods declared without an implementation in the abstract class, which must be 
// implemented by any concrete (non-abstract) derived class

// abstract class, cannot be instantiated directly, serving as a template for more specific vehicle types
abstract class Vehicle {
  // start is abstract, all derived classes must implement their own start() method
  abstract start(): void;
  // move is concrete, default implementation that can be inherited by derived classes
  move() {
    console.log("Vehicle is moving");
  }
}
// more below

///////////////////////////////////////
// INHERITANCE
///////////////////////////////////////
// EXTENDS

// from above
// move() method from the Vehicle class
class ElectricCar extends Vehicle {
  start() {
    console.log("Electric car starting silently");
  }
}

const tesla = new ElectricCar();
tesla.start(); // Output: Electric car starting silently
tesla.move();  // Output: Vehicle is moving

// another example

class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound(): void {
    console.log("Some generic animal sound");
  }
}

class Dog extends Animal {
  // automatically inherits the name property from the Animal class
  breed: string;
  // 
  constructor(name: string, breed: string) {
    // invokes the constructor of the parent Animal class, passing the name parameter
    super(name);
    this.breed = breed;
  }
  // method overriding the baseclass
  makeSound(): void {
    console.log("Woof! Woof!");
  }
}

const myDog = new Dog("Buddy", "Labrador");
console.log(myDog.name); // Output: Buddy
myDog.makeSound(); // Output: Woof! Woof!

//////////////////////
// INTERFACE
//////////////////////
// Defines structure that classes can implement. It specifies a set of properties and methods that a class must have
// Interfaces only declare the structure (properties and method signatures) without providing any implementation details
// abstract classes can have implementation - interface cannot. SOLELY for structure n types

interface InterfaceName {
  property1: type;
  property2: type;
  method1(): returnType;
  method2(param: type): returnType;
}

class ClassName implements InterfaceName {
  // Implementation of interface properties and methods
}

// another

interface Shape {
  calculateArea(): number;
}

class Circle implements Shape {
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  calculateArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

class Rectangle implements Shape {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  calculateArea(): number {
    return this.width * this.height;
  }
}


function printArea(shape: Shape) {
  console.log(`Area: ${shape.calculateArea()}`);
}

printArea(circle); // Output: Area: 78.53981633974483
printArea(rectangle); // Output: Area: 24

///////////////////
// TYPE GUARD
// INSTANCEOF
///////////////////
// Check if object is instanceof className

if (object instanceof ClassName) {
  // TypeScript knows that 'object' is an instance of ClassName here
}

function makeSound(animal: Animal) {
  if (animal instanceof Dog) {
    // TypeScript knows 'animal' is a Dog here
    animal.bark(); // OK
  } else if (animal instanceof Cat) {
    // TypeScript knows 'animal' is a Cat here
    animal.meow(); // OK
  } else {
    // TypeScript knows 'animal' is just an Animal here
    animal.move(); // OK
  }
}

const myDog = new Dog();
const myCat = new Cat();

makeSound(myDog); // Output: Woof!
makeSound(myCat); // Output: Meow!
