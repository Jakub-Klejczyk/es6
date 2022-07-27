function pythonSimulator(print = "Hello World") {
  console.log(print);
}

pythonSimulator(); //Hello World
pythonSimulator("Cześć świecie"); //Cześć świecie

function createDiv(
  height = "20rem",
  width = "20rem",
  border = "solid 5px black"
) {
  const div = document.createElement("div");
  div.style.height = height;
  div.style.width = width;
  div.style.border = border;
  document.body.appendChild(div);
}

createDiv();
createDiv("10rem", undefined, "solid 3px blue");

const podatek = () => 0.24;
const twojaPensja = function (pensja, brutto = pensja * podatek()) {
  return pensja + brutto;
};

const twojeBrutto = twojaPensja(1000);
console.log(twojeBrutto); //1024
