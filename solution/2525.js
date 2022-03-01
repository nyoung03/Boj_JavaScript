let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let hour = Number(input[0].split(" ")[0]);
let minute = Number(input[0].split(" ")[1]);

let cooking = Number(input[1].split(" ")[0]);

if (cooking + minute >= 60) {
  let cookingHour = Math.floor((cooking + minute) / 60);
  let cookingMin = (cooking + minute) % 60;

  if (hour + cookingHour >= 24) {
    console.log(hour + cookingHour - 24, cookingMin);
  } else {
    console.log(hour + cookingHour, cookingMin);
  }
} else {
  console.log(hour, minute + cooking);
}
