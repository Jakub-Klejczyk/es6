const firstName = "Jan";
const lastName = "Kowalski";

// const person3 = {
//     firstName: firstName,
//     lastname: lastname,
//     getFullname: function () {
//       return `Ja to ${this.firstName} ${this.lastName}`;
//     }
//   };

const gfnr = "getFullnameReverse";

const person3 = {
  firstName,
  lastName,
  getFullname() {
    return `Ja to ${this.firstName} ${this.lastName}`;
  },
  [gfnr]() {
    return `Ja to ${this.lastName} ${this.firstName}`;
  },
};

console.log(person3);
console.log(person3.getFullname());
console.log(person3.getFullnameReverse());
