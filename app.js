const numbers = [1, 2, 3, 4, 5, 6];

//const one = numbers[0]
// const [one] = numbers;
// console.log(one);

const [one, two, , four, ...rest] = numbers;
console.log(one);
console.log(two);
console.log(four);
console.log(rest);

function działania(a, b) {
  return [a + b, a * b];
}

const [suma, mnożenie, dzielenie = "Ni ma!"] = działania(2, 3);

console.log(suma);
console.log(mnożenie);
console.log(dzielenie);

const person = {
  name: "Franek",
  age: 3,
  sports: {
    main: "Sandbox",
    second: "Kindergarden",
    third: "Kindermachen",
  },
};

const { name: firstName, age, food = "Wszystko", ...sports } = person;
const {
  sports: { main },
} = person;

console.log(firstName);
console.log(age);
console.log(food);
console.log(sports);
console.log(main);

const person2 = { ...person };

console.log(person2);

function showYa({ name, age }) {
  console.log(`Nazywam się ${name} i mam ${age} lat`);
}

showYa(person2);
