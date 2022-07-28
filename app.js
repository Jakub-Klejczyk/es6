// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// Person.prototype.sayHello = function () {
//   return this.firstName + " " + this.lastName;
// };

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  sayHello() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person1 = new Person("Janeczek", "Kowalski");

console.log(person1.sayHello());

//dziedziczenie

class Student extends Person {
  constructor(firstName, lastName, age = "0") {
    super(firstName, lastName);
    this.age = age;
  }

  // jeśli nie stworze nowego konstruktora to js sam przeniesie nadrzędne parametry przy pomocy spred operatora
  //   constructor(...args) {
  //     super(...args);
  //   }

  sayHello2() {
    return `Nazywam się ${super.sayHello()} i mam ${this.age} lat.`;
  }
}

const student1 = new Student("Mariusz", "Kamiński");

console.log(student1.sayHello2());

// dziedziczyć można również z wbudowanych typów jak np. Array
