const promise = new Promise((resolve, rejest) => {
  const a = 1 + 1;
  if (a === 2) {
    resolve("success");
  } else {
    rejest("failure");
  }
});

promise
  .then((msg) => {
    console.log(msg);
  })
  .catch((msg) => {
    console.log(msg);
  });

//--------------------
const student1 = false;
const student2 = false;

function testPytań() {
  return new Promise((resolve, reject) => {
    if (!student1) {
      reject({
        name: "student1",
        test: "niezdane",
      });
    } else if (!student2) {
      reject({
        name: "student2",
        test: "niezdane",
      });
    } else {
      resolve("braaawo!");
    }
  });
}

testPytań()
  .then((weryfikacja) => {
    console.log(weryfikacja);
  })
  .catch((err) => {
    console.log(err.name + " " + err.test);
  });

//(student1 === false) === (!student)

//-------------
const task1 = new Promise((resolve, reject) => {
  resolve("task one done");
});

const task2 = new Promise((resolve, reject) => {
  resolve("task dwo done");
});

const task3 = new Promise((resolve, reject) => {
  resolve("task three done");
});

Promise.race([task1, task2, task3]).then((msg) => {
  console.log(msg);
});

Promise.all([task1, task2, task3]).then((msg) => {
  console.log(msg);
});
