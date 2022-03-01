const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let num = Number(input[0]);
let answer = "";

for (i = 1; i <= num; i++) {
  answer += i + "\n";
}
console.log(answer);
