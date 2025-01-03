// The way i want it to work

// let i = 0;
// setInterval(() => {
//   console.log(i);
//   i += 1;
// }, 1000);

let colorArr = ["red", "green", "blue", "yellow", "purple"];

let i = 0;

let background = document.querySelector(".container");

let intervalId;

let startCycle = () => {
  intervalId = setInterval(() => {
    background.style.backgroundColor = colorArr[i];
    i = (i + 1) % colorArr.length;
  }, 500);
};

let stopCycle = () => {
  clearInterval(intervalId);
};

let startBtn = document.querySelector("#startBtn");

startBtn.addEventListener("click", startCycle);

let stopBtn = document.querySelector("#stopBtn");
stopBtn.addEventListener("click", stopCycle);
