let firstQuestionAnswer3 = document.getElementById("answer3");
let firstQuestionLabel1 = document.getElementById("label1");
let firstQuestionLabel2 = document.getElementById("label2");
let firstQuestionLabel3 = document.getElementById("label3");
let firstQuestionLabel4 = document.getElementById("label4");

let secondQuestionAnswer2 = document.getElementById("answer6");
let secondQuestionLabel1 = document.getElementById("label5");
let secondQuestionLabel2 = document.getElementById("label6");
let secondQuestionLabel3 = document.getElementById("label7");
let secondQuestionLabel4 = document.getElementById("label8");

let thirdQuestionAnswer1 = document.getElementById("answer9");
let thirdQuestionLabel1 = document.getElementById("label9");
let thirdQuestionLabel2 = document.getElementById("label10");
let thirdQuestionLabel3 = document.getElementById("label11");
let thirdQuestionLabel4 = document.getElementById("label12");

let forthQuestionAnswer4 = document.getElementById("answer16");
let forthQuestionLabel1 = document.getElementById("label13");
let forthQuestionLabel2 = document.getElementById("label14");
let forthQuestionLabel3 = document.getElementById("label15");
let forthQuestionLabel4 = document.getElementById("label16");

let fifthQuestionAnswer1 = document.getElementById("answer17");
let fifthQuestionLabel1 = document.getElementById("label17");
let fifthQuestionLabel2 = document.getElementById("label18");
let fifthQuestionLabel3 = document.getElementById("label19");
let fifthQuestionLabel4 = document.getElementById("label20");

let finalScore = document.getElementById("score");
let Score = 0;

function checkAnswers() {
  //FIRST QUESTION IF//
  if (firstQuestionAnswer3.checked === true) {
    firstQuestionLabel1.style.color = "red";
    firstQuestionLabel2.style.color = "red";
    firstQuestionLabel3.style.color = "limegreen";
    firstQuestionLabel4.style.color = "red";
    Score += 20;
  } else {
    firstQuestionLabel1.style.color = "red";
    firstQuestionLabel2.style.color = "red";
    firstQuestionLabel3.style.color = "limegreen";
    firstQuestionLabel4.style.color = "red";
  }
  //SECOND QUESTION IF//
  if (secondQuestionAnswer2.checked === true) {
    secondQuestionLabel1.style.color = "red";
    secondQuestionLabel2.style.color = "limegreen";
    secondQuestionLabel3.style.color = "red";
    secondQuestionLabel4.style.color = "red";
    Score += 20;
  } else {
    secondQuestionLabel1.style.color = "red";
    secondQuestionLabel2.style.color = "limegreen";
    secondQuestionLabel3.style.color = "red";
    secondQuestionLabel4.style.color = "red";
  }

  //THIRD QUESTION IF//
  if (thirdQuestionAnswer1.checked === true) {
    thirdQuestionLabel1.style.color = "limegreen";
    thirdQuestionLabel2.style.color = "red";
    thirdQuestionLabel3.style.color = "red";
    thirdQuestionLabel4.style.color = "red";
    Score += 20;
  } else {
    thirdQuestionLabel1.style.color = "limegreen";
    thirdQuestionLabel2.style.color = "red";
    thirdQuestionLabel3.style.color = "red";
    thirdQuestionLabel4.style.color = "red";
  }

  //FORTH QUESTION IF//
  if (forthQuestionAnswer4.checked === true) {
    forthQuestionLabel1.style.color = "red";
    forthQuestionLabel2.style.color = "red";
    forthQuestionLabel3.style.color = "red";
    forthQuestionLabel4.style.color = "limegreen";
    Score += 20;
  } else {
    forthQuestionLabel1.style.color = "red";
    forthQuestionLabel2.style.color = "red";
    forthQuestionLabel3.style.color = "red";
    forthQuestionLabel4.style.color = "limegreen";
  }

  //FIFTH QUESTION IF//
  if (fifthQuestionAnswer1.checked === true) {
    fifthQuestionLabel1.style.color = "limegreen";
    fifthQuestionLabel2.style.color = "red";
    fifthQuestionLabel3.style.color = "red";
    fifthQuestionLabel4.style.color = "red";
    Score += 20;
  } else {
    fifthQuestionLabel1.style.color = "limegreen";
    fifthQuestionLabel2.style.color = "red";
    fifthQuestionLabel3.style.color = "red";
    fifthQuestionLabel4.style.color = "red";
  }
  finalScore.innerHTML += Score;
  alert("The moment you've been waiting for!!! 🥁🥁");
}
