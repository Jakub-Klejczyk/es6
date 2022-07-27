const a = 5;

function nFunc(a, b = 2) {
  return a + b + 3;
}

const arrFunc = (a, b = 2) => a + b + 3;

console.log(arrFunc(5));

var firstName = "Maciek1",
  lastName = "Maćkowski2";

const person = {
  firstName: "Maciek",
  lastName: "Maćkowski",
  sayHello: () => {
    return console.log(`${this.firstName} ${this.firstName}`);
  },
};

person.sayHello();
// var przypisuje wartość do obiektu globalnego, a arrow func skipuje kontekst o jeden etap dalej,
// dlatego zczytuje dane z window, a nie person

const person2 = {
  firstName: "Mariusz",
  lastName: "Mariuszewski",
  sayHello: function () {
    setTimeout(() => {
      console.log(`${this.firstName} ${this.firstName}`);
    }, 1000);
  },
};

person2.sayHello();
//kontekst sayhello został ominięty przez arr func i przekierowany na poziom dalej, czyli person2, dlatego działa

const div = document.createElement("div");
div.style.height = "4rem";
div.style.width = "4rem";
div.style.border = "solid 5px black";
document.body.appendChild(div);

const btn = document.createElement("button");
btn.textContent = "Klikaj!";
btn.style.border = "solid 5px black";
div.appendChild(btn);

btn.addEventListener("click", (e) => {
  //this.style.border = "solid 5px green;
  console.log(this);
});
//skipowanie kontekstu nie działa na obiektach drzewa DOM :(
