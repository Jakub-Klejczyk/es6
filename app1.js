class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

function sayHello(person) {
  return `${person.name} ${person.lastName}`;
}

export function sayHello2(person) {
  return `Nazywam się ${person.name} i mam ${person.lastName} lat.`;
}

export default Person;
export { sayHello };
