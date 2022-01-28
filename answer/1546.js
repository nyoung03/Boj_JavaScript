let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let score = input[1].split(" ").map(Number);

let maxScore = Math.max(...score);

let average = [];

for (i = 0; i < n; i++) {
  average.push((score[i] / maxScore) * 100);
}

console.log(average.reduce((a, b) => a + b) / n);
